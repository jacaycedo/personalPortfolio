import React from "react";
import HomePage2 from "./homepage2";
import { Container, Row, Col } from "react-bootstrap";
import Letra from "./letraNombre";
import Typewriter from "typewriter-effect";
import Particle from "../particles";
import Scroll from "../ScrollSign/Scroll";
import Contact from "../Contact/contact";
import { FormattedMessage } from "react-intl";
import Projects from "../Projects/projects";

function HomePage({lang}) {
  return (
    <section>
      <Container fluid className="main">
        <Particle />
        <Container className="intro-main">
          <Row>
            <Col md={7} className="main-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                <FormattedMessage id="mainHi"></FormattedMessage>
              </h1>
              <h1 className="heading-name name">
                <div
                  className="name-zone"
                  aria-label="Juan Andres Caycedo Serrano"
                  style={{ fontSize: "40" }}
                >
                  <FormattedMessage id="mainIm"></FormattedMessage>
                  <strong className="main-name">
                    {" "}
                    {Letra("J")}
                    {"UAN ANDRES".split("").map(function (letra, i) {
                      return Letra(letra, i);
                    })}
                  </strong>
                </div>
              </h1>
              <div
                style={{
                  padding: 15,
                  textAlign: "left",
                  fontFamily: "Inconsolata",
                }}
              >
                <h3> {'<div class = "'}<FormattedMessage id="mainDescription" ></FormattedMessage>{'" > '} </h3>
                <h2
                  style={{
                    paddingLeft: 40,
                    textAlign: "left",
                    color: "#BE6ADF",
                  }}
                >
                  <Typewriter
                    options={{
                      fontFamily: "consolas",
                      strings: lang === "en-us"? [
                        "full stack developer",
                        "student",
                        "gamer",
                        "technology enthusiast",
                        "developer",
                      ]: [
                        "desarrollador full stack",
                        "estudiante",
                        "gamer",
                        "entusiasta de la tecnologia",
                        "desarrollador"
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h2>
                <h3> {"</div>"} </h3>
              </div>
            </Col>
            <Col md={5} className="main-header"></Col>
          </Row>
          <Scroll></Scroll>
        </Container>
      </Container>
      <HomePage2 />
      <Projects />
      <Contact />
    </section>
  );
}

export default HomePage;
