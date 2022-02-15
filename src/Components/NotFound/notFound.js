import React from "react";
import Particle from "../particles";
import { FormattedMessage } from "react-intl";

export function genericNotFound() {
  return (
    <div className="container fluid error">
      <Particle />
      <h1 className="purple">404</h1>
      <h2> <FormattedMessage id="errorMsg"/></h2>
      <a href="/" className="bodyAbout">
        <FormattedMessage id="errorBtn"/>
      </a>
    </div>
  );
}

export default genericNotFound;
