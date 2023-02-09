import React from "react";
import "./SocialLine.css";

function SocialLine(props) {
  const { line10Stroke, twitter, discord, github } = props;

  return (
    <div className="social-line">
      <div className="media">
        <img className="line-10-stroke" src={line10Stroke} alt="Line 10 (Stroke)" />
        <div className="frame-16">
          <img className="frame-16-item" src={twitter} alt="icon-twitter" />
          <img className="frame-16-item" src={discord} alt="Discord" />
          <img className="frame-16-item" src={github} alt="Github" />
        </div>
      </div>
    </div>
  );
}

export default SocialLine;
