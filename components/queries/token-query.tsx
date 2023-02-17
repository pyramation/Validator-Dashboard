import { ChainName } from '@cosmos-kit/core';
import { akash, osmosis } from '../../codegen';
import { useEffect, useState } from 'react';



export function useToken(): string {
  const [token, setToken] = useState<string>('');
  const [chainName, setChainName] = useState<ChainName | undefined>();

  useEffect(() => {
    const fetchToken = async (chainName: ChainName): Promise<string> => {
      if (chainName !== 'akash' && chainName !== 'osmosis') {
        throw new Error(`Unsupported chain: ${chainName}`);
      }

      let tokenSymbol: string;
      switch (chainName) {
        case 'akash':
          tokenSymbol = '$AKT';
          break;
        case 'osmosis':
          tokenSymbol = '$OSMO';
          break;
      }

      return tokenSymbol;
    };

    const updateToken = async () => {
      window.addEventListener("keplr_keystorechange", () => {
        const chainName = window.localStorage.getItem('selected-chain') as ChainName;
        fetchToken(chainName).then(newToken => {
          setToken(newToken);
          setChainName(chainName);
        });
      });
    
      const chainName = window.localStorage.getItem('selected-chain') as ChainName;
      const newToken = await fetchToken(chainName);
      setToken(newToken);
      setChainName(chainName);
    };

    updateToken();

    // Set up event listener for changes to selected chain in local storage
    window.addEventListener('storage', updateToken);

    // Set up event listener for window focus
    window.addEventListener('focus', updateToken);

    // Set up event listener for Keplr's keystore change event
    window.addEventListener('keplr_keystorechange', updateToken);

    return () => {
      window.removeEventListener('storage', updateToken);
      window.removeEventListener('focus', updateToken);
      window.removeEventListener('keplr_keystorechange', updateToken);
    };
  }, []);

  return token;
}
