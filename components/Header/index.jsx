import React from "react";
import HomeButton from "../HomeButton";
import DistributionSelecor from "../DistributionSelecor";
import GovernanceSelector from "../GovernanceSelector";
import ServicesSelector from "../ServicesSelector";
import ConnectButton from "../ConnectButton";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="title">
        <img className="site-logo" src="/img/site-logo@2x.png" alt="Site logo" />
        <div className="site-title">
          <h1 className="title-1 valign-text-middle firacode-medium-white-32px">Validator Dashboard</h1>
        </div>
      </div>
      <div className="header-page-select">
        <HomeButton />
        <DistributionSelecor />
        <GovernanceSelector />
        <ServicesSelector />
        <ConnectButton />
      </div>
    </header>
  );
}

export default Header;
