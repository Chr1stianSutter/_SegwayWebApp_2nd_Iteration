import React from "react";
import {Button} from 'react-player-controls'

export default class VolumeButtons extends React.Component {
  constructor(props) {
    super(props)
    this.state = {volume: this.props.controller.getVolume()}
  }

  increaseVolume(e){
    let volume = this.props.controller.getVolume() + 0.1
    this.props.controller.setVolume(volume)
    this.setState({volume: this.props.controller.getVolume()})
  }

  decreaseVolume(e){
    let volume = this.props.controller.getVolume() - 0.1
    this.props.controller.setVolume(volume)
    this.setState({volume: this.props.controller.getVolume()})
  }

  render() {
    return(
      <div>
        <Button
          onClick={this.increaseVolume.bind(this)}
          className="material-icons"
          >
            volume_up
        </Button>
          <p>
            {Math.floor(this.state.volume * 100) +"%"}
          </p>
        <Button
          onClick={this.decreaseVolume.bind(this)}
          className="material-icons">
            volume_down
        </Button>
      </div>
    )
  }
}
