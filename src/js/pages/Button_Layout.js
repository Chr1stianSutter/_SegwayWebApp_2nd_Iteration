import React from "react"

import NaviButton from "../components/NaviButton"
import MusicButton from "../components/MusicButton"
import AppButton from "../components/AppButton"
import Button from 'react-bootstrap/lib/Button';

import CircularProgressbar from 'react-circular-progressbar';
import Speedometer from '../components/Speedometer';
const percentage = 66;

 //require ('../../stylesheet/_all.scss');
 const divStyle = {
  boxSizing: 'border-box',
  paddingTop: '20px'
};
const backgroundStyle = {
  height: '800px',
  //border: '2px'
  backgroundColor: 'gray'
};
const tachoStyle = {
   width: '600px',
   height: '600px'

}
const buttonStyle = {
  height: '60px',
  fontSize: '30px',
  fontWeight: 'bold'
}
const verticalGridEmptyLine = {
  height: '50px'
}

 export default class  Layout extends React.Component {
   constructor() {
     super();
   }

   render(){
     return(
  <div class="row">
    <div class="col-md-12" style={backgroundStyle}>
    <div class= "row" style={verticalGridEmptyLine}></div>
      <div class="row">
        <div class="col-sm-2"></div>

          <div class="col-md-8 col-md-offset-2" >
              <div style={tachoStyle}>
                  <Speedometer percentage={percentage} text={`${percentage}%`}></Speedometer>
              </div>

              <div class= "row" style={verticalGridEmptyLine}></div>
          </div>
        <div class="col-sm-2"></div>
      </div>
      <div class="row">
        <div class="col-sm-2"></div>

            <div class="col-sm-2"  style={divStyle}>
               <Button bsStyle="warning" block style={buttonStyle}>NAVI</Button>
            </div>
            <div class="col-sm-1"></div>
            <div class="col-sm-2" style={divStyle}>
               <Button bsStyle="warning" block style={buttonStyle}>MUSIC</Button>
            </div>
            <div class="col-sm-1"></div>
            <div class="col-sm-2" style={divStyle}>
               <Button bsStyle="warning" block style={buttonStyle}>APPS</Button>
            </div>
            <div class="col-sm-2"></div>
        </div>
    </div>
  </div>

     );
   }
 }
