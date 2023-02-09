import React, { useEffect } from "react";
import $ from "jquery";
import "./ConnectButton.css";

function ConnectButton() {
  useEffect(() => {
    $('.keplr-connect').click(async function(event) {
      window.onclick = async () => {
        if (!window.keplr) {
          alert("Please install keplr extension");
        } else {
          const chainId = "osmosis-1";

          // Enabling before using the Keplr is recommended.
          // This method will ask the user whether to allow access if they haven't visited this website.
          // Also, it will request that the user unlock the wallet if the wallet is locked.
          await window.keplr.enable(chainId);

          const offlineSigner = window.keplr.getOfflineSigner(chainId);

          // You can get the address/public keys by `getAccounts` method.
          // It can return the array of address/public key.
          // But, currently, Keplr extension manages only one address/public key pair.
          // XXX: This line is needed to set the sender address for SigningCosmosClient.
          const accounts = await offlineSigner.getAccounts();

          // Initialize the gaia api with the offline signer that is injected by Keplr extension.
          const cosmJS = new SigningCosmosClient(
            "https://osmosis.api.chandrastation.com",
            accounts[0].address,
            offlineSigner,
          );
        }
      };
    });
  }, []);

  return (
    <div className="connect-button">
      <a href="" class="keplr-connect" role="button">
        <div className="connect firacode-medium-white-16px">Connect</div>
      </a>
    </div>
  );
}

export default ConnectButton;