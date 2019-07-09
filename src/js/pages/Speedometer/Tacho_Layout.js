import React from "react"
import CircularProgressbar from 'react-circular-progressbar'
import Speedometer from '../../components/Speedometer'
import NewBatteryBar from '../../components/NewBatteryBar'
import Equalizer from '../../components/Equalizer'
import AudioControlWrapper from "../../components/audioControlWrapper"
import VolumeButtons from "../../components/VolumeButtons"
import ReactDOM from 'react-dom'
import { Slider, Direction, Button, PlayerIcon, } from 'react-player-controls'
import AudioController from '../../AudioController.js'

//Styles
import "./style.scss"


const speed = 17;
const percentageBattery = 100;

export default class TachoLayout extends React.Component {
  constructor(props) {
    super(props)
    this.AudioController = new AudioController()
    this.state = ({
      volumeLevel: 100,
      menuChange: false
    })

  }

  // showCoverflow(){
  //   console.log(AudioPlayerStore.coverflow);
  //   AudioPlayerStore.coverflow = true
  // }

  render() {
    //const ref = new AudioPlayerStore;

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
            <VolumeButtons controller={this.AudioController} />
        </div>

        <div className="OpenCoverflowButton">
            <Button
              onClick={(e) => this.AudioController.songPickerToggle(e)}
              className="material-icons"
              >
                album
            </Button>
        </div>

        <div>
          {/*<MusicButton className="buttonStyle" onCLick={this.toggleButtonMenu}/>*/}
            <AudioControlWrapper controller={this.AudioController} />
        </div>
      </div>
    );
  }
}
