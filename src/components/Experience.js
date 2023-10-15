import { Container, Row, Col } from "react-bootstrap";
import { BoxArrowUpRight, DoorOpen, Download, Journal, Youtube, PersonWorkspace } from "react-bootstrap-icons";
import colorSharp2 from "../assets/img/color-sharp2.png";

import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";

  

export const Experience = () => {
  return (
    <>
    <section className="skill" id="experience">
      <Container>
        <h2>Experience</h2>
        <VerticalTimeline animate={true}>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(55 38 63)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(55 38 63)" }}
            date="Jun 2023 - Aug 2023"
            iconStyle={{ background: "rgb(105 61 125)", color: "#fff" }}
            icon={<PersonWorkspace />}
          >
            <h3 className="vertical-timeline-element-title">
              Software Engineer Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle">PayPal, Bengaluru, India</h4>
            <p>
                <ul>
                  <li>Integrated Kubernetes Dashboard to KubeIO using helm charts</li>
                    <li>Modified Open Source Kubernetes Dashboard to integrate PingId SSO and RBAC at namespace level for security</li>
                    <li>Added K8s yml templates to 20+ custom apps</li>
                    <li>TechStack: Kubernetes, Helm Charts, Go, Angular, Jenkins, JIRA, Git, Github, Agile Methodology</li>
                </ul>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(55 38 63)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(55 38 63)" }}
            date="Apr 2023 - Present"
            iconStyle={{ background: "rgb(105 61 125)", color: "#fff" }}
            icon={<Youtube />}
          >
            <h3 className="vertical-timeline-element-title">
              Content Creator
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Harshavardhan Bammidi | Youtube</h4>
            <p>
                <ul>
                    <li>Creating content on my coding journey, interview experience, hackathons etc.</li>
                    <li>Subscribers: 835+</li>
                    <li>Views: 7,604+</li>
                    <li>Uploaded Videos: 4</li>
                    <li>TechStack: Youtube, Premiere Pro, Photoshop</li>
                    <li>
                        <a href="https://www.youtube.com/@HarshavardhanBammidi" target={"_blank"} style={{
                            textDecoration: "none",
                            color: "#B8B8B8",
                    
                        }}>
                            <span style={{
                                textDecoration: "underline",
                            }}>Channel Link</span> <BoxArrowUpRight></BoxArrowUpRight>
                        </a>
                    </li>
                </ul>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(55 38 63)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(55 38 63)" }}
            date="Jan 2023 - Feb 2023"
            iconStyle={{ background: "rgb(105 61 125)", color: "#fff" }}
            icon={<PersonWorkspace />}
          >
            <h3 className="vertical-timeline-element-title">
              Web Developer Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Weiw.in</h4>
            <p>
                <ul>
                    <li>Developed and implemented the company’s website using ReactJS framework,
utilizing EmailJS for auto-response emails and hosting on Firebase.
</li>
<li>Collaborated with the development team of 3 to deliver a high-quality, user-friendly website</li>
                    <li>Contributed to the growth of the company by successfully implementing and
launching their online website,resulting in an increase in user base and overall
reach.</li>
                    <li>TechStack: ReactJS, EmailJs, Firebase, Git, GitHub</li>
                    <li>
                        <a href="https://drive.google.com/file/d/1GXrOn1khGRXrkNpeCW4PGdvuqNnf46np/view" target={"_blank"} style={{
                            textDecoration: "none",
                            color: "#B8B8B8",
                    
                        }}>
                            <span style={{
                                textDecoration: "underline",
                            }}>Certificate Link</span> <BoxArrowUpRight></BoxArrowUpRight>
                        </a>
                    </li>
                </ul>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(55 38 63)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(55 38 63)" }}
            date="Aug 2022 - Aug 2023"
            iconStyle={{ background: "rgb(105 61 125)", color: "#fff" }}
            icon={<PersonWorkspace />}
          >
            <h3 className="vertical-timeline-element-title">
              Committe Member
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Board of IT</h4>
            <p>
                <ul>
                    <li>Addressed the problems of students related to IT infrastructure in our college
</li>
<li>Organized 3+ technical events for 500+ students</li>
                    <li>Created applications for college events</li>
                    {/* <li>TechStack: ReactJS, EmailJs, Firebase, Git, GitHub</li>
                    <li>
                        <a href="https://drive.google.com/file/d/1GXrOn1khGRXrkNpeCW4PGdvuqNnf46np/view" target={"_blank"} style={{
                            textDecoration: "none",
                            color: "#B8B8B8",
                    
                        }}>
                            <span style={{
                                textDecoration: "underline",
                            }}>Certificate Link</span> <BoxArrowUpRight></BoxArrowUpRight>
                        </a>
                    </li> */}
                </ul>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(55 38 63)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(55 38 63)" }}
            date="Sep 2021 - Jan 2022"
            iconStyle={{ background: "rgb(105 61 125)", color: "#fff" }}
            icon={<PersonWorkspace />}
          >
            <h3 className="vertical-timeline-element-title">
              Subject Matter Expert
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Chegg Inc.</h4>
            <p>
                <ul>
                    <li>Solved students’ doubts in C/C++ and Data structures and algorithms
</li>
<li>Provided 60+ high-quality answers with clear explanations</li>
                    {/* <li>TechStack: ReactJS, EmailJs, Firebase, Git, GitHub</li> */}
                    <li>
                        <a href="https://drive.google.com/file/d/1W_KvgdvyudST9TWtjeAXKvO5MTSSeqEk/view?usp=sharing" target={"_blank"} style={{
                            textDecoration: "none",
                            color: "#B8B8B8",
                    
                        }}>
                            <span style={{
                                textDecoration: "underline",
                            }}>Certificate Link</span> <BoxArrowUpRight></BoxArrowUpRight>
                        </a>
                    </li>
                </ul>
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
      </section>
    </>
  )
}
