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
  Container,
Form,
FormGroup,
Label,
  Input
} from "reactstrap";



const demo = "https://www.youtube.com/?gl=ES&hl=es"

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username:"",
      password:""
    };

    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange1(event) {
    this.setState({username: event.target.value});
  }
  handleChange2(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    if(this.state.username=="TreeHack" && this.state.password=="toor")
    {
      window.open("/dashboard","_self")
    }
    else{
      alert('Sorry this is a wrong Username or Password')
    }
    
  }

  render() {

    if (isMobile) 
    {
      return (
        <div style={{fontSize:"24px",fontFamily: "Zelda",backgroundImage:`url(${MainGif})`}} className="bg">
    
    <Container fluid={true}>
    <Row>
    &nbsp;
    </Row>
    <Row>
    &nbsp;
    </Row>
    
    <Row md="3">
    <Col xs="1" />
    <Col xs="auto">
    
    <Card className="card-profile shadow">
    <CardHeader className="text-center">
    Log in with your Credentials
    </CardHeader>
    <CardHeader className="text-center">
    <Form>
    <Row form>
    <Col md={6}>
          <FormGroup>
            <Label for="exampleEmail">Username &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Label>
            <Input type="email" name="email" id="exampleEmail" value={this.state.username} onChange={this.handleChange1} placeholder="YourUser" />
          </FormGroup>
          </Col>
          <Col md={6}>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="examplePassword" className="mr-sm-2" >Password &nbsp;&nbsp; </Label>
            <Input type="password" name="password" id="examplePassword" value={this.state.password} onChange={this.handleChange2} placeholder="YourPassword" />
          </FormGroup>
          </Col>
          <Button onClick={() => this.handleSubmit()} color="primary" size="lg" block>Log in</Button>
    </Row>
        </Form>
    </CardHeader>
    <CardBody className="pt-0 pt-md-4">
    <Row>
                    <Col>
                    </Col>
                      </Row>
    </CardBody>
    </Card>
    
    
    </Col>
    </Row>
    <Row md="1">
        <Col>
        <Link onClick={() => window.open(demo)}>
        <img style={{position:"relative",top:"20%",left:"12%"}} src={require("./assets/gif/groot.gif")} alt="loading..." />
        </Link>
        </Col>
        </Row>
        </Container>
    
    </div>
    )
    }

  else{
  
  return (
    <div style={{fontSize:"24px",fontFamily: "Zelda",backgroundImage:`url(${MainGif})`}} className="bg">

<Container fluid={true}>
<Row>
&nbsp;
</Row>
<Row>
&nbsp;
</Row>

<Row md="3">
<Col xs="3" />
<Col xs="8">

<Card className="card-profile shadow">
<CardHeader className="text-center">
Log in with your Credentials
</CardHeader>
<CardHeader className="text-center">
<Form>
<Row form>
<Col md={6}>
      <FormGroup>
        <Label for="exampleEmail">Username &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Label>
        <Input type="email" name="email" id="exampleEmail" value={this.state.username} onChange={this.handleChange1} placeholder="YourUser" />
      </FormGroup>
      </Col>
      <Col md={6}>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="examplePassword" className="mr-sm-2" >Password &nbsp;&nbsp; </Label>
        <Input type="password" name="password" id="examplePassword" value={this.state.password} onChange={this.handleChange2} placeholder="YourPassword" />
      </FormGroup>
      </Col>
      <Button onClick={() => this.handleSubmit()} color="primary" size="lg" block>Log in</Button>
</Row>
    </Form>
</CardHeader>
<CardBody className="pt-0 pt-md-4">
<Row>
                <Col>
                </Col>
                  </Row>
</CardBody>
</Card>


</Col>
</Row>
<Row md="1">
        <Col>
        <Link onClick={() => window.open(demo)}>
        <img style={{position:"absolute",top:"20vh"}} src={require("./assets/gif/groot.gif")} alt="loading..." />
        </Link>
        </Col>
        </Row>
      
</Container>

</div>
)
    }
  }
}

export default Login;