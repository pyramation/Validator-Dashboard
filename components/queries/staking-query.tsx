import { ChainName } from '@cosmos-kit/core';
import { akash, osmosis } from '../../codegen';
import { useEffect, useState } from 'react';
import { useChain } from '@cosmos-kit/react';

export const selectedChainKey = 'selected-chain';

export function useReward(): number {
  const chainName = window.localStorage.getItem(selectedChainKey) as ChainName;
  const { address } = useChain(chainName);
  const [stakingRewards, setStakingRewards] = useState<number>(0);
  
  useEffect(() => {
    const fetchReward = async (chainName: ChainName, address?: string): Promise<number> => {      
      if (chainName !== 'akash' && chainName !== 'osmosis') {
        throw new Error(`Unsupported chain: ${chainName}`);
      }
  
      let client;
      let denom: string;
      switch (chainName) {
        case 'akash':
          client = await akash.ClientFactory.createLCDClient({
            restEndpoint: 'https://akash.api.chandrastation.com'
          });
          denom = 'uakt';
          break;
        case 'osmosis':
          client = await osmosis.ClientFactory.createLCDClient({
            restEndpoint: 'https://osmosis.api.chandrastation.com'
          });
          denom = 'uosmo';
          break;
      }
  
      const data = await client.cosmos.distribution.v1beta1.delegationTotalRewards({
        delegatorAddress: address ?? '',
      });
  
      const stakingRewards = parseInt(data.total.find((c: any) => c.denom === denom)?.amount || '0');
      const roundedStakingRewards = Math.round(stakingRewards) / 100;
      const roundedAmount = Math.round(roundedStakingRewards) / 10000;
      return Number(roundedAmount.toFixed(2));
    };
  
    const onStorageChange = async (event: StorageEvent) => {
      if (event.key === selectedChainKey) {
        const newChainName = event.newValue as ChainName;
        const newReward = await fetchReward(newChainName, address);
        setStakingRewards(newReward);
      }
    };
  
    const handleVisibilityChange = async () => {
      if (!document.hidden) {
        const newReward = await fetchReward(chainName, address);
        setStakingRewards(newReward);
      }
    };
  
    const init = async () => {
      const newReward = await fetchReward(chainName, address);
      setStakingRewards(newReward);

      window.addEventListener('storage', onStorageChange);
      document.addEventListener('visibilitychange', handleVisibilityChange);
    };

    init();
  
    return () => {
      window.removeEventListener('storage', onStorageChange);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  },[address, chainName])
  return stakingRewards;
}
