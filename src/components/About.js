import React from "react";
import { image } from "../data/data";

function About() {
  return (
  <div id="about">
    <h2>About Me</h2>
    <p>I have a deep passion for creating wonderful experiences for users of the web.
      I spend a better part of my day crafting user-friendly and visually appealing websites.
    </p>
    <img src={image} alt="I made this" />
    </div>);
}

export default About;
