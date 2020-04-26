import React, { Component } from "react";
import {isMobile} from "react-device-detect";
import MainGif from "./assets/gif/main.gif"
import "./assets/css/animate.css"
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

import {
  Alert,
  Button,
  CardText,
  Card,
  CardTitle,
  CardBody,
  Row,
  Col,
  Container
} from "reactstrap";

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import WarningIcon from '@material-ui/icons/Warning';
import WhatshotIcon from '@material-ui/icons/Whatshot';

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

var mytree = require("./assets/img/tree-smile.png")
var myfire = require("./assets/gif/fire2.gif")

var firestatus=["success", "warning","danger"]
var mess = ["No fire detected","Fire in a close proximity","Fire detected" ]
var mess2 = ["Everything Cool!", "Notify the authorities as soon as possible", "Notify the authorities immediately"]
var micon = [<CheckCircleIcon style={{textAlign:"" ,fontSize:"500%"}} />,<WarningIcon style={{textAlign:"" ,fontSize:"500%"}} />,<WhatshotIcon style={{textAlign:"" ,fontSize:"500%"}} /> ]
var data = [
  {
    name: 'T1', Humidity: 50, SoilMoisture: 20
  },
  {
    name: 'T2', Humidity: 30, SoilMoisture: 10
  },
  {
    name: 'T3', Humidity: 50, SoilMoisture: 20
  },
  {
    name: 'T4', Humidity: 30, SoilMoisture: 10
  }
];

var data2 = [
  {
    name: 'T1', SoilTemperature: 50, Temperature: 20
  },
  {
    name: 'T2', SoilTemperature: 30, Temperature: 10
  },
  {
    name: 'T3', SoilTemperature: 50, Temperature: 20
  },
  {
    name: 'T4', SoilTemperature: 30, Temperature: 10
  }
];

var reward={
  "0":
  {"prize":"Myprize",
  "Link":"https://www.google.com"
  }
}

var rewards=10000

const demo = "https://www.youtube.com/?gl=ES&hl=es"
const mymarker = { url: require("./assets/markers/tree.svg"), scaledSize: {width: 40, height: 40}};
var MapWrapper;
var statustemp

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function makecode(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loc:{ lat: 23.76, lng: -101.125519 },
      markers:"",
      mymap:"",
      fire:"inline",
      simg:"none",
      mydata1:data,
      mydata2:data2,
      myreward:reward["0"],
      mystatus:"0",
      fire1:firestatus[0],
      fire2:mess[0],
      fire3:mess2[0],
      fire4:micon[0],
      promo: makecode(6)
    };

  }
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/q4eonc12/';

  componentWillMount(){
    MapWrapper = withScriptjs(
      withGoogleMap(props => (
        <GoogleMap
          defaultZoom={10}
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

  refreshData()
  {
    let _this = this  
    var request2 = require('request');
var options2 = {
  'method': 'GET',
  'url': 'https://XXXXXXXXXXXX.execute-api.us-east-1.amazonaws.com/test',
  'headers': {
    'sensor': '1'
  }
};
request2(options2, function (error, response) { 
  if (error) throw new Error(error);
  var myjson = JSON.parse(response.body)
  statustemp = JSON.parse(response.body)[0][5]

  data = [
    {
      name: 'T1', Humidity: myjson[0][3], SoilMoisture: myjson[0][2]
    },
    {
      name: 'T2', Humidity: myjson[1][3], SoilMoisture: myjson[1][2]
    },
    {
      name: 'T3', Humidity: myjson[2][3], SoilMoisture: myjson[2][2]
    },
    {
      name: 'T4', Humidity: myjson[3][3], SoilMoisture: myjson[3][2]
    }
  ];
  
  data2 = [
    {
      name: 'T1', SoilTemperature: myjson[0][0], Temperature: myjson[0][1]
    },
    {
      name: 'T2', SoilTemperature: myjson[1][0], Temperature: myjson[1][1]
    },
    {
      name: 'T3', SoilTemperature: myjson[2][0], Temperature: myjson[2][1]
    },
    {
      name: 'T4', SoilTemperature: myjson[3][0], Temperature: myjson[3][1]
    }
  ];
});
_this.setState({
  mydata1:data,
  mydata2:data2,
  fire1:firestatus[statustemp],
  fire2:mess[statustemp],
  fire3:mess2[statustemp],
  fire4:micon[statustemp]
})



  }

  componentDidMount(){

    let _this = this  
    
    var request1 = require('request');
    var options1 = {
      'method': 'GET',
      'url': 'https://XXXXXXXXXX.execute-api.us-east-1.amazonaws.com/points',
      'headers': {
        'points': '50000'
      }
    };
    request1(options1, function (error, response) { 
      if (error) throw new Error(error);
      _this.setState({
        myreward:JSON.parse(response.body)
     })
    });

    

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

  for(var i=0; i<4;i++)
  {
   treela[i]=getRandomArbitrary(myjson.latitude-0.2,myjson.latitude+0.2)
   treeln[i]=getRandomArbitrary(myjson.longitude-0.2,myjson.longitude+0.2)
  }

  var mark=<>
  <Marker icon={mymarker} position={{ lat: treela[0], lng: treeln[0] }} />
  <Marker icon={mymarker} position={{ lat: treela[1], lng: treeln[1] }} />
  <Marker icon={mymarker} position={{ lat: treela[2], lng: treeln[2] }} />
  <Marker icon={mymarker} position={{ lat: treela[3], lng: treeln[3] }} />
  </>
  var mymaps=<div id="map" className="map" style={{position: "relative", overflow: "hidden" }}>
    <MapWrapper
    googleMapURL="https://maps.googleapis.com/maps/api/js?key=XXXXXXXXXXXXXXXXXXXXXXXXXXXX"
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `100%` }} />}
    mapElement={<div style={{ height: `100%` }} />}/>
    </div>
  _this.setState({
    loc:{ lat: mylat, lng: mylng },
    markers:mark,
    mymap:mymaps
 })
  });

  let counter = setInterval(() => this.refreshData() , 5000)

  }

  render() {

    if (isMobile) 
    {
      return (
        <div style={{padding:"1%", fontSize:"18px",fontFamily: "Zelda",backgroundImage:`url(${MainGif})`}} className="bgd">
    

    <Container fluid={true}>
  <Row md="1"> 
    <Col xs="12">
    <Card style={{fontSize:"20px",fontFamily: "Zelda"}}>
    <CardTitle tag="h4">&nbsp;&nbsp;My trees</CardTitle>
      <CardBody style={{display:this.state.mapview}}>
      {this.state.mymap}
      </CardBody>
    </Card>
    </Col>
    </Row>
    <Row md="1"> 
    <Col xs="12">
    <Card>
      <CardTitle style={{fontFamily: "Zelda"}} tag="h4">&nbsp;&nbsp;Moisture and Humidity [<a style={{fontFamily: "Times"}} >%</a>]</CardTitle>
      <CardBody style={{fontSize:"24px"}} >
      <BarChart
        width={window.innerWidth*.82}
        height={window.innerHeight*.28}
        data={this.state.mydata1}
        margin={{
          top: 0, right: 0, left: 0, bottom: 0,
        }}
        barSize={20}
      >
        <XAxis dataKey="name" scale="point" padding={{ left: 50, right: 50 }} />
        <YAxis /> 
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="Humidity" fill="#8884d8" background={{ fill: '#eee' }} />
        <Bar dataKey="SoilMoisture" fill="#82ca9d" background={{ fill: '#eee' }}/>
      </BarChart>
      </CardBody>
    </Card>
      </Col>
      </Row>

      <Row md="1"> 
    <Col xs="12">
    <Card>
      <CardTitle style={{fontFamily: "Zelda"}} tag="h4">&nbsp;&nbsp;Temperature [°C]</CardTitle>
      <CardBody style={{fontSize:"24px"}} >
      <BarChart
        width={window.innerWidth*.82}
        height={window.innerHeight*.28}
        data={this.state.mydata2}
        margin={{
          top: 0, right: 0, left: 0, bottom: 0,
        }}
        barSize={20}
      >
        <XAxis dataKey="name" scale="point" padding={{ left: 50, right: 50 }} />
        <YAxis /> 
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="SoilTemperature" fill="#8884d8" background={{ fill: '#eee' }} />
        <Bar dataKey="Temperature" fill="#82ca9d" background={{ fill: '#eee' }}/>
      </BarChart>
      </CardBody>
    </Card>
      </Col>
      </Row>

      <Row md="1"> 
    <Col xs="12">
    <Card color={this.state.fire1}>
    <Alert color={this.state.fire1}>
        <h4 className="alert-heading">{this.state.fire2}</h4>
        <p>
        {this.state.fire3}
        </p>
        <hr />
        <p className="mb-0">
          
        {this.state.fire4}
        </p>
      </Alert>
          </Card>
    </Col>
      </Row>

      <Row md="1"> 
    <Col xs="12">
    <Card body inverse color="info">
    <CardTitle tag="h5">Your Reward: <a href={this.state.myreward["Link"]}>{this.state.myreward["prize"]}</a></CardTitle>
        <CardTitle tag="h5">Promo Code: {this.state.promo}</CardTitle>
        <CardText>1000 points for next reward!</CardText>
        <hr />
        <p className="mb-0">
        <Button onClick={()=> window.open("/world")} color="secondary" block>Check My Global Rank</Button>
        </p>
    </Card>
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
    <CardTitle tag="h5">&nbsp;&nbsp;My trees</CardTitle>
      <CardBody style={{display:this.state.mapview}}>
      {this.state.mymap}
      </CardBody>
    </Card>

    </Col>
    <Col xs="6">
    <Row md="2">
    <Col xs="6">
      <Card>
      <CardTitle style={{fontFamily: "Zelda"}} tag="h5">&nbsp;&nbsp;Moisture and Humidity [<a style={{fontFamily: "Times"}} >%</a>]</CardTitle>
      <CardBody style={{fontSize:"18px"}} >
      <BarChart
        width={window.innerWidth*.20}
        height={window.innerHeight*.20}
        data={this.state.mydata1}
        margin={{
          top: 0, right: 0, left: 0, bottom: 0,
        }}
        barSize={20}
      >
        <XAxis dataKey="name" scale="point" padding={{ left: 50, right: 50 }} />
        <YAxis /> 
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="Humidity" fill="#8884d8" background={{ fill: '#eee' }} />
        <Bar dataKey="Soil Moisture" fill="#82ca9d" background={{ fill: '#eee' }}/>
      </BarChart>
      </CardBody>
    </Card>
    </Col>
    <Col xs="6">
    <Card>
      <CardTitle style={{fontFamily: "Zelda"}} tag="h5">&nbsp;&nbsp;Temperature [°C]</CardTitle>
      <CardBody style={{fontSize:"20px"}} >
      <BarChart
        width={window.innerWidth*.20}
        height={window.innerHeight*.20}
        data={this.state.mydata2}
        margin={{
          top: 0, right: 0, left: 0, bottom: 0,
        }}
        barSize={20}
      >
        <XAxis dataKey="name" scale="point" padding={{ left: 50, right: 50 }} />
        <YAxis /> 
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="SoilTemperature" fill="#8884d8" background={{ fill: '#eee' }} />
        <Bar dataKey="Temperature" fill="#82ca9d" background={{ fill: '#eee' }}/>
      </BarChart>
      </CardBody>
    </Card>
    </Col>
    <Col xs="6">
    <Card color={this.state.fire1}>
    <Alert color={this.state.fire1}>
        <h4 className="alert-heading">{this.state.fire2}</h4>
        <p>
        {this.state.fire3}
        </p>
        <hr />
        <p className="mb-0">
          
        {this.state.fire4}
        </p>
      </Alert>
          </Card>
    </Col>
    <Col xs="6">
    <Card body inverse color="info" >
      <CardTitle tag="h5">Your Reward: <a href={this.state.myreward["Link"]}>{this.state.myreward["prize"]}</a></CardTitle>
      <CardTitle tag="h5">Promo Code: {this.state.promo}</CardTitle>
        <CardText>1000 points for next reward!</CardText>
        <hr />
        <p className="mb-0"> 
        <Button className="animated heartBeat infinite slow" onClick={()=> window.open("/world")} color="danger" block>Check My Global Rank</Button>
        </p>
    </Card>
    </Col>
    </Row>
    </Col>
  </Row>
</Container>

</div>
)
    }
  }
}
export default Dashboard;