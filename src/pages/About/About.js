import React from "react";
import "./About.css";
import ash from "../../assets/images/04 (1).JPG";
const About = () => {
  return (
    <>
      <div className="about" id="about">
        <div className="row">
          <div className="col-md-4 col-xl-4 col-lg-4 col-xs-12 about-img">
            <img src={ash} alt="profile_pic" />
          </div>
          <div className="col-md-8 col-xl-8 col-lg-8 col-xs-12 about-content ">
            <h1>About me</h1>
            <p>
              I'm an enthusiastic and proficient Computer Science student with a
              strong interest in Web-Development, App-Development and other new
              technologies.I'm actively seeking opportunities to join a dynamic
              team where I can explore, contribute, and make a positive
              impact.I've always been curious about how things work, especially
              those technologies that simplify our lives, even though their
              underlying workings can be quite complex. I've always had a desire
              to understand and learn about the intricacies of these
              technologies. I would definitely give my part in contributing to the company. 
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
