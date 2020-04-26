import React, { Component } from "react";
import {isMobile} from "react-device-detect";
import MainGif from "./assets/gif/main.gif"


import {
  Button,
  CardText,
  Card,
  CardTitle,
  Table,
  CardBody,
  Row,
  Col,
  Container,
  UncontrolledPopover, 
  PopoverHeader, 
  PopoverBody } 
from "reactstrap";


import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

var mytree = require("./assets/img/tree-smile.png")
var myfire = require("./assets/gif/fire2.gif")

var jsontable={
  0:[1,"MrTree","US",450000],
  1:[2,"TreeMan","MX",84000],
  2:[3,"NatureMax","RA",70300],
  3:[4,"Alex1234","BR",50200],
  4:[5,"Vegetta777","ES",36000],
}

const demo = "https://www.youtube.com/?gl=ES&hl=es"
const mymarker = { url: require("./assets/markers/tree.svg"), scaledSize: {width: 40, height: 40}};
var MapWrapper;
var flag=1;

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

class World extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loc:{ lat: 23.76, lng: -101.125519 },
      markers:"",
      mymap:"",
      fire:"inline",
      simg:"none",
      table:jsontable,
      score:30000,
      rank:6,
      country:"MX"
    };

  }
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/q4eonc12/';

  componentWillMount(){

    MapWrapper = withScriptjs(
      withGoogleMap(props => (
        <GoogleMap
          defaultZoom={3}
          defaultCenter={this.state.loc}
          defaultOptions={{
            scrollwheel: false,
            styles: [
              {
                featureType: "water",
                elementType: "geometry",
                stylers: [{ color: "#e9e9e9" }, { lightness: 17 }]
              },
              {
                featureType: "landscape",
                elementType: "geometry",
                stylers: [{ color: "#f5f5f5" }, { lightness: 20 }]
              },
              {
                featureType: "road.highway",
                elementType: "geometry.fill",
                stylers: [{ color: "#ffffff" }, { lightness: 17 }]
              },
              {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [{ color: "#ffffff" }, { lightness: 29 }, { weight: 0.2 }]
              },
              {
                featureType: "road.arterial",
                elementType: "geometry",
                stylers: [{ color: "#ffffff" }, { lightness: 18 }]
              },
              {
                featureType: "road.local",
                elementType: "geometry",
                stylers: [{ color: "#ffffff" }, { lightness: 16 }]
              },
              {
                featureType: "poi",
                elementType: "geometry",
                stylers: [{ color: "#f5f5f5" }, { lightness: 21 }]
              },
              {
                featureType: "poi.park",
                elementType: "geometry",
                stylers: [{ color: "#dedede" }, { lightness: 21 }]
              },
              {
                elementType: "labels.text.stroke",
                stylers: [
                  { visibility: "on" },
                  { color: "#ffffff" },
                  { lightness: 16 }
                ]
              },
              {
                elementType: "labels.text.fill",
                stylers: [
                  { saturation: 36 },
                  { color: "#333333" },
                  { lightness: 40 }
                ]
              },
              { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
              {
                featureType: "transit",
                elementType: "geometry",
                stylers: [{ color: "#f2f2f2" }, { lightness: 19 }]
              },
              {
                featureType: "administrative",
                elementType: "geometry.fill",
                stylers: [{ color: "#fefefe" }, { lightness: 20 }]
              },
              {
                featureType: "administrative",
                elementType: "geometry.stroke",
                stylers: [{ color: "#fefefe" }, { lightness: 17 }, { weight: 1.2 }]
              }
            ]
          }}
        >
          {
            this.state.markers
          }
        </GoogleMap>
      ))
    );
  }

  componentDidMount(){
    let _this = this    
var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://ipapi.co/json',
  'headers': {
    'Cookie': '__cfduid=da90de7b82330c4a3fc1997eef510f5221587825334'
  }
};
request(options, function (error, response) { 
  if (error) throw new Error(error);
  var myjson = JSON.parse(response.body)
  console.log(myjson);
  const mylat= myjson.latitude
  const mylng=myjson.longitude
  var treela= []
  var treeln= []
  var seed1;
  var seed2;
  var si=9;
  const mytempcountry = myjson.country
  for(var i=0; i<48;i++)
  {
  if(i<8)
  {
    seed1=58.34
    seed2=92.34
    treela[i]=getRandomArbitrary(seed1-si-5,seed1+si+6)
    treeln[i]=getRandomArbitrary(seed2-si-5,seed2+si+6)
  }
  else if(i<16)
  {
    seed1=21.35
    seed2=9.89
    treela[i]=getRandomArbitrary(seed1-si,seed1+si)
    treeln[i]=getRandomArbitrary(seed2-si,seed2+si)
  }
  else if(i<24)
  {
    seed1=55
    seed2=-109
    treela[i]=getRandomArbitrary(seed1-si,seed1+si)
    treeln[i]=getRandomArbitrary(seed2-si,seed2+si)
  }
  else if(i<32)
  {
    seed1=41
    seed2=-100
    treela[i]=getRandomArbitrary(seed1-si,seed1+si)
    treeln[i]=getRandomArbitrary(seed2-si,seed2+si)
  }
  else if(i<40)
  {
    seed1=24
    seed2=-101
    treela[i]=getRandomArbitrary(seed1-si+5,seed1+si-5)
    treeln[i]=getRandomArbitrary(seed2-si+5,seed2+si-6)
  }
  else if(i<48)
  {
    seed1=-11
    seed2=-56
    treela[i]=getRandomArbitrary(seed1-si+3,seed1+si-3)
    treeln[i]=getRandomArbitrary(seed2-si+3,seed2+si-3)
  }

  }

  var mark=<>
  <Marker icon={mymarker} position={{ lat: treela[0], lng: treeln[0] }} />
  <Marker icon={mymarker} position={{ lat: treela[1], lng: treeln[1] }} />
  <Marker icon={mymarker} position={{ lat: treela[2], lng: treeln[2] }} />
  <Marker icon={mymarker} position={{ lat: treela[3], lng: treeln[3] }} />
  <Marker icon={mymarker} position={{ lat: treela[4], lng: treeln[4] }} />
  <Marker icon={mymarker} position={{ lat: treela[5], lng: treeln[5] }} />
  <Marker icon={mymarker} position={{ lat: treela[6], lng: treeln[6] }} />
  <Marker icon={mymarker} position={{ lat: treela[7], lng: treeln[7] }} />
  <Marker icon={mymarker} position={{ lat: treela[8], lng: treeln[8] }} />
  <Marker icon={mymarker} position={{ lat: treela[9], lng: treeln[9] }} />
  <Marker icon={mymarker} position={{ lat: treela[10], lng: treeln[10] }} />
  <Marker icon={mymarker} position={{ lat: treela[11], lng: treeln[11] }} />
  <Marker icon={mymarker} position={{ lat: treela[12], lng: treeln[12] }} />
  <Marker icon={mymarker} position={{ lat: treela[13], lng: treeln[13] }} />
  <Marker icon={mymarker} position={{ lat: treela[14], lng: treeln[14] }} />
  <Marker icon={mymarker} position={{ lat: treela[15], lng: treeln[15] }} />
  <Marker icon={mymarker} position={{ lat: treela[16], lng: treeln[16] }} />
  <Marker icon={mymarker} position={{ lat: treela[17], lng: treeln[17] }} />
  <Marker icon={mymarker} position={{ lat: treela[18], lng: treeln[18] }} />
  <Marker icon={mymarker} position={{ lat: treela[19], lng: treeln[19] }} />
  <Marker icon={mymarker} position={{ lat: treela[20], lng: treeln[20] }} />
  <Marker icon={mymarker} position={{ lat: treela[21], lng: treeln[21] }} />
  <Marker icon={mymarker} position={{ lat: treela[22], lng: treeln[22] }} />
  <Marker icon={mymarker} position={{ lat: treela[23], lng: treeln[23] }} />
  <Marker icon={mymarker} position={{ lat: treela[24], lng: treeln[24] }} />
  <Marker icon={mymarker} position={{ lat: treela[25], lng: treeln[25] }} />
  <Marker icon={mymarker} position={{ lat: treela[26], lng: treeln[26] }} />
  <Marker icon={mymarker} position={{ lat: treela[27], lng: treeln[27] }} />
  <Marker icon={mymarker} position={{ lat: treela[28], lng: treeln[28] }} />
  <Marker icon={mymarker} position={{ lat: treela[29], lng: treeln[29] }} />
  <Marker icon={mymarker} position={{ lat: treela[30], lng: treeln[30] }} />
  <Marker icon={mymarker} position={{ lat: treela[31], lng: treeln[31] }} />
  <Marker icon={mymarker} position={{ lat: treela[32], lng: treeln[32] }} />
  <Marker icon={mymarker} position={{ lat: treela[33], lng: treeln[33] }} />
  <Marker icon={mymarker} position={{ lat: treela[34], lng: treeln[34] }} />
  <Marker icon={mymarker} position={{ lat: treela[35], lng: treeln[35] }} />
  <Marker icon={mymarker} position={{ lat: treela[36], lng: treeln[36] }} />
  <Marker icon={mymarker} position={{ lat: treela[37], lng: treeln[37] }} />
  <Marker icon={mymarker} position={{ lat: treela[38], lng: treeln[38] }} />
  <Marker icon={mymarker} position={{ lat: treela[39], lng: treeln[39] }} />
  <Marker icon={mymarker} position={{ lat: treela[40], lng: treeln[40] }} />
  <Marker icon={mymarker} position={{ lat: treela[41], lng: treeln[41] }} />
  <Marker icon={mymarker} position={{ lat: treela[42], lng: treeln[42] }} />
  <Marker icon={mymarker} position={{ lat: treela[43], lng: treeln[43] }} />
  <Marker icon={mymarker} position={{ lat: treela[44], lng: treeln[44] }} />
  <Marker icon={mymarker} position={{ lat: treela[45], lng: treeln[45] }} />
  <Marker icon={mymarker} position={{ lat: treela[46], lng: treeln[46] }} />
  <Marker icon={mymarker} position={{ lat: treela[47], lng: treeln[47] }} />
  </>
  var mymaps=<div id="map" className="map" style={{position: "relative", overflow: "hidden" }}>
    <MapWrapper
    googleMapURL="https://maps.googleapis.com/maps/api/js?key=XxXXXXXXXXXXXXXXXXXXXXX"
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `100%` }} />}
    mapElement={<div style={{ height: `100%` }} />}/>
    </div>
  _this.setState({
    loc:{ lat: mylat, lng: mylng },
    markers:mark,
    mymap:mymaps,
    country:mytempcountry
 })
  });
console.log(this.context.myglobal)
  }

  donate(){
if(flag)
{
  window.open("https://www.nationalgeographic.org/give/", "_blank")
  flag=0
}
 const temp=this.state.score+5000
 var temprank = this.state.rank 
if(temp>450000)
{
  temprank=1
  jsontable={
    0:[1,"TreeHack",this.state.country,temp],
    1:[2,"MrTree","US",450000],
    2:[3,"TreeMan","MX",84000],
    3:[4,"NatureMax","RA",70300],
    4:[5,"Alex1234","BR",50200],

  }
}
else if(temp>84000)
{
  temprank=2
  jsontable={
    0:[1,"MrTree","US",450000],
    1:[2,"TreeHack",this.state.country,temp],
    2:[3,"TreeMan","MX",84000],
    3:[4,"NatureMax","RA",70300],
    4:[5,"Alex1234","BR",50200],

  }
}
else if(temp>70300)
{
  temprank=3
  jsontable={
    0:[1,"MrTree","US",450000],
    1:[2,"TreeMan","MX",84000],
    2:[3,"TreeHack",this.state.country,temp],
    3:[4,"NatureMax","RA",70300],
    4:[5,"Alex1234","BR",50200],

  }
}
else if(temp>50200)
{
  temprank=4
  jsontable={
    0:[1,"MrTree","US",450000],
    1:[2,"TreeMan","MX",84000],
    2:[3,"NatureMax","RA",70300],
    3:[4,"TreeHack",this.state.country,temp],
    4:[5,"Alex1234","BR",50200],

  }
}
else if(temp>36000)
{
  temprank=5
  jsontable={
    0:[1,"MrTree","US",450000],
    1:[2,"TreeMan","MX",84000],
    2:[3,"NatureMax","RA",70300],
    3:[4,"Alex1234","BR",50200],
    4:[5,"TreeHack",this.state.country,temp],
  }
}

this.setState({
  score:temp, 
  table:jsontable,
  rank:temprank
})

  }

  render() {

    if (isMobile) 
    {
      return (
        <div style={{padding:"1%", fontSize:"18px",fontFamily: "Zelda",backgroundImage:`url(${MainGif})`}} className="bgd">
    

    <Container fluid={true}>
    <Row md="1"> 
    <Col xs="12">
    <Card style={{fontSize:"18px",fontFamily: "Zelda"}}>
    <CardTitle tag="h5">&nbsp;&nbsp;Worldwide Trees</CardTitle>
      <CardBody style={{display:this.state.mapview}}>
      {this.state.mymap}
      </CardBody>
    </Card>

    </Col>
    </Row>
    <Row md="1"> 
    <Col xs="12">
    <Card body inverse color="success">
        <CardTitle tag="h3">Your Rank: TreeHack</CardTitle>
  <CardText tag="h5"> #{this.state.rank} : {this.state.score}</CardText>
      </Card>
      
    </Col>
    </Row>
    <Row md="1"> 
    <Col xs="12">
    <Card body inverse color="warning">
        <CardTitle tag="h3">Your Trees</CardTitle>
        <CardText>4 Trees</CardText>
      </Card>

    </Col>
    </Row>
    <Row md="1"> 
    <Col xs="12">
    <Card body inverse color="danger">
        <CardTitle tag="h3">Total Worldwide Trees</CardTitle>
        <CardText>48 Trees</CardText>
      </Card>

    </Col>
    </Row>
    <Row md="1"> 
    <Col xs="12">
    <Card body inverse color="info">
        <CardTitle tag="h5">Top 5 Tree Force Users</CardTitle>
        <CardBody>
          <Table hover>
            <thead>
              <tr>
                <th>#</th>
                <th>User</th>
                <th>Country</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">{this.state.table[0][0]}</th>
                <td>{this.state.table[0][1]}</td>
                <td>{this.state.table[0][2]}</td>
                <td>{this.state.table[0][3]}</td>
              </tr>
              <tr>
                <th scope="row">{this.state.table[1][0]}</th>
                <td>{this.state.table[1][1]}</td>
                <td>{this.state.table[1][2]}</td>
                <td>{this.state.table[1][3]}</td>
              </tr>
              <tr>
              <th scope="row">{this.state.table[2][0]}</th>
                <td>{this.state.table[2][1]}</td>
                <td>{this.state.table[2][2]}</td>
                <td>{this.state.table[2][3]}</td>
              </tr>
              <tr>
              <th scope="row">{this.state.table[3][0]}</th>
                <td>{this.state.table[3][1]}</td>
                <td>{this.state.table[3][2]}</td>
                <td>{this.state.table[3][3]}</td>
              </tr>
              <tr>
              <th scope="row">{this.state.table[4][0]}</th>
                <td>{this.state.table[4][1]}</td>
                <td>{this.state.table[4][2]}</td>
                <td>{this.state.table[4][3]}</td>
              </tr>
            </tbody>
      </Table>
        </CardBody>
      </Card>
    
    </Col>
    </Row>
    <Row md="1"> 
    <Col xs="12">
    <Card body color="light">
        <CardTitle tag="h5">Improve your score by:</CardTitle>
      </Card>
    
    </Col>
    </Row>
    <Row md="1"> 
    <Col xs="12" tag="h5">
    <Button id="PopoverClick" color="primary" type="button" block>
        Donating
      </Button>
      {' '}
      <UncontrolledPopover trigger="click" placement="bottom" target="PopoverClick">
        <PopoverHeader>    
          <Button color="primary" type="button" onClick={()=> this.donate()} block>
        Open NatGeo Page
      </Button>
      </PopoverHeader>
        <PopoverBody>Donate to the most important institutions helping trees!</PopoverBody>
      </UncontrolledPopover>
    </Col>
    <Col xs="12" tag="h5">
    <Button id="PopoverClick2" color="primary" type="button" block>
        Help the trees
      </Button>
      {' '}
      <UncontrolledPopover trigger="click" placement="bottom" target="PopoverClick2">
        <PopoverHeader>    
          <Button color="primary" type="button" onClick={()=> window.open("https://www.instagram.com/treeforce2020/", "_blank")} block>
        Open IG
      </Button>
      </PopoverHeader>
        <PopoverBody>Send us evidence (pictures,video) of you helping the tree to our IG</PopoverBody>
      </UncontrolledPopover>
    </Col>
    <Col xs="12" tag="h5">
    <Button id="PopoverClick3" color="primary" type="button" block>
        Adopt more trees
      </Button>
      {' '}
      <UncontrolledPopover trigger="click" placement="bottom" target="PopoverClick3">
        <PopoverHeader>    
          <Button color="primary" type="button" onClick={()=> window.open("mailto:treeforcehack@gmail.com?subject=My Subject: &body=My Message: ", "_blank")} block>
        Open Email
      </Button>
      </PopoverHeader>
        <PopoverBody>Buy more devices by contacting us by email</PopoverBody>
      </UncontrolledPopover>
    </Col>
    </Row>
</Container>
</div>
    )
    }

  else{
  
  return (
    <div style={{padding:"2%", fontSize:"16px",backgroundImage:`url(${MainGif})`}} className="bg">

<Container fluid={true}>
  <Row md="2">
    <Col xs="6">
    <Card style={{fontSize:"18px",fontFamily: "Zelda"}}>
    <CardTitle tag="h5">&nbsp;&nbsp;Worldwide Trees</CardTitle>
      <CardBody style={{display:this.state.mapview}}>
      {this.state.mymap}
      </CardBody>
    </Card>

    </Col>
    <Col xs="6">
    <Row md="2">
    <Col xs="6">
      <Row md="1">
      <Col xs="12">
      <Card body inverse color="success" tag="h5">
        <CardTitle>Your Rank: TreeHack</CardTitle>
  <CardText> #{this.state.rank} : {this.state.score}</CardText>
      </Card>
      </Col>
      <Col xs="12">
      <Card body inverse color="warning" tag="h5">
        <CardTitle>Your Trees</CardTitle>
        <CardText>4 Trees</CardText>
      </Card>
</Col>
<Col xs="12">
<Card body inverse color="danger" tag="h5">
        <CardTitle>Total Worldwide Trees</CardTitle>
        <CardText>48 Trees</CardText>
      </Card>
</Col>
      </Row>
   
    </Col>

    <Col xs="6">
    <Card body inverse color="info">
        <CardTitle tag="h5">Top 5 Tree Force Users</CardTitle>
        <CardBody>
          <Table hover>
            <thead>
              <tr>
                <th>#</th>
                <th>User</th>
                <th>Country</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">{this.state.table[0][0]}</th>
                <td>{this.state.table[0][1]}</td>
                <td>{this.state.table[0][2]}</td>
                <td>{this.state.table[0][3]}</td>
              </tr>
              <tr>
                <th scope="row">{this.state.table[1][0]}</th>
                <td>{this.state.table[1][1]}</td>
                <td>{this.state.table[1][2]}</td>
                <td>{this.state.table[1][3]}</td>
              </tr>
              <tr>
              <th scope="row">{this.state.table[2][0]}</th>
                <td>{this.state.table[2][1]}</td>
                <td>{this.state.table[2][2]}</td>
                <td>{this.state.table[2][3]}</td>
              </tr>
              <tr>
              <th scope="row">{this.state.table[3][0]}</th>
                <td>{this.state.table[3][1]}</td>
                <td>{this.state.table[3][2]}</td>
                <td>{this.state.table[3][3]}</td>
              </tr>
              <tr>
              <th scope="row">{this.state.table[4][0]}</th>
                <td>{this.state.table[4][1]}</td>
                <td>{this.state.table[4][2]}</td>
                <td>{this.state.table[4][3]}</td>
              </tr>
            </tbody>
      </Table>
        </CardBody>
      </Card>
    </Col>
    </Row>
    <Row md="1">
    <Col xs="12">
    <Card body color="light">
        <CardTitle tag="h5">Improve your score by:</CardTitle>
      </Card>
    </Col>
    <Row style={{paddingLeft:"30px"}} md="3">
    <Col xs="4" tag="h5">
    <Button id="PopoverClick" color="primary" type="button" block>
        Donating
      </Button>
      {' '}
      <UncontrolledPopover trigger="click" placement="bottom" target="PopoverClick">
        <PopoverHeader>    
          <Button color="primary" type="button" onClick={()=> this.donate()} block>
        Open NatGeo Page
      </Button>
      </PopoverHeader>
        <PopoverBody>Donate to the most important institutions helping trees!</PopoverBody>
      </UncontrolledPopover>
    </Col>
    <Col xs="4" tag="h5">
    <Button id="PopoverClick2" color="primary" type="button" block>
        Help the trees
      </Button>
      {' '}
      <UncontrolledPopover trigger="click" placement="bottom" target="PopoverClick2">
        <PopoverHeader>    
          <Button color="primary" type="button" onClick={()=> window.open("https://www.instagram.com/treeforce2020/", "_blank")} block>
        Open IG
      </Button>
      </PopoverHeader>
        <PopoverBody>Send us evidence (pictures,video) of you helping the tree to our IG</PopoverBody>
      </UncontrolledPopover>
    </Col>
    <Col xs="4" tag="h5">
    <Button id="PopoverClick3" color="primary" type="button" block>
        Adopt more trees
      </Button>
      {' '}
      <UncontrolledPopover trigger="click" placement="bottom" target="PopoverClick3">
        <PopoverHeader>    
          <Button color="primary" type="button" onClick={()=> window.open("mailto:treeforcehack@gmail.com?subject=My Subject: &body=My Message: ", "_blank")} block>
        Open Email
      </Button>
      </PopoverHeader>
        <PopoverBody>Buy more devices by contacting us by email</PopoverBody>
      </UncontrolledPopover>
    </Col>
    </Row>
    </Row>
    </Col>
  </Row>
</Container>

</div>
)
    }
  }
}
export default World;