import { ChainName } from '@cosmos-kit/core';
import { useEffect, useState } from 'react';
import { chains } from 'chain-registry';
import axios from 'axios';
import { useValoperAddress } from './get-valoper';

export function useValidatorData(chainName: ChainName) {
  const [validatorData, setValidatorData] = useState({
    moniker: '',
    details: '',
    identity: '',
  });

  const valoperAddress = useValoperAddress(chainName);

  useEffect(() => {
    const fetchValidatorData = async (chainName: ChainName, valoperAddress: string) => {
      const chainInfo = chains.find(({ chain_name }) => chain_name === chainName);

      if (!chainInfo?.apis?.rest) {
        console.error('REST endpoint not found for the given chainName');
        return;
      }

      const polkachuEndpoint = chainInfo.apis.rest.find(({ provider }) => provider === 'Polkachu');
      const restEndpoint = polkachuEndpoint ? polkachuEndpoint.address : chainInfo.apis.rest[0].address;

      const url = `${restEndpoint}/cosmos/staking/v1beta1/validators/${valoperAddress}`;

      try {
        const response = await axios.get(url);
        const data = response.data;

        const moniker = data.validator.description.moniker;
        const details = data.validator.description.details;
        const identity = data.validator.description.identity;

        return { moniker, details, identity };
      } catch (error) {
        console.error('Error fetching validator data:', error);
      }
    };

    const updateValidatorData = async () => {
      const newValidatorData = await fetchValidatorData(chainName, valoperAddress);
      setValidatorData(newValidatorData || { moniker: '', details: '', identity: '' });
    };

    updateValidatorData();
  }, [chainName, valoperAddress]);

  return validatorData;
}
