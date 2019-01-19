import React from "react"
import NaviButton from "../components/NaviButton"
import MusicButton from "../components/MusicButton"
import AppButton from "../components/AppButton"
import Button from 'react-bootstrap/lib/Button';

 //require ('../../stylesheet/_all.scss');
 const divStyle = {
  boxSizing: 'border-box',
  paddingTop: '20px'
};
const tachoBoxStyle = {
  height: '700px',
  //border: '2px'
  backgroundColor: 'gray'
};
const buttonStyle = {
  height: '60px',
  fontSize: '30px',
  fontWeight: 'bold'
}

 export default class  Layout extends React.Component {
   constructor() {
     super();
   }
   render(){
     return(

  <div class="row">
    <div class="col-md-12">
      <div class="row">
        <div class="col-sm-2"></div>
          <div class="col-md-8" style={tachoBoxStyle}></div>
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
