import React from "react";
import HomeButton from "../HomeButton";
import DistributionSelecor from "../DistributionSelecor";
import GovernanceSelector from "../GovernanceSelector";
import ServicesSelector from "../ServicesSelector";
import ConnectButton from "../ConnectButton";
import "./Header3.css";

function Header3(props) {
  const { siteLogo, title, governanceSelectorProps } = props;

  return (
    <header className="header-2">
      <div className="title-4">
        <img className="site-logo-2" src={siteLogo} alt="Site logo" />
        <div className="site-title-2">
          <h1 className="title-5 firacode-medium-white-32px">{title}</h1>
        </div>
      </div>
      <div className="header-page-select-2">
        <HomeButton />
        <DistributionSelecor />
        <GovernanceSelector className={governanceSelectorProps.className} />
        <ServicesSelector />
        <ConnectButton />
      </div>
    </header>
  );
}

export default Header3;
