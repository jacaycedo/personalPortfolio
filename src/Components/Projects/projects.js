import React from "react";
import { Container } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import Letra from "../homePage/letraNombre";

function Projects() {
  return (
    <Container fluid className="homeProjects" id="projects">
      <Container>
        <h2>
          <FormattedMessage id="projects"/>
          <span className="purple">{Letra(<FormattedMessage id="built"/>)}</span>
        </h2>
      </Container>
    </Container>
  );
}
export default Projects;
