import React from "react";
import "./Projects.css";
import proj from "../../assets/images/proj.jpg";
import tictactoe from "../../assets/images/tic-tac-toe.jpg";
import netflix from "../../assets/images/netflix.jpg";
import Fade from "react-reveal/Fade";
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
          <Fade top >
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge"> Full stack</span>
                  <img src={proj} alt="project-1" />
                </div>
                <div className="card-image-overlay m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  
                </div>
                <div className="card-body text-center ">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase"> Personal- Portfolio</h5>
                  </div>
                  <a href="#" className="ad-btn">
                    View
                  </a>
                </div>
              </div>
            </div>
          </Fade>
          <Fade bottom>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge"> web-development</span>
                  <img src={netflix} alt="project-1" />
                </div>
                <div className="card-image-overlay m-auto mt-3">
                  <span className="card-detail-badge">HTML</span>
                  <span className="card-detail-badge">CSS</span>
                  {/* <span className="card-detail-badge">React</span>
                              <span className="card-detail-badge">Mongodb</span> */}
                </div>
                <div className="card-body text-center ">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">
                      Landing Page -NETFLIX
                    </h5>
                  </div>
                  <a
                    href="https://github.com/ashbel123/Netflix_Clone"
                    className="ad-btn"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          </Fade>
          <Fade right >
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge"> Full stack</span>
                  <img src={tictactoe} alt="project-1" />
                </div>
                <div className="card-image-overlay m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">JavaScript</span>
                </div>
                <div className="card-body text-center ">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">TIC-TAC-TOE</h5>
                  </div>
                  <a
                    href="https://github.com/ashbel123/tic-tac-toe"
                    className="ad-btn"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Projects;
