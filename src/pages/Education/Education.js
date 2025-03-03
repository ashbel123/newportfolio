import React from "react";
import { IoMdSchool } from 'react-icons/io'
import { LuSchool } from 'react-icons/lu'
import {BiSolidSchool} from 'react-icons/bi'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";
const Education = () => {
  return (
    <>
      <div className="education" id="education">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          EDUCATION details
        </h2>
        <hr />
        <VerticalTimeline lineColor="grey">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "BLACK" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2020 - 2024"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<IoMdSchool />}
          >
            <h3 className="vertical-timeline-element-title">Btech</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Sree Vidyanikethan Engineering College, IN
            </h4>
            <h5 >
              Jawaharlal Nehru Technological University (JNTUA)
            </h5>
            <h6>Computer Science And Engineering - 8.83 CGPA (84.07%)</h6>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "BLACK" }}
            contentArrowStyle={{ borderRight: "7px solid  orange" }}
            date="2018 - 2020"
            iconStyle={{ background: "orange", color: "#fff" }}
            icon={<BiSolidSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              Intermediate-MPC(Higher Secondary)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Narayana Junior College, IN
            </h4>
            <h5 >
              Board Of Intermediate Education Andhra Pradesh
            </h5>
            <h6>Math, Physics and Chemistry(MPC) - 9.88 CGPA (95.9%)</h6>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "BLACK" }}
            contentArrowStyle={{ borderRight: "7px solid  red" }}
            date="2018"
            iconStyle={{ background: "red", color: "#fff" }}
            icon={<LuSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              Xth standard (Secondary)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Ravindra Bharathi School, IN
            </h4>
            <h5 >
              The Board Of Secondary Education of Andhra Pradesh
            </h5>
            <h6>10.0 CGPA (99%)</h6>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;
