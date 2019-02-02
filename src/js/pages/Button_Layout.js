import React from "react"

import NaviButton from "../components/NaviButton"
import MusicButton from "../components/MusicButton"
import AppButton from "../components/AppButton"
import Button from 'react-bootstrap/lib/Button';

import CircularProgressbar from 'react-circular-progressbar';
import Speedometer from '../components/Speedometer';
const percentage = 70;

 //require ('../../stylesheet/_all.scss');
 const divStyle = {
  boxSizing: 'border-box',
  paddingTop: '20px'
};
const backgroundStyle = {
  height: '550px',
  width:'1040px',
  //border: '2px'
  backgroundColor: 'gray'
};
const tachoStyle = {
   width: '300px',
   height: '300px',
   //backgroundColor: 'yellow',
   margin: 'auto'
}
const gridStyle ={
  backgroundColor: 'red'
}
const buttonStyle = {
  height: '60px',
  fontSize: '30px',
  fontWeight: 'bold'
}
const verticalGridEmptyLine = {
  height: '20px'
}
const containerStyle = {
  //backgroundColor: 'blue'
}
const colSides ={
  backgroundColor: 'red'
}
const vertSpacer ={
  height: '25px'
}



 export default class  Layout extends React.Component {
   constructor() {
     super();
   }

   render(){
     return(
  <div class="row">

    <div class="col-sm-12">

      <div class="col-sm-12" style={backgroundStyle}>

      <div class="container" style ={containerStyle}>
        <div class="row justify-content-center">
        <div class="row" style={vertSpacer}></div>
        <div class="row" style={vertSpacer}></div>
        <div class="row" style={vertSpacer}></div>

          <div class="col">
            <div style={tachoStyle}>
              <Speedometer percentage={percentage} text={`${percentage}%`}></Speedometer>
            </div>
          </div>
              <div class="row" style={vertSpacer}></div>
              <div class="row" style={vertSpacer}></div>
              <div class="row" style={vertSpacer}></div>
        </div>
      </div>


      <div class="px-5">


            <div class="col-sm-3"  style={divStyle}>
               <Button bsStyle="warning" block style={buttonStyle}>NAVI</Button>
            </div>

            <div class="col-sm-3" style={divStyle}>
               <Button bsStyle="warning" block style={buttonStyle}>MUSIC</Button>
            </div>

            <div class="col-sm-3" style={divStyle}>
               <Button bsStyle="warning" block style={buttonStyle}>APPS</Button>
            </div>

            <div class="col-sm-3" style={divStyle}>
              <Button bsStyle="warning" block style={buttonStyle}>SETTINGS</Button>
            </div>


        </div>

        </div>

    </div>

  </div>

     );
   }
 }
