import React from "react";
import { Link } from "react-scroll";
import Typical from "react-typical";
import "./Profile.css";

function Profile() {
  return (
    <div id="home" className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/ramkrishna.prabhu.3">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="https://www.instagram.com/ramprabhu43/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello 👋, I'M <span className="highlighted-text">Ramkrishna</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Web developer 😎",
                    1000,
                    "FrontEnd Developer ",
                    1000,
                    "MERN Stack Developer",
                    1000,
                    "Ethusiastic Dev",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with FrontEnd operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <Link to="contact">
              <button className="btn primary-btn">
                {""}
                Hire Me{" "}
              </button>
            </Link>
            <a
              href="Ramkrishna-Prabhu Resume.pdf"
              download="Ramkrishna Prabhu.pdf"
            >
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
