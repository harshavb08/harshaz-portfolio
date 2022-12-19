import { Col } from "react-bootstrap";
import { Download, Github, Link45deg } from "react-bootstrap-icons";

export const ProjectCard = ({ title, description, imgUrl,liveUrl, gitUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} 
        
         />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br></br>
          <br></br>
          <a href={liveUrl} target="_blank" rel="noreferrer" style={{ textDecoration: "none"}}>
                  <button  style={{color:"white"}} >Live<Link45deg size={25} /></button>
            </a>
          {' '}
          <a href={gitUrl} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                <button style={{color:"white"}}>Github <Github size={25} /></button>
            </a>
        </div>
      </div>
    </Col>
  )
}
