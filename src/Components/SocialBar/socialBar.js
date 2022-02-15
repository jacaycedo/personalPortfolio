import React from "react";
import "./socialBar.css";

function Social() {
  return (
    <div className="social">
      <ul className="list-group">
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
  );
}

export default Social;
