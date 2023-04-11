import { ChainName } from '@cosmos-kit/core';
import { useState, useEffect } from 'react';
import { getValconsAddress } from './get-valcons-query';
import { chains } from 'chain-registry';
import axios from 'axios';

export function useMissedBlocksCounter(chainName: ChainName | undefined, valoperAddress: string): number | undefined {
  const [missedBlocks, setMissedBlocks] = useState<number | undefined>(undefined);

  useEffect(() => {
    async function fetchMissedBlocks() {
      const chainInfo = chains.find(({ chain_name }) => chain_name === chainName);

      if (!chainInfo?.apis?.rest) {
        console.error('REST endpoint not found for the given chainName');
        return;
      }

      const polkachuEndpoint = chainInfo.apis.rest.find(({ provider }) => provider === 'Polkachu');
      const restEndpoint = polkachuEndpoint ? polkachuEndpoint.address : chainInfo.apis.rest[0].address;

      try {
        const valconsAddress = await getValconsAddress(chainName, valoperAddress);

        const url = `${restEndpoint}/cosmos/slashing/v1beta1/signing_infos/${valconsAddress}`;

        const response = await axios.get(url);
        const data = response.data;

        // Get missed blocks counter
        const missedBlocksCounter = data?.val_signing_info?.missed_blocks_counter;
        setMissedBlocks(missedBlocksCounter);
      } catch (error) {
        console.error('Error fetching missed blocks:', error);
      }
    }

    if (chainName && valoperAddress) {
      fetchMissedBlocks();
    }
  }, [chainName, valoperAddress]);

  return missedBlocks;
}
