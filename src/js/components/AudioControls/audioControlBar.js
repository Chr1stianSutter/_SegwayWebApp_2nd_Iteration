import React from 'react';
//import Coverflow from 'react-coverflow';
import { Slider, Direction, Button } from 'react-player-controls'
import ProgressBarSlider from ".//ProgressBar/ProgressBarSlider"

import "./style.scss"

export default class AudioControlBar extends React.Component {
  constructor(props){
    super(props)
    //this.setState=this.setState.bind(this)
    //this.state = {currentSong: this.props.controller.getCurrentSong()}
    this.state = {isPlaying: this.props.controller.getIsPlaying()}
  }

  togglePlayPause(){
    if(this.state.isPlaying == false){
      this.setState({isPlaying: true});
      this.props.controller.setIsPlaying(true)
    } else {
      this.setState({isPlaying: false});
      this.props.controller.setIsPlaying(false)

    }
  }

  render(){
    return(
      <div>
        <div className="audioControlsContainer">

          <Button onClick={() => alert('Clicked!')} className="material-icons">
            skip_previous
          </Button>
          <Button onClick={this.togglePlayPause.bind(this)} className="material-icons">
            {(this.state.isPlaying) ? "pause" : "play_arrow"}
          </Button>
          <Button onClick={() => alert('Clicked!')} className="material-icons">
            skip_next
          </Button>

          <ProgressBarSlider />

        </div>

      </div>
    )
  };
}
