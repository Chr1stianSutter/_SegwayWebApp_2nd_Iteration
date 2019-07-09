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
import SpeedometerController from '../../SpeedometerController.js'


//Styles
import "./style.scss"

export default class TachoLayout extends React.Component {
  constructor(props) {
    super(props)
    this.AudioController = new AudioController()
    this.SpeedometerController = new SpeedometerController()

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
          <Equalizer controller={this.AudioController} size="1200px" />
        </div>

        <div className="tachoStyle">
          <Speedometer controller={this.SpeedometerController} />
        </div>

        <div className="batteryStyle">
          <NewBatteryBar controller={this.SpeedometerController} />
        </div>

        <div className="AudioControlButtonBarContainer">
            <VolumeButtons controller={this.AudioController} />
        </div>

        <div className="OpenCoverflowButton">
            <Button
              onClick={(e) => this.AudioController.songPickerToggle(e)}
              className="material-icons"
              >
                library_music
            </Button>
            <Button
              onClick={() => {this.SpeedometerController.setSpeed(Math.random() * 20); this.SpeedometerController.setBatteryPower(this.SpeedometerController.getBatteryPower() -5)}}
              className="material-icons"
              >
                label_important
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
