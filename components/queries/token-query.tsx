import { ChainName } from '@cosmos-kit/core';

const selectedChainKey = 'selected-chain';

export function useToken(): string {
const chainName = window.localStorage.getItem(selectedChainKey) as ChainName;

  let token: string;
  switch (chainName) {
    case 'akash':
      token = '$AKT';
      break;
    case 'osmosis':
      token = '$OSMO';
      break;
    default:
      throw new Error(`Unsupported chain: ${chainName}`);
  }

  return token;
}
