import { useState, useEffect } from 'react';
import { ChangeChainDropdown } from './chain-dropdown';
import {
  ChooseChainInfo,
  ChainOption,
  handleSelectChainDropdown
} from '../types';

export function ChooseChain({
  chainName,
  chainInfos,
  onChange
}: {
  chainName?: string;
  chainInfos: ChooseChainInfo[];
  onChange: handleSelectChainDropdown;
}) {
  const [selectedItem, setSelectedItem] = useState<ChainOption | undefined>();
  useEffect(() => {
    if (chainName && chainInfos.length > 0)
      setSelectedItem(
        chainInfos.filter((options) => options.chainName === chainName)[0]
      );
    if (!chainName) setSelectedItem(undefined);
  }, [chainInfos, chainName]);

  const handleClearSelection = () => {
    setSelectedItem(undefined);
    onChange(null);
    window.localStorage.setItem('selected-chain', 'cosmoshub-4');
  }

  return (
    <ChangeChainDropdown
      key={chainName}
      data={chainInfos}
      selectedItem={selectedItem}
      onChange={onChange}
    />
  );
}
