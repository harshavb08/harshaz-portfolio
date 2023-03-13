import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import TrackVisibility from 'react-on-screen';
import colorSharp from "../assets/img/color-sharp.png"
import { Github, Instagram, Linkedin } from "react-bootstrap-icons";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };


  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated " : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "" : ""}>
                <h2>Get In Touch</h2>
                <p>Feel free to contact me for any work or suggestions below</p>
                <Row>
                  <Col size={12} sm={1} className="px-2" style={{width:"40px"}}>
                    <a href="https://www.linkedin.com/in/harshavardhan-bammidi/" target="_blank" rel="noreferrer">
                      <button style={{color:"white"}}><Linkedin size={25}/></button>
                    </a>
                  </Col>
                  <Col size={12} sm={1} className="px-2" style={{width:"40px"}}>
                    <a href="https://github.com/harshavb08" target="_blank" rel="noreferrer">
                      <button style={{color:"white"}}><Github size={25}/></button>
                    </a>
                  </Col>
                  <Col size={12} sm={1} className="px-2" style={{width:"40px"}}>
                    <a href="https://www.instagram.com/harshaz8/?hl=en" target="_blank" rel="noreferrer">
                      <button style={{color:"white"}}><Instagram size={25}/></button>
                    </a>
                  </Col>
                </Row>
                <br></br>
                <form>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text"  placeholder="First Name" onChange={(e)=>(handleNameChange(e))} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" placeholder="Email Address" onChange={(e)=>(handleEmailChange(e))}/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6"  placeholder="Message" onChange={(e)=>(handleMessageChange(e))}></textarea>
                      <button type="submit" onClick={() => window.location = `mailto:harshavb08@gamil.com?subject=${name|| ""}&body=${message || ""}`}><span>Send</span></button>
                    </Col>
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
