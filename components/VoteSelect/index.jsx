import React from "react";
import "./VoteSelect.css";

function VoteSelect(props) {
  const { children } = props;

  return (
    <article className="commission">
      <div className="frame-41">
        <div className="commission-1 firacode-normal-white-16px">{children}</div>
      </div>
    </article>
  );
}

export default VoteSelect;
