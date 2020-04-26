import React, { Component } from "react";
import {Link} from "react-router-dom";
import {isMobile} from "react-device-detect";
import MainGif from "./assets/gif/main.gif"


import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  Container
} from "reactstrap";



const demo = "https://www.youtube.com/?gl=ES&hl=es"

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {

    if (isMobile) 
    {
      return (
        <div style={{fontSize:"20px",fontFamily: "Zelda",backgroundImage:`url(${MainGif})`}} className="bg">
        
        <Container fluid={true}>
        <Row md="auto">
        <Col xs="auto">
        <Card className="card-profile shadow">
                        <Row className="justify-content-center">
                        <img style={{height:"30vh"}} src={require("./assets/img/Logo.png")} />
                        </Row>
                        <Row className="justify-content-center">
                        <div className="card-profile-stats d-flex justify-content-center mt-md-3">
                                <div style={{}}>
                                  <span className="description">IoT platform for tree conservation</span>
                                </div>
                              </div>
                        </Row>
                        <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
        
                        </CardHeader>
                        <CardBody className="pt-0 pt-md-4">
                          <Row>
                        <Col>
                        <Link to="/login">
                        <Button color="primary" size="lg" block>Log in</Button>
                        </Link>
                        </Col>
                          </Row>
                          <Row>
                        <Col>
                        <Button onClick={() => window.open("https://www.nationalgeographic.org/education/resource-library/")} color="primary" size="lg" block>I Want to Learn More!</Button>
                        </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    
        </Col>
        <Col xs="1" />
        </Row>
        <Row md="1">
        <Col>
        <Link onClick={() => window.open(demo)}>
        <img style={{position:"absolute",top:"-13px"}} src={require("./assets/gif/groot.gif")} alt="loading..." />
        </Link>
        </Col>
        </Row>
        </Container>
        
        </div>
        )
    }

  else{
  
  return (
    <div style={{fontSize:"20px",fontFamily: "Zelda",backgroundImage:`url(${MainGif})`}} className="bg">

<Container fluid={true}>
<Row md="3">
<Col xs="3" />
<Col xs="8">
<Card className="card-profile shadow">
                <Row className="justify-content-center">
                <img style={{height:"40vh"}} src={require("./assets/img/Logo.png")} />
                </Row>
                <Row className="justify-content-center">
                <div className="card-profile-stats d-flex justify-content-center mt-md-3">
                        <div style={{fontSize:"24px",fontFamily: "Zelda"}}>
                          <span className="description"><br />IoT platform for tree conservation</span>
                        </div>
                      </div>
                </Row>
                <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">

                </CardHeader>
                <CardBody className="pt-0 pt-md-4">
                  <Row>
                <Col>
                <Link to="/login">
                        <Button color="primary" size="lg" block>Log in</Button>
                        </Link>
                        </Col>

                  </Row>
                  <Row>
                <Col>
                <Button onClick={() => window.open("https://www.nationalgeographic.org/education/resource-library/")} color="primary" size="lg" block>I Want to Learn More!</Button>
                </Col>
                  </Row>
                </CardBody>
              </Card>
            
</Col>
</Row>
<Row md="1">
        <Col>
        <Link onClick={() => window.open(demo)}>
        <img style={{position:"absolute",top:"-20vh"}} src={require("./assets/gif/groot.gif")} alt="loading..." />
        </Link>
        </Col>
        </Row>
      
</Container>

</div>
)
    }
  }
}

export default Index;