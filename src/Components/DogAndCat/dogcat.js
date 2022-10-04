import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import Letra from "../homePage/letraNombre";
import Cat from "./Cat/cat";
import Dog from "./Dog/dog";

function DogCat() {
  const [showCat, setShowCat] = useState(false);
  const [showDog, setShowDog] = useState(false);

  function handleCat() {
    setShowCat(!showCat);
    setShowDog(false);
  }
  function handleDog() {
    setShowDog(!showDog);
    setShowCat(false);
  }
  return (
    <Container className="dogCat">
      <h2>
        <FormattedMessage id="oneLast" />{" "}
        <span className="purple">
          {Letra(<FormattedMessage id="thing" />)}{" "}
        </span>
      </h2>
      <Button
        className="dogCatButton"
        id={showCat ? "dogCatSelected" : ""}
        onClick={() => {
          handleCat();
        }}
      >
        🐈
      </Button>
      <Button
        className="dogCatButton"
        id={showDog ? "dogCatSelected" : ""}
        onClick={() => {
          handleDog();
        }}
      >
        🐕
      </Button>
      {showDog || showCat ? (
        <Container className="catDogAnimationContainer">
          {showDog ? <Dog /> : showCat? <Cat/> : <></>}
        </Container>
      ) : (
        <></>
      )}
    </Container>
  );
}

export default DogCat;
