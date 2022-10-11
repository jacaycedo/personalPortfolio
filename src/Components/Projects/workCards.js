import React from "react";
import { useState } from "react";
import { FormattedMessage } from "react-intl";

export const WorkCard = ({ name, start, finish, jobTitle, bullets }) => {
  const [hover, setHover] = useState(false);
  const handleHover = () => {
    setHover(true);
  };
  const undoHover = () => {
    setHover(false);
  };
  return (
    <div
      className="WorkContainer"
      onMouseEnter={handleHover}
      onMouseLeave={undoHover}
    >
      <div className="workSection">
        <div className="workTitle">
          <FormattedMessage id={name} />
        </div>
        {hover ? (
          <span className="purple">
            <FormattedMessage id={jobTitle} />
          </span>
        ) : (
          <i className="fa fa-hand-pointer fa-md" />
        )}
        {hover ? (
          <>
            <p style={{ color: "#C4C4C4" }}>
              {" "}
              <FormattedMessage id={start} /> - <FormattedMessage id={finish} />{" "}
            </p>

            <ul
              className="workListBullets"
              style={{ textAlign: "justify", padding: "0 2vw" }}
            >
              {bullets.map((content, i) => {
                return (
                  <li key={i}>
                    <FormattedMessage id={content} />{" "}
                  </li>
                );
              })}
            </ul>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
