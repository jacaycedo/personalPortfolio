import React from "react";
import { FormattedMessage } from "react-intl";

export const WorkSection = (props) => {
  return (
    <div className="jobInfoContainer">
      <h5>
        <FormattedMessage id={props.jobTitle} />
        <span className="purple">
          <FormattedMessage id={props.jobPlace} />
        </span>
      </h5>
      <p style={{color:"#C4C4C4"}}> <FormattedMessage id={props.start} /> -  <FormattedMessage id={props.finish}/> </p>
    </div>
  );
};
