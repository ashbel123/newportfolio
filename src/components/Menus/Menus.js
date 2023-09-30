import React from "react";
import "./Menus.css";
// import ash from '../../assets/images/CIRCLE.png'
import {
  FcAbout,
  FcBiotech,
  FcEditImage,
  FcGraduationCap,
  FcHome,
  FcPhone,
  FcVideoProjector,
} from "react-icons/fc";
import { Link } from "react-scroll";
import Fade from "react-reveal/Fade";
// import { BsFillPersonCheckFill } from 'react-icons/bs';
const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          {/* <div className="navbar-profile-pic">
            <img
              src={ash}
              alt="profile pic"
            />
          </div>  */}
          <div className="navbar-name">
            <h2>Ashbel Raj</h2>
          </div>
          <Fade left>
            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcHome />
                    Home
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcAbout />
                    About
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcGraduationCap />
                    Education
                  </Link>
                </div>

                <div className="nav-link">
                  <Link
                    to="techstack"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcBiotech />
                    Tech Stack
                  </Link>
                </div>

                <div className="nav-link">
                  <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcVideoProjector />
                    projects
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="otherworks"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcEditImage />
                    Hobbies
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcPhone />
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </Fade>
        </>
      ) : (
        <>
          <div className=" toggle nav-items-tog">
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcHome title="Home" />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcAbout title="About" />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcGraduationCap title="Education" />
                </Link>
              </div>

              <div className="nav-link">
                <Link
                  to="techstack"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcBiotech title="Tech Stack" />
                </Link>
              </div>

              <div className="nav-link">
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcVideoProjector title="projects" />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="otherworks"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcEditImage title="Hobbies" />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcPhone title="Contact" />
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menus;
