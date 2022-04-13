import React from "react";
import img1 from "../../AI/images/Slide1.svg";
import img2 from "../../AI/images/Slide5.png";
import img3 from "../../AI/images/Slide2.png";
import img4 from "../../AI/images/Slide3.png";
import img5 from "../../AI/images/Slide4.png";
import "./service.css";

const Service = () => {
  return (
    <section className="section__corusel" id="services">
      <div className="container">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators btn">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active disable"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              className="disable"
            ></button>
            <button
              type="button"
              className="disable"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-4 service--cart">
                  <div className="section__corusel-img">
                    <div className="corousel--img">
                      <img src={img5} alt="..." />
                    </div>

                    <h4>Naxly as the Winners in Global Agency Awards</h4>
                    <p>
                      "Lorem ipsum is placeholder text commonly used in print,
                      and publishing industries for previewing layouts and
                      visual mockups.",
                    </p>
                  </div>
                </div>
                <div className="col-4 service--cart">
                  <div className="section__corusel-img">
                    <div className="corousel--img">
                      <img src={img1} alt="..." />
                    </div>

                    <h4>Naxly as the Winners in Global Agency Awards</h4>
                    <p>
                      "Lorem ipsum is placeholder text commonly used in print,
                      and publishing industries for previewing layouts and
                      visual mockups.",
                    </p>
                  </div>
                </div>
                <div className="col-4 service--cart">
                  <div className="section__corusel-img">
                    <div className="corousel--img">
                      <img src={img2} alt="..." />
                    </div>

                    <h4>Naxly as the Winners in Global Agency Awards</h4>
                    <p>
                      "Lorem ipsum is placeholder text commonly used in print,
                      and publishing industries for previewing layouts and
                      visual mockups.",
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-4 service--cart">
                  <div className="section__corusel-img">
                    <div className="corousel--img">
                      <img src={img3} alt="..." />
                    </div>

                    <h4>Naxly as the Winners in Global Agency Awards</h4>
                    <p>
                      "Lorem ipsum is placeholder text commonly used in print,
                      and publishing industries for previewing layouts and
                      visual mockups.",
                    </p>
                  </div>
                </div>
                <div className="col-4 service--cart">
                  <div className="section__corusel-img">
                    <div className="corousel--img">
                      <img src={img4} alt="..." />
                    </div>

                    <h4>Naxly as the Winners in Global Agency Awards</h4>
                    <p>
                      "Lorem ipsum is placeholder text commonly used in print,
                      and publishing industries for previewing layouts and
                      visual mockups.",
                    </p>
                  </div>
                </div>
                <div className="col-4 service--cart">
                  <div className="section__corusel-img">
                    <div className="corousel--img">
                      <img src={img5} alt="..." />
                    </div>

                    <h4>Naxly as the Winners in Global Agency Awards</h4>
                    <p>
                      "Lorem ipsum is placeholder text commonly used in print,
                      and publishing industries for previewing layouts and
                      visual mockups.",
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-4 service--cart">
                  <div className="section__corusel-img">
                    <div className="corousel--img">
                      <img src={img1} alt="..." />
                    </div>

                    <h4>Naxly as the Winners in Global Agency Awards</h4>
                    <p>
                      "Lorem ipsum is placeholder text commonly used in print,
                      and publishing industries for previewing layouts and
                      visual mockups.",
                    </p>
                  </div>
                </div>
                <div className="col-4 service--cart">
                  <div className="section__corusel-img">
                    <div className="corousel--img">
                      <img src={img2} alt="..." />
                    </div>
                    <h4>Naxly as the Winners in Global Agency Awards</h4>
                    <p>
                      "Lorem ipsum is placeholder text commonly used in print,
                      and publishing industries for previewing layouts and
                      visual mockups.",
                    </p>
                  </div>
                </div>
                <div className="col-4 service--cart">
                  <div className="section__corusel-img">
                    <div className="corousel--img">
                      <img src={img3} alt="..." />
                    </div>

                    <h4>Naxly as the Winners in Global Agency Awards</h4>
                    <p>
                      "Lorem ipsum is placeholder text commonly used in print,
                      and publishing industries for previewing layouts and
                      visual mockups.",
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Service;
