import React from "react";
import VoteSelect from "../VoteSelect";
import "./ValoperAddress.css";

function ValoperAddress(props) {
  const { className, voteSelectProps } = props;

  return (
    <div className={`valoper-address ${className || ""}`}>
      <VoteSelect>{voteSelectProps.children}</VoteSelect>
    </div>
  );
}

export default ValoperAddress;
