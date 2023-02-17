import * as bech32 from 'bech32';
import { akash } from '../../codegen';
import * as CryptoJS from 'crypto-js'

export async function getValconsAddress(): Promise<string> {
  const client = await akash.ClientFactory.createLCDClient({
    restEndpoint: 'https://akash.api.chandrastation.com'
  });
  const operatorAddress = 'akashvaloper1thl5syhmscgnj7whdyrydw3w6vy800444lk8r5'
  const response = await client.cosmos.staking.v1beta1.validator({
    validatorAddr: operatorAddress
  });
  const consensusPubkeyAny = response.validator?.consensus_pubkey;
  const consensusPubkeyBytes = new Uint8Array(consensusPubkeyAny!.value);
  const decoded = Buffer.from(consensusPubkeyBytes).toString('base64');

  const bytes = CryptoJS.enc.Base64.parse(decoded);
  const valconsPrefix: string = 'akashvalcons';
  const valconsWords: number[] = bech32.toWords(Array.from(new Uint8Array(bytes.words)));
  const valconsAddress: string = bech32.encode(valconsPrefix, valconsWords);

  return valconsAddress;
}
