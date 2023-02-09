import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route, useHref } from "react-router-dom";
import Distribution from "./components/Distribution";
import Index from "./components/Index";
import Governance from "./components/Governance";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/distribution">
          <Distribution
            outputDivBox="/img/output-div-box.png"
            socialLineProps={distributionData.socialLineProps}
            h2Props={distributionData.h2Props}
            governanceTypeSelectorProps={distributionData.governanceTypeSelectorProps}
            descriptionOfFunctionProps={distributionData.descriptionOfFunctionProps}
            valoperAddress1Props={distributionData.valoperAddress1Props}
            valoperAddress2Props={distributionData.valoperAddress2Props}
          />
        </Route>
        <Route path="/:path(|index)">
          <Index
            spanText1={
              <React.Fragment>
                Claim your commission <br />
                Participate in governance
                <br />
                Utilize our services
                <br />
              </React.Fragment>
            }
            spanText2={
              <React.Fragment>
                <br />
              </React.Fragment>
            }
            spanText3="Select an item above to get started"
            socialLineProps={indexData.socialLineProps}
            headerProps={indexData.headerProps}
          />
        </Route>
        <Route path="/governance">
          <Governance
            uploadProposal="Upload Proposal"
            frame44="/img/frame-44-1@2x.png"
            outputDivBox="/img/output-div-box.png"
            socialLineProps={governanceData.socialLineProps}
            h2Props={governanceData.h2Props}
            governanceTypeSelectorProps={governanceData.governanceTypeSelectorProps}
            descriptionOfFunctionProps={governanceData.descriptionOfFunctionProps}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const socialLine1Data = {
    line10Stroke: "/img/line-10--stroke-@2x.png",
    twitter: "/img/twitter@2x.png",
    discord: "/img/discord@2x.png",
    github: "/img/github@2x.png",
};

const h21Data = {
    distribution: "Distribution",
    line7Stroke: "/img/line-7--stroke-@2x.png",
};

const voteSelect1Data = {
    children: "Commission",
};

const voteSelect2Data = {
    children: "Rewards",
    useHref: "#",
};

const voteSelect3Data = {
    children: "Redelegate",
};

const governanceTypeSelector1Data = {
    voteSelect1Props: voteSelect1Data,
    voteSelect2Props: voteSelect2Data,
    voteSelect3Props: voteSelect3Data,
};

const descriptionOfFunction1Data = {
    ditchTheCliAndClaimYourCommish: "Ditch the CLI and claim your commish.",
    pressTheButton: "Press the button.",
};

const voteSelect4Data = {
    children: "Validator Address",
};

const valoperAddress1Data = {
    voteSelectProps: voteSelect4Data,
};

const voteSelect5Data = {
    children: "Your token amount",
};

const valoperAddress2Data = {
    className: "tokens",
    voteSelectProps: voteSelect5Data,
};

const distributionData = {
    outputDivBox: "/img/output-div-box.png",
    socialLineProps: socialLine1Data,
    h2Props: h21Data,
    governanceTypeSelectorProps: governanceTypeSelector1Data,
    descriptionOfFunctionProps: descriptionOfFunction1Data,
    valoperAddress1Props: valoperAddress1Data,
    valoperAddress2Props: valoperAddress2Data,
};

const socialLine2Data = {
    line10Stroke: "/img/line-10--stroke-@2x.png",
    twitter: "/img/twitter@2x.png",
    discord: "/img/discord@2x.png",
    github: "/img/github@2x.png",
};

const governanceSelector2Data = {
    className: "governance-selector-1",
};

const header3Data = {
    siteLogo: "/img/site-logo@2x.png",
    title: "Validator Dashboard",
    governanceSelectorProps: governanceSelector2Data,
};

const indexData = {
    socialLineProps: socialLine2Data,
    headerProps: header3Data,
};

const socialLine3Data = {
    line10Stroke: "/img/line-10--stroke-@2x.png",
    twitter: "/img/twitter@2x.png",
    discord: "/img/discord@2x.png",
    github: "/img/github@2x.png",
};

const h22Data = {
    distribution: "Governance",
    line7Stroke: "/img/line-7--stroke--1@2x.png",
    className: "h2-1",
};

const voteSelect6Data = {
    children: "Submit",
};

const voteSelect7Data = {
    children: "Deposit",
};

const voteSelect8Data = {
    children: "Vote",
};

const governanceTypeSelector2Data = {
    className: "governance-type-selector",
    voteSelect1Props: voteSelect6Data,
    voteSelect2Props: voteSelect7Data,
    voteSelect3Props: voteSelect8Data,
};

const descriptionOfFunction2Data = {
    ditchTheCliAndClaimYourCommish: "Submit any proposal for on-chain governance.",
    pressTheButton: "Simply upload your proposal.json file and submit it on chain.",
};

const governanceData = {
    uploadProposal: "Upload Proposal",
    frame44: "/img/frame-44-1@2x.png",
    outputDivBox: "/img/output-div-box.png",
    socialLineProps: socialLine3Data,
    h2Props: h22Data,
    governanceTypeSelectorProps: governanceTypeSelector2Data,
    descriptionOfFunctionProps: descriptionOfFunction2Data,
};

