import React from 'react';
import Coverflow from 'react-coverflow';
import { Slider, Direction, Button, PlayerIcon } from 'react-player-controls'
import ProgressBarSlider from ".//ProgressBar/ProgressBarSlider"

import "./style.scss"

export default class AudioControlBar extends React.Component {
  constructor(props){
    super(props)
    //this.setState=this.setState.bind(this)
    //this.state = {open : false}
  }

  render(){
    return(
      <div className="audioControlsContainer">

        <Button onClick={() => alert('Clicked!')} className="material-icons">
            skip_previous
        </Button>
        <Button onClick={() => alert('Clicked!')} className="material-icons">
            play_arrow
        </Button>
        <Button onClick={() => alert('Clicked!')} className="material-icons">
            skip_next
        </Button>

        <ProgressBarSlider />

      </div>
    )
  };
}
