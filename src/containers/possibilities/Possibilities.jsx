import React from "react";
import "./possibilities.css";
import vr from "../../assets/possibility.png";
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

const Possibilities = () => {
  return (


      <div className="gpt3__possibilities section__margin" id="possibilities">
        <div className="gpt3__possibilities-image">
          <ScrollAnimation animateIn="animate__fadeInDown">
          <img src={vr} alt="vr" />
          </ScrollAnimation>
        </div>
        <div className="gpt3__possibilities-text">
        <ScrollAnimation animateIn="animate__fadeInUp">
          <p className="gpt3__possibilities-text_head-paragraph">
            Request Early Access to Get Started
          </p>
          <h1 className="gradient__text">
            The possibilities are beyond your imagination
          </h1>
          <p className="gpt3__possibilities-text_middle-paragraph">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <p className="gpt3__possibilities-text_bottom-paragraph">
            Request Early Access to Get Started
          </p>
          </ScrollAnimation>
        </div>
      </div>


  );
};
export default Possibilities;
