import { getValconsKey } from './get-valcons-query';
import { akash } from '../../codegen';

export async function fetchMissedBlocksCounter(): Promise<Long> {
  const client = await akash.ClientFactory.createLCDClient({
    restEndpoint: 'https://akash.api.chandrastation.com'
  });

  const consAddress = await getValconsKey()
  const data = await client.cosmos.slashing.v1beta1.signingInfo({
      consAddress: consAddress
  })

  const missedBlocksCounter = data.val_signing_info?.missed_blocks_counter;
  if (!missedBlocksCounter) {
    throw new Error('Missed blocks counter not found');
  }
  return missedBlocksCounter;
}

