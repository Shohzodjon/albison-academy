import React from "react";
import play from "../../AI/icons/play_button.png";
import homeImg from "../../AI/images/showcase.svg";
import brend1 from "../../AI/images/Partner1.png";
import brend2 from "../../AI/images/Partner2.png";
import brend3 from "../../AI/images/Partner3.png";
import brend4 from "../../AI/images/Partner4.png";

import "./home.css";

const Home = () => {
  return (
    <section className="home--section" id="home">
      <div className="containers">
        <div className="home--flex">
          <div className="home--info">
            <h3>Next genaretion platform</h3>
            <h1>Artificial intelligence & Syber security</h1>
            <p className="general--parag">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </p>
            <div className="home--btn--group">
              <button className="home--btn1 btn">Get started</button>
              <button className="home--btn2 btn">
                <img src={play} alt="play" /> <span>Watch Video</span>
              </button>
            </div>
          </div>

          <div className="home--img">
            <img src={homeImg} alt="home--img" />
          </div>
        </div>
        <div className="home--brends">
          <ul>
            <li>
              <img src={brend1} alt="home--brend" />
            </li>
            <li>
              <img src={brend2} alt="home--brend" />
            </li>
            <li>
              <img src={brend3} alt="home--brend" />
            </li>
            <li>
              <img src={brend4} alt="home--brend" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Home;
