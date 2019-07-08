import React from "react";

import CircularProgressbar from 'react-circular-progressbar';
import Speedometer from '../../components/Speedometer';
//import BatteryBar from '../../components/BatteryBar';
import NewBatteryBar from '../../components/NewBatteryBar';

import Equalizer from '../../components/Equalizer';

//import MusicButton from "../../components/MusicButton";
import AudioControlWrapper from "../../components/AudioControlWrapper";

//import AudioControlButtonBar from "../../components/Control";
import ReactDOM from 'react-dom';

import { Slider, Direction, Button, PlayerIcon, } from 'react-player-controls'

const speed = 17;
const percentageBattery = 100;

import "./style.scss"

export default class TachoLayout extends React.Component {
  constructor(props) {
    super(props);

    this.state = ({
      open: false,
      volumeLevel: 100
    });
  }
  render() {

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

        <div className="AudioControlButtonBarContainer">
            <Button
              onClick={() => this.setState({volumeLevel: (this.state.volumeLevel < 90) ? this.state.volumeLevel + 10  : 100 })}
              className="material-icons"
              >
                volume_up
            </Button>
              <p>
                {this.state.volumeLevel +"%"}
              </p>
            <Button onClick={() => this.setState({volumeLevel: (this.state.volumeLevel > 10) ? this.state.volumeLevel - 10  : 0 })} className="material-icons">
                volume_down
            </Button>
        </div>

        <div className="OpenCoverflowButton">
            <Button
              onClick={() => {}}
              className="material-icons"
              >
                album
            </Button>
        </div>

        <div>
          {/*<MusicButton className="buttonStyle" onCLick={this.toggleButtonMenu}/>*/}
            <AudioControlWrapper />
        </div>
      </div>
    );
  }
}
