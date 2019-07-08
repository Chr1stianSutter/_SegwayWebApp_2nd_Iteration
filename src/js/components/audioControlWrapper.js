import React from "react";
import CoverflowComponent from './Coverflow/CoverflowComponent';
import AudioControlBar from './AudioControls/audioControlBar';

export default class audioControlWrapper extends React.Component {
  constructor(props) {
    super(props)
  }

  openCoverflowMenu(){
  }

  openSongControlBar(){
  }

  render() {
    return((true) ? <CoverflowComponent /> : <AudioControlBar />)
  }
}
