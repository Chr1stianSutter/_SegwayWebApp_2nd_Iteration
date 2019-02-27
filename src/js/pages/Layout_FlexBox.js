import React from "react"

import NaviButton from "../components/NaviButton"
import MusicButton from "../components/MusicButton"
import AppButton from "../components/AppButton"
import SettingsButton from "../components/SettingsButton"

import Button from 'react-bootstrap/lib/Button';
import { Grid, Row, Col } from 'react-flexbox-grid';


import CircularProgressbar from 'react-circular-progressbar';
import Speedometer from '../components/Speedometer';
import BatteryBar from '../components/BatteryBar';

import {decorate, observable} from "mobx";
import {observer} from "mobx-react";

const percentage = 80;

const divStyle = {
 boxSizing: 'border-box',
 height: '40px',
 width: '200px',
 fontSize: '24px',
 margin:'auto',
 fontWeight: 'bold',
 zIndex:  '15',
 border: '1px solid red'
 //paddingTop: '20px'
};

const boxBorderRed ={
 border: '1px solid red'
};

const backgroundStyle = {
 height: '550px',
 width:'1040px',
 //border: '2px'
 position: 'relative',

 backgroundColor: 'gray'
};
const tachoStyle = {
 position: 'absolute',
 //float: 'bottom',
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
 margin:  '20px',
 fontWeight: 'bold',
 zIndex:  '15'
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

in render:
<p style = {textTestMarginLeftStyleREMOVE}>"______________" { `${ this.state.top }%` }</p>

*/

export default class  Layout extends React.Component {
  constructor() {
    super();
    this.state = {top:'40px'};
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
        width: '1040',
        positionAnchor:'0% 100%',
        //positionAnchor:'100% 0%',
        position:'absolute',
        zIndex:'15',
        border: '1px solid red'
      }

   };
   const { absoluteStyle } = styles;

    return(

      <div class="row" >

        <div class="col-sm-12" style ={staticStyle}>

        <Row top="xs" style={absoluteStyle}>

          <Col style={divStyle}>
              <NaviButton bsStyle="warning" block style={buttonStyle}>NAVI</NaviButton>
          </Col>

          <Col style={divStyle}>
            <MusicButton bsStyle="warning" block style={buttonStyle}>MUSIC</MusicButton>
          </Col>

          <Col style={divStyle}>
            <AppButton bsStyle="warning" block style={buttonStyle}>APPS</AppButton>
          </Col>

          <Col style={divStyle}>
            <SettingsButton bsStyle="warning" block style={buttonStyle}>SETTINGS</SettingsButton>
          </Col>
        </Row>


          <div class="col-sm-12" style={backgroundStyle}>
            <div class="row" style={vertSpacer}></div>
              <div class="row" style={vertSpacer}></div>
                <div class="row" style={vertSpacer}></div>
                  <div class="row" style={vertSpacer}></div>
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

          /*
          <div class="player">
              <canvas></canvas>
              <div class="song">
                <div class="artist">Kavinsky</div>
                <div class="name">Odd Look ft. The Weeknd</div>
              </div>
              <div class="playarea">
                <div class="prevSong"></div>
                <div class="play"></div>
                <div class="pause"></div>
                <div class="nextSong"></div>
              </div>
              <div class="soundControl"></div>
              <div class="time">00:00</div>
          </div>
          */

          </div>
  </div>

    );
  }
}
