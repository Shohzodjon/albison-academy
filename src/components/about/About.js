import React from "react";
import aboutImg from "../../AI/images/deep_learning.svg";
import "./about.css";

const About = () => {
  return (
    <section className="about--section" id="about">
      <div className="containers about--container">
        <div className="about--flex">
          <div className="about--img">
            <img src={aboutImg} alt="about img" />
          </div>

          <div className="about--info">
            <h2 className="general--heading">
              Apply AI, Deep Learning and Data Sciece to solve
            </h2>
            <p className="general--parag">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </p>
            <button className="btn about--btn">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
