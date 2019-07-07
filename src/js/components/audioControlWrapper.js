import React from "react";
import CoverflowComponent from './Coverflow/CoverflowComponent';
import AudioControlBar from './AudioControls/audioControlBar';


export default class audioControlWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        coverflow: false
    };
  }

    openCoverflowMenu(){
      //Store.setActive("closed");
      this.setState({
        coverflow: true
      })
      console.log(this.state)
    }

    openSongControlBar(){
      //Store.setActive("closed");
      this.setState({
        coverflow: false
      })
      console.log(this.state)
    }

  render() {
    return((this.state.coverflow) ? <CoverflowComponent /> : <AudioControlBar />)
  }
}
