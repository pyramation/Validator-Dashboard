import React, { useState } from "react";
import "./ChainSelector.css";
import keplr from '@keplr-wallet/types'

function ChainSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedChain, setSelectedChain] = useState("Chain Select");

  const handleSelectChain = (chain) => {
    setSelectedChain(chain);
    setIsOpen(false);
    keplr.switchToChain(chain);
  };
  

  return (
    <div className="chain-selector">
      <div className="frame-45">
        <div className="frame-43" onClick={() => setIsOpen(!isOpen)}>
          <div className="chain-select firacode-medium-white-15px">{selectedChain}</div>
        </div>
      </div>
      {isOpen && (
        <div className="options-container">
          <div
            className="option firacode-medium-white-15px"
            onClick={() => handleSelectChain("Osmosis")}
          >
            Osmosis
          </div>
          <div
            className="option firacode-medium-white-15px"
            onClick={() => handleSelectChain("Akash")}
          >
            Akash
          </div>
          <div
            className="option firacode-medium-white-15px"
            onClick={() => handleSelectChain("Canto")}
          >
            Canto
          </div>
        </div>
      )}
    </div>
  );
}

export default ChainSelector;