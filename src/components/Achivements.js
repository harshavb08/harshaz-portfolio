import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';



import { AchivementCard } from "./AchivementCard";

import achUIA from "../assets/img/achUIA.jpeg";
import achArmy from "../assets/img/achArmy.png";
import achSIH from "../assets/img/achSIH.jpeg";
import achCC from "../assets/img/achCC.jpeg";
import achAzura from "../assets/img/achAzura.jpeg";
import achCmg from "../assets/img/achCmg.jpg";
import achInv from "../assets/img/achInv.jpg";

export const Achivements = () => {

  const achivements = [
    {
        title: "Received Appreciation from Indian Army",
        description: "For the contribution in the project-Drishti",
        imgUrl: achArmy,
        certificateUrl: "https://drive.google.com/file/d/1JjKD04X-cFxu27FE0Y7wEOenVnElNRrF/view?usp=sharing",
    },

    {
      title: "Winner",
      description: "UNESCO India Africa Hackathon 2022 (PSCODE-HECL52), Prize Money: 3,00,000 INR",
      imgUrl: achUIA,
      certificateUrl: "https://drive.google.com/file/d/1O9BA4UllJCI3ayKwlLaPf2aeSnbmqfLH/view?usp=sharing",
    },
    {
        title: "Winner",
        description: "Smart India Hackathon 2022 (PSCODE-OS873), Prize Money: 1,00,000 INR",
        imgUrl: achSIH,
        certificateUrl: "https://drive.google.com/file/d/1Ag7Z2JPCgYJ8zjCp5vHGXDjmoSsEqJBq/view?usp=share_link",
    },
    {
        title:"4* Coder at CodeChef",
        description: "Ranked 4* at CodeChef",
        imgUrl: achCC,
        certificateUrl: "https://www.codechef.com/users/spaaamhx_8",
    },
    {
        title:"Winner",
        description: "Web Designing Competition at Azura 2022, CMRCET",
        imgUrl: achAzura,
        certificateUrl: "https://drive.google.com/file/d/1CWw_cjdjNb3BRDjFLbWyXVtx9AzD5WoQ/view?usp=sharing",
    },
    {
        title:"Ranked 2nd",
        description: "Inventron 2023, MLRIT Hyderabad",
        imgUrl: achInv,
        certificateUrl: "https://drive.google.com/file/d/173L8Ljlc9fBUsG5iuNRV_1AyCmSZAwim/view",
    }
  ];

  return (
    <section className="project" id="achivements">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "": ""}>
                <h2>Achivements</h2>
                <br></br>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          achivements.map((achivement, index) => {
                            return (
                              <AchivementCard
                                key={index}
                                {...achivement}
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
