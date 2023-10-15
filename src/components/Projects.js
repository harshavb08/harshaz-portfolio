import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { FreelanceCard } from "./FreelanceCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import projNetflix from "../assets/img/projNetflix.png";
import projMlyze from "../assets/img/projMlyze.png";
import projOrientation from "../assets/img/projOrientation.png";
import projCardio from "../assets/img/projCardio.jpeg";
import projShikshak from "../assets/img/projShikshak.png";
import projAgriX from "../assets/img/projAgriX.png";
import projCmng from "../assets/img/achCmg.jpg";
import projInt from "../assets/img/projInt.png";
import projvcss from "../assets/img/projvcss.png";
import projVcssuk from "../assets/img/projVcssuk.png";
import projBonkur from "../assets/img/projBonkur.png";
import projWeiw from "../assets/img/projWeiw.png";

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
      description: "A web application for diagnosing Cardiomegaly using X-ray images, made as a part of UNESCO India Afria Hackathon 2022",
      imgUrl: projCardio,
      liveUrl: "https://github.com/harshavb08/cardioAnalyx",
      gitUrl: "https://github.com/harshavb08/cardioAnalyx",
    },
    {
      title: "AgriX",
      description: "An E-commerce Website for farmers with a clean and user-friendly interface and search bar feature that allows farmers to easily browse different categories of seeds, fertilizers, pesticides and also different types of farming utilities and products.",
      imgUrl: projAgriX,
      liveUrl: "https://github.com/harshavb08/AgriX",
      gitUrl: "https://github.com/harshavb08/AgriX",
    },
    {
      title: "Netflix Clone",
      description: "A React Js based web application which resembles the Netflix interface. It makes use of TMDB APIs to get the data relevant data.",
      imgUrl: projNetflix,
      liveUrl: "https://netflix-clone-by-h99.web.app/",
      gitUrl: "https://github.com/harshavb08/Netflix-Clone"
    },

  ];

  const freelancingProjects = [
      {
        title: "The Bonkur Group",
        imgUrl: projBonkur,
        description: "Client: The Bonkur Group, UK",
        liveUrl: "https://thebonkurgroup.com",
      },
      {
        title: "VCSS Canada",
        imgUrl: projVcssuk,
        description: "Client: VCSS, Canada",
        liveUrl: "https://vcsscanada.com",
      },
      {
        title: "VCSS UK",
        imgUrl: projvcss,
        description: "Client: VCSS, UK",
        liveUrl: "https://vcss.uk",
      },
      {
        title: "International Gateway Ltd.",
        imgUrl: projInt,
        description: "Client: International Gateway Ltd, UK",
        liveUrl: "https://intgateway.com", 
      },
      {
        title: "Weiw.in",
        imgUrl: projWeiw,
        description: "Client: Weiw.in, India",
        liveUrl: "https://weiw.in",
      },
      {
        title: "Coming Soon",
        imgUrl: projCmng,
        description: "",
        liveUrl: "#",
      }

  ];

  return (
    <>
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "": ""}>
                <h2>Projects</h2>
                <br></br>
                <Tab.Container id="projects-tabs" defaultActiveKey="first" style={
                  {
                    alignItems: "center",
                    justifyContent: "center",
                  }
                }>
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
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "": ""}>
                <h2>Freelancing Work</h2>
                <p>Note: Color Theme and website design were set as given by client</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first" style={
                  {
                    alignItems: "center",
                    justifyContent: "center",
                  }
                }>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          freelancingProjects.map((project, index) => {
                            return (
                              <FreelanceCard
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
    
    </>
  )
}
