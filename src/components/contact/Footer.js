import React from "react";
import logo from "../../AI/images/logo.svg";
import envelop from "../../AI/icons/mail.png";
import phone from "../../AI/icons/tel.png";
import location from "../../AI/icons/location.png";
import faceBook from "../../AI/icons/facebook.png";
import instagram from "../../AI/icons/instagram.png";
import twitter from "../../AI/icons/twitter.png";
import linkedin from "../../AI/icons/linkedin.png";
import youtube from "../../AI/icons/youtube.png";
import global from "../../AI/icons/globe.png";
import "./footer.css";

const FooterComponent = () => {
  return (
    <footer className="footer--section" id="contact">
      <div className="containers">
        <div className="footer--flex">
          <div className="footer--right">
            <div className="footer--right-one">
              <img src={logo} alt="logo" />
              <h4>Artificial Intelligence</h4>
              <p className="footer-par">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and layouts and visual mockups.
              </p>
            </div>
            <ul className="footer--right-two">
              <li>
                <img src={envelop} alt="envelop" />
                <span className="footer--span">Company@gmail.com.com</span>
              </li>
              <li>
                <img src={phone} alt="phone" />
                <span className="footer--span">Phone: (064) 332-1233</span>
              </li>
              <li>
                <img src={location} alt="location" />
                <span className="footer--span">
                  450 Wall Street, USA, New York
                </span>
              </li>
            </ul>
          </div>

          <ul>
            <li>
              <h6>INFORMATION</h6>
            </li>
            <li>
              <p className="footer-par">New Collection</p>
            </li>
            <li>
              <p className="footer-par">About Store</p>
            </li>
            <li>
              <p className="footer-par">Contact Us</p>
            </li>
            <li>
              <p className="footer-par">Latest News</p>
            </li>
            <li>
              <p className="footer-par">Our Sitemap</p>
            </li>
            <li>
              <p className="footer-par">Orders History</p>
            </li>
          </ul>
          <ul>
            <li>
              <h6>FOOTER MENU</h6>
            </li>
            <li>
              <p className="footer-par">Instagram profile</p>
            </li>
            <li>
              <p className="footer-par">New Collection</p>
            </li>
            <li>
              <p className="footer-par">Contact Us</p>
            </li>
            <li>
              <p className="footer-par">Latest News</p>
            </li>
            <li>
              <p className="footer-par">Our Sitemap</p>
            </li>
            <li>
              <p className="footer-par">Orders History</p>
            </li>
          </ul>
          <ul>
            <li>
              <h6>USEFULL LINKS</h6>
            </li>
            <li>
              <p className="footer-par">Instagram profile</p>
            </li>
            <li>
              <p className="footer-par">New Collection</p>
            </li>
            <li>
              <p className="footer-par">Contact Us</p>
            </li>
            <li>
              <p className="footer-par">Latest News</p>
            </li>
            <li>
              <p className="footer-par">Our Sitemap</p>
            </li>
            <li>
              <p className="footer-par">Orders History</p>
            </li>
          </ul>

          <ul>
            <li>
              <h6>ABOUT THE STORE</h6>
            </li>
            <li>
              <p className="footer--par2">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and layouts and visual mockups.
              </p>
            </li>
            <li>
              <span className="footer--span">www.company.com</span>
            </li>
            <li>
              <ul className="social--media">
                <li>
                  <img src={faceBook} alt="face--book" />
                </li>
                <li>
                  <img src={instagram} alt="instaram" />
                </li>
                <li>
                  <img src={twitter} alt="twitter" />
                </li>
                <li>
                  <img src={linkedin} alt="linkedin" />
                </li>
                <li>
                  <img src={youtube} alt="youtube" />
                </li>
              </ul>
            </li>

            <li>
              <div className="choose--language">
                <img src={global} alt="global" />
                <select name="language">
                  <option value="eng">English</option>
                  <option value="uz">Uzbek</option>
                  <option value="ru">Russian</option>
                </select>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default FooterComponent;
