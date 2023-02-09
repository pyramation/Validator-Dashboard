import React from "react";
import VoteSelect from "../VoteSelect";
import "./GovernanceTypeSelector.css";

function GovernanceTypeSelector(props) {
  const { className, voteSelect1Props, voteSelect2Props, voteSelect3Props } = props;

  return (
    <div className={`distribution-selector ${className || ""}`}>
      <VoteSelect>{voteSelect1Props.children}</VoteSelect>
      <VoteSelect>{voteSelect2Props.children}</VoteSelect>
      <VoteSelect>{voteSelect3Props.children}</VoteSelect>
    </div>
  );
}

export default GovernanceTypeSelector;
