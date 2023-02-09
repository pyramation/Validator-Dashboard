import React from "react";
import SocialLine from "../SocialLine";
import Header from "../Header";
import H2 from "../H2";
import ChainSelector from "../ChainSelector";
import GovernanceTypeSelector from "../GovernanceTypeSelector";
import DescriptionOfFunction from "../DescriptionOfFunction";
import ValoperAddress from "../ValoperAddress";
import SignatureButton from "../SignatureButton";
import "./Distribution.css";

function Distribution(props) {
  const {
    outputDivBox,
    socialLineProps,
    h2Props,
    governanceTypeSelectorProps,
    descriptionOfFunctionProps,
    valoperAddress1Props,
    valoperAddress2Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="distribution screen">
        <SocialLine
          line10Stroke={socialLineProps.line10Stroke}
          twitter={socialLineProps.twitter}
          discord={socialLineProps.discord}
          github={socialLineProps.github}
        />
        <Header />
        <div className="distribution-function-container">
          <div className="title-box">
            <div className="function-title">
              <H2 distribution={h2Props.distribution} line7Stroke={h2Props.line7Stroke} />
            </div>
            <ChainSelector />
          </div>
          <div className="function-box">
            <GovernanceTypeSelector
              voteSelect1Props={governanceTypeSelectorProps.voteSelect1Props}
              voteSelect2Props={governanceTypeSelectorProps.voteSelect2Props}
              voteSelect3Props={governanceTypeSelectorProps.voteSelect3Props}
            />
            <div className="commission-div">
              <div className="commission-grid">
                <div className="frame-47">
                  <DescriptionOfFunction
                    ditchTheCliAndClaimYourCommish={descriptionOfFunctionProps.ditchTheCliAndClaimYourCommish}
                    pressTheButton={descriptionOfFunctionProps.pressTheButton}
                  />
                  <div className="frame-46">
                    <div className="group-1">
                      <div className="overlap-group">
                        <ValoperAddress voteSelectProps={valoperAddress1Props.voteSelectProps} />
                        <ValoperAddress
                          className={valoperAddress2Props.className}
                          voteSelectProps={valoperAddress2Props.voteSelectProps}
                        />
                        <img className="output-div-box" src={outputDivBox} alt="Output Div Box" />
                      </div>
                    </div>
                  </div>
                  <SignatureButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Distribution;
