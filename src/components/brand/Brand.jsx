import React from "react";
import "./brand.css";
import { shopify, slack, google, dropbox, atlassian } from "./imports";



const Brand = () => {
  return (

      <div className="gpt3__brand section__padding">
        <div className="gpt3__brand-images">
          <img src={shopify} alt="shopify" />
          <img src={dropbox} alt="dropbox" />
          <img src={slack} alt="slack" />
          <img src={google} alt="google" />
          <img src={atlassian} alt="atlassian" />
        </div>
      </div>

  );
};
export default Brand;
