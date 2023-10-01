import React from 'react'
import Typewriter from "typewriter-effect";
import './Home.css';
import Resume from '../../assets/docs/Balli Ashbel Raj_20121A0528.pdf.pdf';

const Home = () => {
   return (
    <>
      <div className="container-fluid home-container" id="home">
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
            
              <a
                href="https://api.whatsapp.com/send?phone=9603727120"
                rel="noreferrer"
                target="_blank"
                className="btn btn-hire"
              >
                Hire Me
              </a>
            
            
            <a className="btn btn-cv" href={Resume} download="ashbelraj.pdf">
              My Resume
            </a>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Home