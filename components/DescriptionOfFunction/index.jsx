import React from "react";
import "./DescriptionOfFunction.css";

function DescriptionOfFunction(props) {
  const { ditchTheCliAndClaimYourCommish, pressTheButton } = props;

  return (
    <div className="description-of-function">
      <p className="ditch-the-cli-and-claim-your-commish firacode-light-white-28px">{ditchTheCliAndClaimYourCommish}</p>
      <div className="press-the-button firacode-light-white-14px">{pressTheButton}</div>
    </div>
  );
}

export default DescriptionOfFunction;
