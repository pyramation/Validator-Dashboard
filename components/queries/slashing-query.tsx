import { getValconsAddress } from './get-valcons-query';
import { akash, osmosis } from '../../codegen';
import { ChainName } from '@cosmos-kit/core';
import { useState, useEffect } from 'react';

const selectedChainKey = 'selected-chain';

export function useMissedBlocksCounter(): number {
  const [missedBlocksCounter, setMissedBlocksCounter] = useState<number>(0);
  const [chainName, setChainName] = useState<ChainName | undefined>();

  useEffect(() => {
    async function fetchMissedBlocksCounter(chainName: ChainName): Promise<number> {
      if (chainName !== 'akash' && chainName !== 'osmosis') {
        throw new Error(`Unsupported chain: ${chainName}`);
      }

      let client;
      switch (chainName) {
        case 'akash':
          client = await akash.ClientFactory.createLCDClient({
            restEndpoint: 'https://akash.api.chandrastation.com'
          });
          break;
        case 'osmosis':
          client = await osmosis.ClientFactory.createLCDClient({
            restEndpoint: 'https://osmosis.api.chandrastation.com'
          });
          break;
      }

      const consAddress = await getValconsAddress()
      const data = await client.cosmos.slashing.v1beta1.signingInfo({
          consAddress: 'akashvalconspub1wh2mmlp5lyle64lv0twvctdhz6eftxyh5rxyv3'
      })

      const missedBlocksCounter = data.val_signing_info?.missed_blocks_counter;
      if (!missedBlocksCounter) {
        throw new Error('Missed blocks counter not found');
      }

      return missedBlocksCounter.toNumber();
    }

    const updateMissedBlocks = async () => {
      window.addEventListener("keplr_keystorechange", () => {
        const chainName = window.localStorage.getItem('selected-chain') as ChainName;
        fetchMissedBlocksCounter(chainName).then(newMissedBlocks => {
          setMissedBlocksCounter(newMissedBlocks);
          setChainName(chainName);
        });
      });
    
      const chainName = window.localStorage.getItem('selected-chain') as ChainName;
      const newMissedBlocks = await fetchMissedBlocksCounter(chainName);
      setMissedBlocksCounter(newMissedBlocks);
      setChainName(chainName);
    };

    updateMissedBlocks();

    // Set up event listener for changes to selected chain in local storage
    window.addEventListener('storage', updateMissedBlocks);

    // Set up event listener for window focus
    window.addEventListener('focus', updateMissedBlocks);

    // Set up event listener for Keplr's keystore change event
    window.addEventListener('keplr_keystorechange', updateMissedBlocks);

    return () => {
      window.removeEventListener('storage', updateMissedBlocks);
      window.removeEventListener('focus', updateMissedBlocks);
      window.removeEventListener('keplr_keystorechange', updateMissedBlocks);
    };
  }, []);

  return missedBlocksCounter;
}
