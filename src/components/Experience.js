import { Container, Row, Col } from "react-bootstrap";
import { BoxArrowUpRight, DoorOpen } from "react-bootstrap-icons";
import colorSharp2 from "../assets/img/color-sharp2.png";
export const Experience = () => {
  return (
    <section className="skill" id="experience">
      <Container>
        <Row>
            <Col>
                <h1>Experience</h1>
            </Col>
        </Row>
        <Row>
            <Col>
                <h3>Web Developer Intern <a href="https://drive.google.com/file/d/1GXrOn1khGRXrkNpeCW4PGdvuqNnf46np/view?usp=sharing" target={"_blank"} style={{color:"white",fontSize:"30px"}}><BoxArrowUpRight></BoxArrowUpRight></a></h3>
                <h3>
                    <a href="https://weiw.in/" target={"_blank"} 
                    style={{color:"white",fontSize:"30px",textDecoration:"none"}}
                    > Weiw.in</a>
                </h3>
                <h4>Januanry 2023</h4>
                <p> - Developed and implemented the company’s website using ReactJS framework, utilizing EmailJS for auto-response emails and hosting on Firebase.
                    <br></br>
                    - Collaborated with the development team of 3 to deliver a high-quality, user-friendly website.
                    <br></br>
                    - Contributed to the growth of the company by successfully implementing and launching their online website, resulting in an increase in user base and overall reach.
                </p>
            </Col>
        </Row>
        <Row>
            <Col>
                <h3>Committee Member</h3>
                <h3>Board Of Information Technology</h3>
                <h4>August 2022 - Present</h4>
                <p> - Addressed the problems of students related to IT infrastructure in our college
                    <br></br>
                    - Organized 3+ technical events for 500+ students
                    <br></br>
                    - Created applications for college fests
                </p>
            </Col>
        </Row>
        <Row>
            <Col>
                <h3>Subject Matter Expert <a href="https://drive.google.com/file/d/1W_KvgdvyudST9TWtjeAXKvO5MTSSeqEk/view?usp=sharing" target={"_blank"} style={{color:"white",fontSize:"30px"}}><BoxArrowUpRight></BoxArrowUpRight></a></h3>
                <h4>Chegg Inc.</h4>
                <h5>September 2021 - Januanry 2022</h5>
                <p>- Solved students’ doubts in C/C++ and Data structures and algorithms
                    <br></br>
                   - Provided 60+ high-quality answers with clear explanations
                </p>
            </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
