import React from "react";
import SocialLine from "../SocialLine";
import Header3 from "../Header3";
import "./Index.css";

function Index(props) {
  const { spanText1, spanText2, spanText3, socialLineProps, headerProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="index screen">
        <SocialLine
          line10Stroke={socialLineProps.line10Stroke}
          twitter={socialLineProps.twitter}
          discord={socialLineProps.discord}
          github={socialLineProps.github}
        />
        <Header3
          siteLogo={headerProps.siteLogo}
          title={headerProps.title}
          governanceSelectorProps={headerProps.governanceSelectorProps}
        />
        <p className="claim-your-commissio firacode-bold-white-28px">
          <span className="firacode-bold-white-28px">{spanText1}</span>
          <span className="span-13">{spanText2}</span>
          <span className="firacode-bold-white-28px">{spanText3}</span>
        </p>
      </div>
    </div>
  );
}

export default Index;
