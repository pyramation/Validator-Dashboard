import { ChainName } from '@cosmos-kit/core';
import { akash, osmosis } from '../../codegen';
import { useEffect, useState } from 'react';


export function useValoper(): string {
  const [valoperMoniker, setValoperMoniker] = useState<string>('');
  const [chainName, setChainName] = useState<ChainName | undefined>(
  );

  useEffect(() => {
    const fetchValoper = async (chainName: ChainName): Promise<string | undefined> => {
      if (chainName !== 'akash' && chainName !== 'osmosis') {
        throw new Error(`Unsupported chain: ${chainName}`);
      }

      let client;
      let validatorAddress: string;
      switch (chainName) {
        case 'akash':
          client = await akash.ClientFactory.createLCDClient({
            restEndpoint: 'https://akash.api.chandrastation.com'
          });
          validatorAddress = 'akashvaloper1qvsus5qg8yhre7k2c78xkkw4nvqqgev7zw5wzs';
          break;
        case 'osmosis':
          client = await osmosis.ClientFactory.createLCDClient({
            restEndpoint: 'https://osmosis.api.chandrastation.com'
          });
          validatorAddress = 'osmovaloper1hjct6q7npsspsg3dgvzk3sdf89spmlpf6t4agt';
          break;
      }

      const address = await client.cosmos.staking.v1beta1.validator({
        validatorAddr: validatorAddress
      });

      const moniker = address.validator?.description?.moniker;
      return moniker;
    };

    const updateValoperMoniker = async () => {
      window.addEventListener("keplr_keystorechange", () => {
        const chainName = window.localStorage.getItem('selected-chain') as ChainName;
        fetchValoper(chainName).then(newValoper => {
          setValoperMoniker(newValoper);
          setChainName(chainName);
        });
      });
    
      const chainName = window.localStorage.getItem('selected-chain') as ChainName;
      const newValoper = await fetchValoper(chainName);
      setValoperMoniker(newValoper);
      setChainName(chainName);
    };

    updateValoperMoniker();

    // Set up event listener for changes to selected chain in local storage
    window.addEventListener('storage', updateValoperMoniker);

    // Set up event listener for window focus
    window.addEventListener('focus', updateValoperMoniker);

    // Set up event listener for Keplr's keystore change event
    window.addEventListener('keplr_keystorechange', updateValoperMoniker);

    return () => {
      window.removeEventListener('storage', updateValoperMoniker);
      window.removeEventListener('focus', updateValoperMoniker);
      window.removeEventListener('keplr_keystorechange', updateValoperMoniker);
    };
  }
  , [chainName]);

  return valoperMoniker;
}


export function useDetails(): string {
    const [valoperDetails, setValoperDetails] = useState<string>('');
    const [chainName, setChainName] = useState<ChainName | undefined>(
    );
  
    useEffect(() => {
      const fetchDetails = async (chainName: ChainName): Promise<string | undefined> => {
        if (chainName !== 'akash' && chainName !== 'osmosis') {
          throw new Error(`Unsupported chain: ${chainName}`);
        }
  
        let client;
        let validatorAddress: string;
        switch (chainName) {
          case 'akash':
            client = await akash.ClientFactory.createLCDClient({
              restEndpoint: 'https://akash.api.chandrastation.com'
            });
            validatorAddress = 'akashvaloper14kn0kk33szpwus9nh8n87fjel8djx0y0uzn073';
            break;
          case 'osmosis':
            client = await osmosis.ClientFactory.createLCDClient({
              restEndpoint: 'https://osmosis.api.chandrastation.com'
            });
            validatorAddress = 'osmovaloper1hjct6q7npsspsg3dgvzk3sdf89spmlpf6t4agt';
            break;
        }
  
        const description = await client.cosmos.staking.v1beta1.validator({
          validatorAddr: validatorAddress
        });
  
        const details = description.validator?.description?.details;
        return details;
      };
  
      const updateDetails = async () => {
        window.addEventListener("keplr_keystorechange", () => {
          const chainName = window.localStorage.getItem('selected-chain') as ChainName;
          fetchDetails(chainName).then(newDetails => {
            setValoperDetails(newDetails);
            setChainName(chainName);
          });
        });
      
        const chainName = window.localStorage.getItem('selected-chain') as ChainName;
        const newDetails = await fetchDetails(chainName);
        setValoperDetails(newDetails);
        setChainName(chainName);
      };
  
      updateDetails();
  
      // Set up event listener for changes to selected chain in local storage
      window.addEventListener('storage', updateDetails);
  
      // Set up event listener for window focus
      window.addEventListener('focus', updateDetails);
  
      // Set up event listener for Keplr's keystore change event
      window.addEventListener('keplr_keystorechange', updateDetails);
  
      return () => {
        window.removeEventListener('storage', updateDetails);
        window.removeEventListener('focus', updateDetails);
        window.removeEventListener('keplr_keystorechange', updateDetails);
      };
    }, [chainName]);
    return valoperDetails;
  }