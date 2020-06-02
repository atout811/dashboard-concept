import React from "react";
import "./HomePage-Style.css";
import DashLogo from "./dash.svg";

export default function HomePage() {
  return (
    <div className="home">
      <div className="content">
        <img className="logo" src={require("./logo.png")} />
        <h1>
          ACES <br /> DASHBOARD
        </h1>
        {/* <img className="svg" src={DashLogo} /> */}
      </div>

      <div className="text">All Copyright reserved © IT 19</div>
    </div>
  );
}
