import { Col } from "react-bootstrap";
import { Download, Github, Link45deg } from "react-bootstrap-icons";

export const AchivementCard = ({ title, description, imgUrl,certificateUrl}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="project"
         />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br></br>
          <br></br>
          <a href={certificateUrl} target="_blank" rel="noreferrer" style={{ textDecoration: "none"}}>
                  <button  style={{color:"white"}} >Cerificate<Link45deg size={25} /></button>
          </a>
        </div>
      </div>
    </Col>
  )
}
