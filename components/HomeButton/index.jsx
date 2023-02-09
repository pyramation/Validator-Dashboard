import React from "react";
import "./HomeButton.css";

function HomeButton() {
  return (
    <div className="home-button">
      <div className="home valign-text-bottom firacode-medium-white-16px-2">
        <span>
          <span className="firacode-medium-cyan--aqua-16px">#</span>
          <a href="../Index/Index" class="button">
          <span className="firacode-medium-white-16px">Home</span>
          </a>
        </span>
      </div>
    </div>
  );
}

export default HomeButton;
