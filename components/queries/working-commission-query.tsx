import { ChainName } from '@cosmos-kit/core';
import { useManager } from '@cosmos-kit/react';
import { useState, useMemo, useEffect } from 'react';
import { akash } from '../../codegen';
import { osmosis } from '../../codegen';
import { ChooseChain } from '../react';
import { handleSelectChainDropdown, ChainOption } from '../types';
import { useValoperAddress } from './get-valoper';

export function CommissionFetcher(valoperAddress: string) {
  const [chainName, setChainName] = useState<ChainName | undefined>(
    "cosmoshub"
  );
  const { chainRecords, getChainLogo } = useManager();

  const chainOptions = useMemo(
    () =>
      chainRecords.map((chainRecord) => {
        return {
          chainName: chainRecord?.name,
          label: chainRecord?.chain.pretty_name,
          value: chainRecord?.name,
          icon: getChainLogo(chainRecord.name),
        };
      }),
    [chainRecords, getChainLogo]
  );

  useEffect(() => {
    setChainName(window.localStorage.getItem("selected-chain") || "cosmoshub");
  }, []);

  const onChainChange: handleSelectChainDropdown = async (
    selectedValue: ChainOption | null
  ) => {
    setChainName(selectedValue?.chainName);
    if (selectedValue?.chainName) {
      window?.localStorage.setItem("selected-chain", selectedValue?.chainName);
    } else {
      window?.localStorage.removeItem("selected-chain");
    }
  };

  const chooseChain = (
    <ChooseChain
      chainName={chainName}
      chainInfos={chainOptions}
      onChange={onChainChange}
    />
  );

  useEffect(() => {
    async function fetchCommission() {
      const client = await akash.ClientFactory.createLCDClient({
        restEndpoint: 'https://akash.api.chandrastation.com',
      });

      const data = await client.cosmos.distribution.v1beta1.validatorCommission({
        validatorAddress: valoperAddress,
      });
      console.log('incommissionfunction',valoperAddress)

      const commission = data.commission?.commission[0].amount;
      const roundedCommission = Math.round(Number(commission)) / 100;
      const roundedAmount = Math.round(roundedCommission) / 100;
      return roundedAmount / 100;
    }

    if (valoperAddress) {
      fetchCommission().then((commission) => {
        console.log('Fetched commission:', commission);
        // Do something with the commission, e.g., set it to a state variable or pass it to a callback.
      });
    }
  }, [valoperAddress]);

  return null; // Render nothing, or you can return the chooseChain element if needed.
}
