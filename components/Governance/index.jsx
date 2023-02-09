import React from "react";
import SocialLine from "../SocialLine";
import Header from "../Header";
import H2 from "../H2";
import ChainSelector from "../ChainSelector";
import GovernanceTypeSelector from "../GovernanceTypeSelector";
import DescriptionOfFunction from "../DescriptionOfFunction";
import SignatureButton from "../SignatureButton";
import "./Governance.css";

function Governance(props) {
  const {
    uploadProposal,
    frame44,
    outputDivBox,
    socialLineProps,
    h2Props,
    governanceTypeSelectorProps,
    descriptionOfFunctionProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="governance-3 screen">
        <SocialLine
          line10Stroke={socialLineProps.line10Stroke}
          twitter={socialLineProps.twitter}
          discord={socialLineProps.discord}
          github={socialLineProps.github}
        />
        <Header />
        <div className="governance-function-container">
          <div className="frame-52">
            <div className="function-title-1">
              <H2 distribution={h2Props.distribution} line7Stroke={h2Props.line7Stroke} className={h2Props.className} />
            </div>
            <ChainSelector />
          </div>
          <div className="function-box-1">
            <GovernanceTypeSelector
              className={governanceTypeSelectorProps.className}
              voteSelect1Props={governanceTypeSelectorProps.voteSelect1Props}
              voteSelect2Props={governanceTypeSelectorProps.voteSelect2Props}
              voteSelect3Props={governanceTypeSelectorProps.voteSelect3Props}
            />
            <div className="rewards-select">
              <div className="rewards-grid">
                <div className="frame-47-1">
                  <DescriptionOfFunction
                    ditchTheCliAndClaimYourCommish={descriptionOfFunctionProps.ditchTheCliAndClaimYourCommish}
                    pressTheButton={descriptionOfFunctionProps.pressTheButton}
                  />
                  <div className="frame-46-1">
                    <div className="group-1-1">
                      <div className="overlap-group-1">
                        <div className="chain-selector-2">
                          <div className="frame-45-2">
                            <div className="frame-43-2">
                              <div className="upload-proposal firacode-medium-white-15px">{uploadProposal}</div>
                            </div>
                            <img className="frame-44-2" src={frame44} alt="Frame 44" />
                          </div>
                        </div>
                        <img className="output-div-box-1" src={outputDivBox} alt="Output Div Box" />
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

export default Governance;
