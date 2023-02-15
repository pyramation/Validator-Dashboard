import { ChainName } from '@cosmos-kit/core';
import { akash, osmosis } from '../../codegen';
import { useEffect, useState } from 'react';

const selectedChainKey = 'selected-chain';

export function useCommission(): number {
  const [commission, setCommission] = useState<number>(0);
  const [chainName, setChainName] = useState<ChainName | undefined>(
    window.localStorage.getItem(selectedChainKey) as ChainName
  );

  useEffect(() => {
    const fetchCommission = async (chainName: ChainName): Promise<number> => {
      if (chainName !== 'akash' && chainName !== 'osmosis') {
        throw new Error(`Unsupported chain: ${chainName}`);
      }

      let client;
      let denom: string;
      let validatorAddress: string;
      switch (chainName) {
        case 'akash':
          client = await akash.ClientFactory.createLCDClient({
            restEndpoint: 'https://akash.api.chandrastation.com'
          });
          denom = 'uakt';
          validatorAddress = 'akashvaloper1lxh0u07haj646pt9e0l2l4qc3d8htfx5kk698d';
          break;
        case 'osmosis':
          client = await osmosis.ClientFactory.createLCDClient({
            restEndpoint: 'https://osmosis.api.chandrastation.com'
          });
          denom = 'uosmo';
          validatorAddress = 'osmovaloper10ymws40tepmjcu3a2wuy266ddna4ktas0zuzm4';
          break;
      }

      const data = await client.cosmos.distribution.v1beta1.validatorCommission({
        validatorAddress: validatorAddress
      });

      const commission = data.commission?.commission;
      let amount = 0;
      if (commission && commission.length > 0) {
        amount = parseInt(commission.find((c: any) => c.denom === denom)?.amount || '0');
      }

      const roundedCommission = Math.round(Number(amount)) / 100;
      const roundedAmount = Math.round(roundedCommission) / 100;
      return roundedAmount / 100;
    };

    const onStorageChange = async () => {
      const chainName = window.localStorage.getItem(selectedChainKey) as ChainName;
      const newcommission = await fetchCommission(chainName);
      setCommission(newcommission);
      setChainName(chainName);
    };

    const handleVisibilityChange = async () => {
      if (!document.hidden) {
        const chainName = window.localStorage.getItem(selectedChainKey) as ChainName;
        const newcommission = await fetchCommission(chainName);
        setCommission(newcommission);
        setChainName(chainName);
      }
    };

    onStorageChange();

    // Set up event listener for changes to selected chain in local storage
    window.addEventListener('storage', onStorageChange);

    // Set up event listener for page visibility changes
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('storage', onStorageChange);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [chainName]);

  return commission;
}
