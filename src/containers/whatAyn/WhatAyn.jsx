import React from "react";
import Feature from "../../components/feature/Feature";
import "./whatAyn.css";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

const featureText = [
  {
    text: "We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.",
    title: "Chatbots",
  },
  {
    text: "We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.",
    title: "Knowledgebase",
  },
  {
    text: "We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.",
    title: "Education",
  },
];

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature
        title="What is GPT-3"
        text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
      />
    </div>

    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">
        The possibilities are beyond your imagination
      </h1>
      <p>Explore the Library</p>
    </div>
    <ScrollAnimation animateIn="animate__backInLeft">
      <div className="gpt3__whatgpt3-container">
        {featureText.map((item) => (
          <Feature text={item.text} title={item.title} />
        ))}
      </div>
    </ScrollAnimation>
  </div>
);

export default WhatGPT3;
