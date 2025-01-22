import React from "react";
// import { SiReact } from "react-icons/si";
import { BsFillBuildingsFill } from "react-icons/bs";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";
const WorkExp = () => {
  return (
    <>
      <div className="work" id="work">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="grey">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "BLACK" }}
              contentArrowStyle={{
                borderRight: "7px solid  #138781",
              }}
              date="2024 (AUG) - 2024(OCT)"
              iconStyle={{ background: "#138781", color: "#fff" }}
              icon={<BsFillBuildingsFill />}
            >
              <h3 className="vertical-timeline-element-title">
                DevOps Engineer Trainee
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                HashedInByDeloitte
              </h4>
              <p>
                Podman(Docker), Kubernetes, CICD(Github-actions), Terraform,
                AWS, AZURE, GCP.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
