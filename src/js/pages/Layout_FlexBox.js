import React from "react"
import NaviButton from "../components/NaviButton"
import MusicButton from "../components/MusicButton"
import AppButton from "../components/AppButton"
import Header from "../components/NaviButton"
import Button from 'react-bootstrap/lib/Button';
import { Grid, Row, Col } from 'react-flexbox-grid';


import CircularProgressbar from 'react-circular-progressbar';
import Speedometer from '../components/Speedometer';
import BatteryBar from '../components/BatteryBar';

const percentage = 80;

const divStyle = {
 boxSizing: 'border-box',
 //paddingTop: '20px'
};

const boxBorderRed ={
 border: '1px solid red'
};

const backgroundStyle = {
 height: '550px',
 width:'1040px',
 //border: '2px'
 backgroundColor: 'gray'
};
const tachoStyle = {
 position: 'absolute',
  width: '300px',
  height: '300px',
  //width: '100%',
  //height: '100%',
  //backgroundColor: 'yellow',
  margin: 'auto',
  top:'40',
  left:'40',
  zIndex:  '10'
};
const batteryStyle = {
  width: '380px',
  height: '380px',
  //backgroundColor: 'yellow',
  margin: 'auto'
};
const tachoContainerSyle = {
 position: 'relative',
 width:'380px',
 height:'380px',
 margin:'auto'

};
const gridStyle ={
 backgroundColor: 'red'
};
const buttonStyle = {
 height: '40px',
 width: '200px',
 fontSize: '24px',
 margin:'20px',
 fontWeight: 'bold'
};
const verticalGridEmptyLine = {
 height: '20px'
};
const containerStyle = {
 //backgroundColor: 'blue'
};
const colSides ={
 backgroundColor: 'red'
};
const vertSpacer ={
 height: '25px'
};
const staticStyle ={
  position:'static'

};

const textTestMarginLeftStyleREMOVE ={
  left: 'auto'
}

/*
function RowMenuPositionStyle(props) {
  return
  <Row bottom="xs" {props.style}>;
}
*/


export default class  Layout extends React.Component {
  constructor() {
    super();
    this.state = {top:'420px'};
    }

    setTopDistance(newTopDistance) {

    this.setState({ top: newTopDistance });
  }

  render(){
    const styles = {
      absoluteStyle: {
        //top:'420',

        top: this.state.top,
        left:'auto',
        positionAnchor:'0% 100%',
        position:'absolute',
        zIndex:'1'
      }

   };
   const { absoluteStyle } = styles;

    return(

      <div class="row" >
      <p style = {textTestMarginLeftStyleREMOVE}>
        "______________" { `${ this.state.top }%` }
      </p>

        <div class="col-sm-12" style ={staticStyle}>

          <div class="col-sm-12" style={backgroundStyle}>
            <div class="row" style={vertSpacer}></div>
          <div class="container" style ={containerStyle} style={boxBorderRed}>
            <div class="row justify-content-center">

            <div class="row" style={vertSpacer}></div>

              <div class="col" style={tachoContainerSyle} >
                <div style={batteryStyle}>
                  <BatteryBar percentage={percentage} text={`${percentage}%`} />
                </div>
                <div style={tachoStyle}>
                  <Speedometer percentage={percentage} text={`${percentage}%`}></Speedometer>
                </div>
              </div>

                  <div class="row" style={vertSpacer}></div>
            </div>
          </div>
          </div>

          </div>


  <Row bottom="xs" style={absoluteStyle}>

    <Col class="col-sm-3"style={divStyle}>
      <Header
       title="NAVI"
       bsStyle="warning" block style={buttonStyle}
      />
    </Col>

    <Col class="col-sm-3"style={divStyle}>
      <Button bsStyle="warning" block style={buttonStyle}>MUSIC</Button>
    </Col>

    <Col class="col-sm-3"style={divStyle}>
      <Button bsStyle="warning" block style={buttonStyle}>APPS</Button>
    </Col>

    <Col class="col-sm-3"style={divStyle}>
      <Button bsStyle="warning" block style={buttonStyle}>SETTINGS</Button>
    </Col>
  </Row>



  </div>

    );
  }
}
