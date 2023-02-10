import React, { useState } from "react";
import "./SignatureButton.css";
import { keplr } from '@keplr-wallet/types';

async function MsgSend(fromAddress, toAddress, amount) {
  const client = new CosmosClient({
    url: "https://api.osmosis.chandrastation.com",
    chainId: "osmosis-1",
  });

  const wallet = await keplr.getWallet();
  const address = await wallet.getAddress();

  const msg = new MsgSend({
    fromAddress: fromAddress,
    toAddress: toAddress,
    amount: amount,
  });

  const result = await client.prepareSignAndBroadcast([msg], {
    txFee: { amount: [{ denom: "uosmo", amount: "100000" }] },
    memo: "",
  });

  if (result.errors) {
    console.error("Transaction failed:", result.errors);
    return;
  }

  console.log("Transaction success:", result.data[0].hash);
}

function SignatureButton() {
  const [status, setStatus] = useState("Sign");

  async function handleClick() {
    setStatus("Sending...");
    try {
      await MsgSend("osmo1dv3v662kd3pp6pxfagck4zyysas82adswgl2jf", "osmo1uwqjtgjhjctjc45ugy7ev5prprhehc7w3xx7ph", "100000");
      setStatus("Sent");
    } catch (error) {
      console.error(error);
      setStatus("Error");
    }
  }

  return (
    <div className="signature-button">
      <div className="frame-42" onClick={handleClick}>
        <div className="sign firacode-light-white-28px">{status}</div>
      </div>
    </div>
  );
}

export default SignatureButton;