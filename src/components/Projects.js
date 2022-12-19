import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';


import projNetflix from "../assets/img/projNetflix.png";
import projMlyze from "../assets/img/projMlyze.png";
import projOrientation from "../assets/img/projOrientation.png";
import projCardio from "../assets/img/projCardio.jpeg";
import projShikshak from "../assets/img/projShikshak.png";
import projPlag from "../assets/img/projPlag.png";

export const Projects = () => {

  const projects = [
    {
      title: "Ml-yze",
      description: "A web application to analyze Ml classifiers",
      imgUrl: projMlyze,
      liveUrl: "https://ml-yze2.netlify.app/",
      gitUrl: "https://github.com/harshavb08/Ml-yze_2.0"

    },
    {
      title: "Shikshak Prabandan",
      description: "Teachers management system, made as a part of Smart India Hackathon 2022",
      imgUrl: projShikshak,
      liveUrl: "https://eloquent-crepe-294c84.netlify.app/",
      gitUrl: "https://github.com/harshavb08/shikshak-prabandan",
    },
    {
      title: "Orientation Day App-CMRCET",
      description: "A web application for students registrations at Orientation Day-2022, CMRCET",
      imgUrl: projOrientation,
      liveUrl: "https://orientationday-2022.web.app/",
      gitUrl: "https://github.com/harshavb08/OrientationDay-2022",
    },
    {
      title: "Cardio Analyx",
      description: "A web application for diagnosing Cardiomegaly using X-ray images, made as a part of UNESCO India Afria Hackathon 2022 (Not yet deployed)",
      imgUrl: projCardio,
      lliveUrl: "",
      ggitUrl: "",
    },
    {
      title: "Plag Nest",
      description: "A web application to detect plagiarism in files like C, C++, Java, Python using mossPy (Currently under development)",
      imgUrl: projPlag,
      lliveUrl: "",
      ggitUrl: "",
    },
    {
      title: "Netflix Clone",
      description: "A React Js based web application which resembles the Netflix interface. It makes use of TMDB APIs to get the data relevant data.",
      imgUrl: projNetflix,
      liveUrl: "https://netflix-clone-by-h99.web.app/",
      gitUrl: "https://github.com/harshavb08/Netflix-Clone"
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "": ""}>
                <h2>Projects</h2>
                <br></br>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}