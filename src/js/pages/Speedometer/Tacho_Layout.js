import React from "react";

import CircularProgressbar from 'react-circular-progressbar';
import Speedometer from '../../components/Speedometer';
//import BatteryBar from '../../components/BatteryBar';
import NewBatteryBar from '../../components/NewBatteryBar';

import Equalizer from '../../components/Equalizer';

//import MusicButton from "../../components/MusicButton";
import AudioControlWrapper from "../../components/AudioControlWrapper";
import ReactDOM from 'react-dom';

import { Slider, Direction, Button, PlayerIcon, } from 'react-player-controls'

const speed = 17;
const percentageBattery = 100;

import "./style.scss"

export default class TachoLayout extends React.Component {
  constructor(props) {
    super(props);
    this.setState = ({open : false});
  }
  render() {

    const SliderBar = ({ direction, value, style }) => <div style={computedStylesHere} />
    const SliderHandle = ({ direction, value, style }) => <div style={computedStylesHere} />


    return (
      <div>
        <div className="visualizerStyle">
          <Equalizer size="1200px" />
        </div>

        <div className="tachoStyle">
          <Speedometer speed={speed}></Speedometer>
        </div>

        <div className="batteryStyle">
          <NewBatteryBar percentage={percentageBattery} />
        </div>

        <div>
          {/*<MusicButton className="buttonStyle" onCLick={this.toggleButtonMenu}/>*/}
            <AudioControlWrapper />
        </div>
      </div>
    );
  }
}
