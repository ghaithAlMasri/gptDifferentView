import React from "react";
import "./cta.css";
const Cta = () => {
  return (
    <div className="gpt3__cta" id="cta">
      <div className="gpt3__cta-container">
        <div className="gpt3__cta-container__text">
          <p>Request Early Access to Get Started</p>
          <p className="gpt3__cta-container__text-second_paragraph">Register today & start exploring the endless possiblities.</p>
        </div>
        <div className="gpt3__cta-container__button">
          <button type="button">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Cta;
