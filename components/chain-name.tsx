import { useEffect, useState } from 'react';
import { ChainName } from '@cosmos-kit/core';

export const useChainName = (): [ChainName | undefined, (chainName: ChainName | undefined) => void] => {
  const [chainName, setChainName] = useState<ChainName | undefined>(undefined);

  useEffect(() => {
    const storedChainName = window?.localStorage.getItem("selected-chain");
    if (storedChainName) {
      setChainName(storedChainName as ChainName);
    }
  }, []);

  return [chainName, setChainName];
};