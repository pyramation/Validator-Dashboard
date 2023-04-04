import { ChainName } from '@cosmos-kit/core';
import { akash, osmosis } from '../../codegen';
import { useEffect, useState } from 'react';
import { useValoperAddress } from './get-valoper';

export function useCommission(): number {
  const [commission, setCommission] = useState<number>(0);
  const [chainName, setChainName] = useState<ChainName | undefined>(
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
          validatorAddress = 'osmovaloper1hjct6q7npsspsg3dgvzk3sdf89spmlpf6t4agt';
          break;
      }
console.log(validatorAddress)
      const data = await client.cosmos.distribution.v1beta1.validatorCommission({
        validatorAddress: validatorAddress
      });

      const commission = data.commission?.commission;
      let amount = 0;
      if (commission && commission.length > 0) {
        amount = parseInt(commission.find((c: any) => c.denom === denom)?.amount || '0');
      }

      const roundedCommission = Math.round(Number(amount)) / 100;
      const roundedAmount = Math.round(roundedCommission) / 10000;
      return Number(roundedAmount.toFixed(2));
    };

    const updateCommission = async () => {
      window.addEventListener("keplr_keystorechange", () => {
        const chainName = window.localStorage.getItem('selected-chain') as ChainName;
        fetchCommission(chainName).then(newCommission => {
          setCommission(newCommission);
          setChainName(chainName);
        });
      });
    
      const chainName = window.localStorage.getItem('selected-chain') as ChainName;
      const newCommission = await fetchCommission(chainName);
      setCommission(newCommission);
      setChainName(chainName);
    };

    updateCommission();

    // Set up event listener for changes to selected chain in local storage
    window.addEventListener('storage', updateCommission);

    // Set up event listener for window focus
    window.addEventListener('focus', updateCommission);

    // Set up event listener for Keplr's keystore change event
    window.addEventListener('keplr_keystorechange', updateCommission);

    return () => {
      window.removeEventListener('storage', updateCommission);
      window.removeEventListener('focus', updateCommission);
      window.removeEventListener('keplr_keystorechange', updateCommission);
    };
  }, []);

  return commission;
}
