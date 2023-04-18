import React from "react";
import "./features.css";
import Feature from "../../components/feature/Feature";

import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

const featureText = [
  {
    text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
    title: "Improving end distrusts instantly",
  },
  {
    text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
    title: "Become the tended active",
  },
  {
    text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
    title: "Message or am nothing",
  },
  {
    text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
    title: "Really boy law county",
  },
];

const Features = () => {
  return (
    <div className="gpt3__features section__padding gradient__bg" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <ScrollAnimation animateIn="animate__fadeIn" key={3}>
        <div className="gpt3__features-container">
          {featureText.map((item) => (
            <Feature text={item.text} title={item.title} />
          ))}
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default Features;
