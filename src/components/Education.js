import { Container, Row, Col } from "react-bootstrap";
import { BoxArrowUpRight, DoorOpen, Download, Journal } from "react-bootstrap-icons";
import colorSharp from "../assets/img/color-sharp.png";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export const Education = () => {
  return (
    <section className="skill" id="education">
      <Container>
        <h2>Education</h2>
        <VerticalTimeline animate={true}>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(55 38 63)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(55 38 63)" }}
            date="2020 - 2024 (Expected)"
            iconStyle={{ background: "rgb(105 61 125)", color: "#fff" }}
            icon={<Journal />}
          >
            <h3 className="vertical-timeline-element-title">
              B.Tech in Computer Science and Engineering with Ai-Ml
            </h3>
            <br></br>
            <h4 className="vertical-timeline-element-subtitle">CMR College Of Engineering & Technology</h4>
            <p>
              CGPA: 9.13/10
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(55 38 63)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(55 38 63)" }}
            date="2018 - 2020"
            iconStyle={{ background: "rgb(105 61 125)", color: "#fff" }}
            icon={<Journal />}
          >
            <h3 className="vertical-timeline-element-title">
              Intermediate
            </h3>
            <br></br>
            <h4 className="vertical-timeline-element-subtitle">Narayana Junior College</h4>
            <p>
              Percentage: 93.4%
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(55 38 63)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(55 38 63)" }}
            date="2019 - 2020"
            iconStyle={{ background: "rgb(105 61 125)", color: "#fff" }}
            icon={<Journal />}
          >
            <h3 className="vertical-timeline-element-title">
              S.S.C
            </h3>
            <br></br>
            <h4 className="vertical-timeline-element-subtitle">St.Anthony's High School</h4>
            <p>
              GPA: 9.8/10
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
