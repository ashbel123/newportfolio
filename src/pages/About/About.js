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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              quasi consequuntur error nihil nam esse. Officiis nam recusandae
              quae. Rerum quam accusantium quis est. Assumenda autem tenetur
              maiores odio blanditiis totam inventore quia aut atque in quod, ea
              officiis architecto qui ab dolorum a molestias? Explicabo corrupti
              vero ten
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
