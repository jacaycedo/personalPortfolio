import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Letra from "./letraNombre";
import BlogCard from "../cardTech/blogCard";
import {FormattedMessage} from 'react-intl'
function HomePage2() {
  return (
    <Container fluid className="homeAbout" id="about">
      <Container>
        <Row>
          <div className="AboutSection">
            <h2>
            <FormattedMessage id="aLittleMore"/>  <span className="purple">{Letra(<FormattedMessage id="me"/>)}</span>
            </h2>
          </div>
        </Row>
        <Row>
          <Col md={5} className="aboutContent">
            <p className="bodyAbout">
              <FormattedMessage id="hiPresentation"/> 
              <span className="purple"> Juan Andres</span>. 
              <FormattedMessage id="hiPresentationP2"/>
            </p>
            <p className="bodyAbout">
              <FormattedMessage id="aboutPresentation"/>
            </p>
            <p className="bodyAbout">
              <FormattedMessage id="descriptionPresentation"/>
            </p>
            <p className="bodyAbout">
              <FormattedMessage id="technicalPresentationP1"/>
              <span className ='purple'>Java, Javascript <FormattedMessage id="technicalAnd"/> Python</span>. 
              <FormattedMessage id="technicalPresentationP2"/>
              <span className ='purple'><FormattedMessage id="technicalLearn"/></span> 
              <FormattedMessage id="technicalPresentationP3"/>
            </p>
            <p className="bodyAbout">
              <FormattedMessage id="personalPresentation"/>
            </p>
          </Col>
          <Col md={7} className="techDisplay">
            <p className="bodyAbout">
              <FormattedMessage id="someTechPresentation"/>
            </p>
            <Row className="techRow">
              <Col md={6} className="techHolder col-4">
                <BlogCard  front ={"fab fa-js"}back={"JavaScript"}/>
              </Col>
              <Col md={6} className="techHolder col-4">
                <BlogCard front ={"fab fa-java"}back={"Java"} />
              </Col>
              <Col md={6} className="techHolder col-4">
                <BlogCard front ={"fab fa-python"}back={"Python"} />
              </Col>         
              <Col md={6} className="techHolder col-4">
                <BlogCard front ={"fab fa-node"}back={"Node.js"} />
              </Col>   
              <Col md={6} className="techHolder col-4">
                <BlogCard front ={"fab fa-react"}back={"React"} />
              </Col>  
              <Col md={6} className="techHolder col-4">
                <BlogCard front ={"fab fa-angular"}back={"Angular"}/>
              </Col>    
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default HomePage2;
