import { React ,useState} from "react";
import "./MobileNav.css";
import {
  FcAbout,
  FcBiotech,
  FcHome,
  FcPhone,
  FcRotateToPortrait,
  FcVideoProjector,
} from "react-icons/fc";
import { IoIosSchool } from "react-icons/io";
import { BiMenuAltLeft,BiMenuAltRight } from "react-icons/bi";
import { Link } from 'react-scroll';
const MobileNav = () => {
    const [open, setOpen] = useState(false);
    
    //handle open
    const handleOpen = () => {
        setOpen(!open);
    };

    //handle menu clicks
    const handleMenuClick = () => {
        setOpen(false);
    }
  return (
    <>
      <div className="mobile-nav">
        <div className="mobile-nav-header">
          {open ? (
            <BiMenuAltRight
              size={30}
              className="mobile-nav-icon"
              onClick={handleOpen}
            />
          ) : (
            <BiMenuAltLeft
              size={30}
              className="mobile-nav-icon"
              onClick={handleOpen}
            />
          )}

          <span className="mobile-nav-title"> My Portfolio App</span>
        </div>

        {open && (
          <div className="mobile-nav-menu">
            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
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
                    onClick={handleMenuClick}
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
                    onClick={handleMenuClick}
                  >
                    <IoIosSchool />
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
                    onClick={handleMenuClick}
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
                    onClick={handleMenuClick}
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
                    onClick={handleMenuClick}
                  >
                    <FcRotateToPortrait />
                    OtherLinks & Hobbies
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
                    <FcPhone />
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MobileNav;
