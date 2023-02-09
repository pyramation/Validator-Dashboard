import React from "react";
import "./GovernanceSelector.css";

function GovernanceSelector(props) {
  const { className } = props;

  return (
    <div className={`governance-selector ${className || ""}`}>
      <div className="governance firacode-medium-white-16px-2">
        <span className="span-6 firacode-medium-cyan--aqua-16px">#</span>
        <a href="../Governance/Governance" class="button">
        <span className="span-6 firacode-medium-white-16px">Governance</span>
        </a>
      </div>
    </div>
  );
}

export default GovernanceSelector;
