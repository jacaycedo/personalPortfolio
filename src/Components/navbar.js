import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import { HashLink as Link } from "react-router-hash-link";
//import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { LOCALES } from "../i8n/locales";
import logo from "./Assets/logo.png";

function NavBar({ setLanguage }) {
  const [expandida, expandir] = useState(false);
  const [colorNav, updateNavbar] = useState(false);
  const [idioma, setIdioma] = useState("ENG");

  function scroll() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  function cambiarLang() {
    if (idioma === "ENG") {
      setLanguage(LOCALES.SPANISH);
      setIdioma("ESP");
    } else {
      setLanguage(LOCALES.ENGLISH);
      setIdioma("ENG");
    }
  }

  window.addEventListener("scroll", scroll);

  return (
    <Navbar
      expanded={expandida}
      fixed="top"
      expand="md"
      className={colorNav ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            className="img-fluid logo"
            alt="Logo Juan Andres"
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            expandir(expandida ? false : "expanded");
          }}
        >
          <span></span>
          <span className="two"></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/#" onClick={() => expandir(false)}>
                · <FormattedMessage id="navbarHome"></FormattedMessage> ·
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/#about"
                scroll={(el) =>
                  el.scrollIntoView({ behavior: "auto", block: "end" })
                }
                onClick={() => expandir(false)}
              >
                · <FormattedMessage id="navbarAbout"></FormattedMessage> ·
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/#projects"
                onClick={() => expandir(false)}
                scroll={(el) =>
                  el.scrollIntoView({ behavior: "auto", block: "center" })
                }
              >
                · <FormattedMessage id="navbarProjects"></FormattedMessage> ·
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/#contact"
                scroll={(el) =>
                  el.scrollIntoView({ behavior: "auto", block: "end" })
                }
                onClick={() => expandir(false)}
              >
                · <FormattedMessage id="navbarContact"></FormattedMessage> ·
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <button onClick={cambiarLang}>{idioma}</button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;
