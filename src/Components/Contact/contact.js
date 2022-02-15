import React from "react";
import { Container } from "react-bootstrap";
import {FormattedMessage} from "react-intl";

function contact() {
  return (
    <Container className="contactMain" id="contact">
      <h2 className="titleContact">
        <FormattedMessage id="getGetInTouch"/> <span className="purple"><FormattedMessage id="intouchInTouch"/></span>
      </h2>
      <p className="bodyContact">
        <FormattedMessage id="pt1InTouch"/>
      </p>
      <p className="bodyContact lastButton">        
        <FormattedMessage id="pt2InTouch"/>
      </p>
      <a
        href="mailto:juanandrescaycedo@hotmail.com"
        className="contactBut bodyAbout"
      >
        <FormattedMessage id="sayHelloInTouch"/>

      </a>
    </Container>
  );
}

export default contact;
