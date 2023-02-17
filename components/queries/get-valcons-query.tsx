import * as bech32 from 'bech32';
import { akash } from '../../codegen';

export async function getValconsKey(): Promise<string> {
  const client = await akash.ClientFactory.createLCDClient({
    restEndpoint: 'https://akash.api.chandrastation.com'
  });
  const operatorAddress = 'akashvaloper1qvsus5qg8yhre7k2c78xkkw4nvqqgev7zw5wzs'
  const response = await client.cosmos.staking.v1beta1.validator({
    validatorAddr: operatorAddress
  });
  const consensusPubkeyAny = response.validator?.consensus_pubkey;
  const typeUrl = consensusPubkeyAny?.value;
  if (!typeUrl || !typeUrl.endsWith('/secp256k1/pub')) {
    throw new Error('Invalid consensus pubkey type');
  }
  const consensusPubkeyBytes = new Uint8Array(consensusPubkeyAny!.value);
  const valconsPrefix: string = 'akashvalcons';
  const valconsWords: number[] = bech32.toWords(consensusPubkeyBytes);
  const valconsAddress: string = bech32.encode(valconsPrefix, valconsWords);
  return valconsAddress;
}
