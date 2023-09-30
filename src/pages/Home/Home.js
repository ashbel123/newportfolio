import React from 'react'
import { useTheme } from '../../context/ThemeContext';
import Typewriter from "typewriter-effect";
import './Home.css';
import Resume from '../../assets/docs/Balli Ashbel Raj_20121A0528.pdf.pdf';
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import LightSpeed from "react-reveal/LightSpeed";
const Home = () => {
  const [theme, setTheme] = useTheme();
  //handle theme
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };
 
 
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsFillMoonStarsFill size={30} />
          ) : (
            <BsFillSunFill size={30} />
          )}
        </div>
        <div className="container home-content">
          <h2>Hi ✌️I'm a</h2>
          <h1>
            <Typewriter
              options={{
                strings: [
                  "Full Stack Developer!",
                  "Flutter Developer!",
                  "Podcaster",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="home-buttons">
            <LightSpeed left>
              <a
                href="https://api.whatsapp.com/send?phone=7670914679"
                rel="noreferrer"
                target="_blank"
                className="btn btn-hire"
              >
                Hire Me
              </a>
            </LightSpeed>
            <LightSpeed right>
            <a className="btn btn-cv" href={Resume} download="ashbelraj.pdf">
              My Resume
            </a>
            </LightSpeed>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home