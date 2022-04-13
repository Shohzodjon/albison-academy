import React from "react";
import blogImg from "../../AI/images/solutions.svg";
import "./blog.css";

const BlogComponent = () => {
  return (
    <section className="blog--section" id="blog">
      <div className="containers">
        <div className="blog--flex">
          <div className="blog--info">
            <ul>
              <li>
                <h2 className="general--heading">
                  What our clients say about our awesome solutions
                </h2>
              </li>
              <li>
                <p className="general--parag">
                  To take a trivial example, which of us ever undertakes
                  laborious physical exercise, except to obtain some advantage
                  from it who do not know.
                </p>
              </li>
              <li>
                <p className="general--parag">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing .
                </p>
              </li>
              <li>
                <p className="general--parag">
                  Lorem ipsum is placeholder previewing layouts and visual
                  mockups.
                </p>
              </li>
              <li>
                <p className="general--parag">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups.
                </p>
              </li>
            </ul>
          </div>

          <div className="blog--img">
            <img src={blogImg} alt="blog img" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default BlogComponent;
