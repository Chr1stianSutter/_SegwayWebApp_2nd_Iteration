import React from 'react';
import { Slider, Direction, Button, PlayerIcon, } from 'react-player-controls'

import "./style.scss"

export default class ProgressBarSlider extends React.Component {
  constructor(props){
    super(props)
    //this.setState=this.setState.bind(this)
    //this.state = {open : false}

    this.state = {
      sliderValue: 0
      /*
        isEnabled:'',
        direction:'',
        value:'',
        lastValueStart:'',
        lastValueEnd:'',
        lastIntent:'',
        lastValueStart:'',
        lastIntentEndCount:''
        */
    };
  }

  render(){
    let right = 100 - this.state.sliderValue
    let progressProgress = {
      right: right + "%"
    }
    return(
      <div>
        <div className="progressBackground">
        </div>
        <div className="progressProgress" style={progressProgress}>
        </div>
        <input className="progressBarSliderStyle" onChange={(e) => {this.setState({sliderValue: e.target.value})}}
          type="range"
          min="0"                    // default 0
          max="100"                  // default 100
          value={this.state.sliderValue}                 // default min + (max-min)/2
        ></input>
      </div>
    )
  };
}
