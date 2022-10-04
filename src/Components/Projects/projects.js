import React from "react";
import { Container, Row, Col, Tab, Nav, Tabs } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import Letra from "../homePage/letraNombre";
import { WorkSection } from "./workSection";

function Projects() {
  return (
    <Container fluid className="homeProjects" id="projects">
      <Container>
        <h2>
          <FormattedMessage id="projects" />
          <span className="purple">
            {Letra(<FormattedMessage id="built" />)}
          </span>
        </h2>
        <Row>
          <Tab.Container defaultActiveKey="first">
            <Row className="projectsContent">
              <Col sm={12} md={4}>
                <Nav
                  variant="pills"
                  className="flex-xs-row flex-lg-column overflow-auto projectListRow"
                >
                  <Nav.Item className="navItemProjectsList">
                    <Nav.Link className="projectsList" eventKey="daddo">
                      Daddo Software
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="navItemProjectsList">
                    <Nav.Link className="projectsList" eventKey="wonder">
                      Wonder! XR
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="navItemProjectsList">
                    <Nav.Link className="projectsList" eventKey="heinsohn">
                      Heinsohn
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="navItemProjectsList">
                    <Nav.Link className="projectsList" eventKey="uniandes">
                      <FormattedMessage id="uniandes" />
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={12} md={8}>
                <Tab.Content>
                  <Tab.Pane eventKey="daddo">
                    <WorkSection
                      jobTitle={"founderDev"}
                      jobPlace={"daddo"}
                      start={"JulyDosDos"}
                      finish={"Present"}
                    />
                  </Tab.Pane>
                  <Tab.Pane eventKey="wonder">
                    <WorkSection
                      jobTitle={"fullstack"}
                      jobPlace={"wonder"}
                      start={"MayDosDos"}
                      finish={"JulyDosDos"}
                    />
                  </Tab.Pane>
                  <Tab.Pane eventKey="heinsohn">
                    <WorkSection
                      jobTitle={"intern"}
                      jobPlace={"heinsohn"}
                      start={"JulyDosUno"}
                      finish={"DecemberDosUno"}
                    />
                  </Tab.Pane>
                  <Tab.Pane eventKey="uniandes">
                    <WorkSection
                      jobTitle={"teachingAsistant"}
                      jobPlace={"uniandes"}
                      start={"2019"}
                      finish={"2022"}
                    />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Row>
      </Container>
    </Container>
  );
}
export default Projects;
