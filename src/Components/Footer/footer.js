import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  const [showCat, setShowCat] = useState(false);
  const [showDog, setShowDog] = useState(false);
  return (
    <Container className="footer">
      <Row className="rowFooter">
        <Col md={3}></Col>
        <Col md={6}>
          <div className="socialFooter">
            <ul className="list-group list-group-horizontal">
              <li>
                <a
                  href="https://github.com/jacaycedo"
                  aria-label="Github"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <title>Github</title>
                  <i className="fab fa-github fa-lg"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/juanandres0612"
                  aria-label="Github"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <title>Instagram</title>
                  <i className="fab fa-instagram fa-lg"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/juan-andrés-caycedo-serrano-59253a203"
                  aria-label="Github"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <title>linkedin</title>
                  <i className="fab fa-linkedin-in fa-lg"></i>
                </a>
              </li>
              <li>
                <a
                  href="mailto:juanandrescaycedo@hotmail.com"
                  aria-label="Email"
                  rel="noreferrer noopener"
                >
                  <title>Email</title>
                  <i className="far fa-envelope fa-lg"></i>
                </a>
              </li>
            </ul>
          </div>
          <p className="signature">
            Developed and Designed by Juan Andrés Caycedo S.
          </p>
        </Col>
        <Col md={3}></Col>
      </Row>
    </Container>
  );
}

export default Footer;
