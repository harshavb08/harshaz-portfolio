import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import { Container,Row ,Col } from "react-bootstrap";
import Skilldata from './Skilldata';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <br></br>
                        <h4>Programming Languages</h4>
                        <Row className="justify-content-center">
                            <Col md={3}>
                              <Skilldata imglink="https://cdn-icons-png.flaticon.com/512/6132/6132222.png" skillname="C/C++"/>
                            </Col>
                            <Col md={3}>
                                <Skilldata imglink="https://cdn-icons-png.flaticon.com/512/919/919852.png" skillname="Python"/>
                            </Col>
                            <Col md={3}>
                                <Skilldata imglink="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" skillname="Java Script"/>
                            </Col>
                          </Row>
                          <br></br>
                          <h4>Web Technologies</h4>
                          <Row className="justify-content-center">
                            <Col md={3}>
                              <Skilldata imglink="https://freeiconshop.com/wp-content/uploads/edd/html-flat.png" skillname="HTML"/>
                            </Col>
                            <Col md={3}>
                                <Skilldata imglink="https://cdn-icons-png.flaticon.com/512/732/732190.png" skillname="CSS"/>
                            </Col>
                            <Col md={3}>
                                <Skilldata imglink="https://cdn-icons-png.flaticon.com/512/5968/5968672.png" skillname="Bootstrap"/>  
                            </Col>
                          </Row>
                          <Row className="justify-content-center">
                            <Col md={3}>
                              <Skilldata imglink="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" skillname="ReactJs"/>
                            </Col>
                            <Col md={3}>
                                <Skilldata imglink="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/django-icon.png" skillname="Django"/>
                            </Col>
                            <Col md={3}>
                                <Skilldata imglink="https://www.pngitem.com/pimgs/m/159-1595977_flask-python-logo-hd-png-download.png" skillname="Flask"/>  
                            </Col>
                          </Row>
                          <br></br>
                          <h4>Databases</h4>
                          <Row className="justify-content-center">
                            <Col md={3}>
                              <Skilldata imglink="https://www.opc-router.de/wp-content/uploads/2021/03/mongodb_thumbnail.png" skillname="MongoDB"/>
                            </Col>
                            <Col md={3}>
                                <Skilldata imglink="https://cdn-icons-png.flaticon.com/512/919/919836.png" skillname="MySQL"/>
                            </Col>
                            <Col md={3}>
                                <Skilldata imglink="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Sqlite-square-icon.svg/2048px-Sqlite-square-icon.svg.png" skillname="SQLite3"/>
                            </Col>
                          </Row>
                          <br></br>
                          <h4>Tools</h4>
                          <Row className="justify-content-center">
                            <Col md={3}>
                              <Skilldata imglink="https://www.biteinteractive.com/wp-content/uploads/2021/05/git-vs-github.png" skillname="Git & Github"/>
                            </Col>
                            <Col md={3}>
                                <Skilldata imglink="https://cdn.iconscout.com/icon/free/png-256/heroku-2752161-2284978.png" skillname="Heroku"/>
                            </Col>
                            <Col md={3}>
                                <Skilldata imglink="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Visual_Studio_Code_1.18_icon.svg/2056px-Visual_Studio_Code_1.18_icon.svg.png" skillname="VS Code"/>
                            </Col>
                          </Row>
                          <br></br>
                          <h4>Libraries</h4>
                          <Row className="justify-content-center">
                            <Col md={3}>
                                <Skilldata imglink="https://user-images.githubusercontent.com/50221806/86498201-a8bd8680-bd39-11ea-9d08-66b610a8dc01.png" skillname="Numpy"/>
                            </Col> 
                            <Col md={3}>
                              <Skilldata imglink="https://static.javatpoint.com/tutorial/pandas/images/python-pandas.png" skillname="Pandas"/>
                            </Col>
                            <Col md={3}>

                                <Skilldata imglink="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/2560px-Scikit_learn_logo_small.svg.png" skillname="Scikit Learn"/>
                            </Col>
                            <Col md={3}>
                                <Skilldata imglink="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Created_with_Matplotlib-logo.svg/1200px-Created_with_Matplotlib-logo.svg.png" skillname="Matplotlib"/>
                            </Col>
                          </Row>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
