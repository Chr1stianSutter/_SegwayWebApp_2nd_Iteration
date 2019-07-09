import React from "react";
import CoverflowComponent from './Coverflow/CoverflowComponent';
import AudioControlBar from './AudioControls/audioControlBar';

export default class audioControlWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {coverflow: false}
    this.props.controller.setSongPickerToggle(this.toggleCoverflow.bind(this))
  }

  toggleCoverflow(e){
    console.log(e.target);
    if(this.state.coverflow == false){
      this.setState({coverflow: true});
    } else {
      this.setState({coverflow: false});
    }
  }

  render() {
    return((this.state.coverflow) ? <CoverflowComponent /> : <AudioControlBar />)
  }
}
