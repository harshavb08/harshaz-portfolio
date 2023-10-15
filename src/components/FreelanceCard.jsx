import { Col } from "react-bootstrap";
import { Download, Github, Link45deg } from "react-bootstrap-icons";

export const FreelanceCard= ({ title, description, imgUrl, liveUrl}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="project"
         />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <h6>{description}</h6>

          <a href={liveUrl} target="_blank" rel="noreferrer" style={{ textDecoration: "none"}}>
                  <button  style={{color:"white"}} > <span style={{
                    textDecoration: "underline",
                  }}>Website Link</span><Link45deg size={25} /></button>
          </a>
        </div>
      </div>
    </Col>
  )
}
