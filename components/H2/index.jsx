import React from "react";
import "./H2.css";

function H2(props) {
  const { distribution, line7Stroke, className } = props;

  return (
    <div className={`h2 ${className || ""}`}>
      <div className="frame-26">
        <div className="frame-26-item firacode-medium-cyan--aqua-32px">#</div>
        <div className="frame-26-item firacode-medium-alto-32px">{distribution}</div>
      </div>
      <img className="line-7-stroke" src={line7Stroke} alt="Line 7 (Stroke)" />
    </div>
  );
}

export default H2;
