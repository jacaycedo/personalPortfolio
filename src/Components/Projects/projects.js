import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import Letra from "../homePage/letraNombre";

function Projects() {
  return (
    <Container fluid className="homeProjects" id="projects">
      <Container>
        <h2>
          <FormattedMessage id="projects" />
          <span className="purple">{Letra(<FormattedMessage id="built" />)}</span>
        </h2>

        <Row>
          <Col md={12} className="projectsContent">
            <p className="bodyProjects">
              <FormattedMessage id="projectsInWork" />
            </p>
            <i className="fas fa-briefcase fa-4x"></i>
          </Col>
        </Row>
      </Container>  
    </Container>
  );
}
export default Projects;
