import React from "react";
import "./load.css";

function Loader(props) {
  return (
    <div id={props.load ? "load" : "noLoad"}>
      <div className="loader">
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__ball"></div>
      </div>
    </div>
  );
}

export default Loader;
