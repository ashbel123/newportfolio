import React from "react";
import "./Projects.css";
import proj from "../../assets/images/proj.jpg";
import tictactoe from "../../assets/images/tic-tac-toe.jpg";
import netflix from "../../assets/images/netflix.jpg";
import thermo from "../../assets/images/thermo.jpg";
import books from "../../assets/images/books.jpg";


const Projects = () => {
  return (
    <>
      <div className="  project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Projects
        </h2>
        <hr />
        <p className="pb-3 text-center">
          Here are the recent projects with links and source code
        </p>
        {/* CARD DESIGN */}
        <div className="row" id="ads">
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">
                  Responsive portfolio -React
                </span>
                <img src={proj} alt="project-1" />
              </div>
              <div className="card-image-overlay m-auto mt-3">
                {/* <span className="card-detail-badge">Node</span> */}
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">CSS</span>
              </div>
              <div className="card-body text-center ">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Personal- Portfolio</h5>
                </div>
                <a
                  href="https://github.com/ashbel123/my-portfolio"
                  className="ad-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">
                  Weather Forecast -React & Api
                </span>
                <img src={thermo} alt="project-1" />
              </div>
              <div className="card-image-overlay m-auto mt-3">
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">OpenWeatherMap Api</span>
                
              </div>
              <div className="card-body text-center ">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Weather Forecast</h5>
                </div>
                <a
                  href="https://github.com/ashbel123/new-weather-app"
                  className="ad-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">MERN-STACK</span>
                <img src={books} alt="project-1" />
              </div>
              <div className="card-image-overlay m-auto mt-3">
                <span className="card-detail-badge">Mongodb</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">Node</span>
                
              </div>
              <div className="card-body text-center ">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Book store Management</h5>
                </div>
                <a
                  href="https://github.com/ashbel123/book-store-app"
                  className="ad-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge"> web-development</span>
                <img src={netflix} alt="project-1" />
              </div>
              <div className="card-image-overlay m-auto mt-3">
                <span className="card-detail-badge">HTML</span>
                <span className="card-detail-badge">CSS</span>
                
              </div>
              <div className="card-body text-center ">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Landing Page -NETFLIX</h5>
                </div>
                <a
                  href="https://github.com/ashbel123/Netflix_Clone"
                  className="ad-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">React</span>
                <img src={tictactoe} alt="project-1" />
              </div>
              <div className="card-image-overlay m-auto mt-3">
                <span className="card-detail-badge">React</span>
              </div>
              <div className="card-body text-center ">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">TIC-TAC-TOE</h5>
                </div>
                <a
                  href="https://github.com/ashbel123/tic-tac-toe"
                  className="ad-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
