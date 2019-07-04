/*
//code adapted from https://github.com/kelvinau/circular-audio-wave/blob/master/LICENSE

MIT License

Copyright (c) 2018 Kelvin Au

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/


import React from "react"
import echarts from 'echarts'
require('./style.scss')

//import echarts from '../components/echarts';
//var myEcharts = echarts.init(document.getElementById('main'));
//var myEcharts = require('echarts')

export default class Equalizer extends React.Component {
  constructor(props){
    super(props)

    this.wave = null;
    //this.ReferenceToContainerDiv = this.ReferenceToContainerDiv.bind(this);
    this.ReferenceToContainerDiv = React.createRef();
  }

  startVisualizing() {
    const container = this.ReferenceToContainerDiv.current;
    if(container) {
      this.wave = new CircularAudioWave(container)
      this.wave.loadAudio('/circular-audio-wave-master/demo/audio/audio1.mp3').then(() => {
        //this.wave.play()
      })
    }
  }

  componentDidMount(){
    window.setTimeout(this.startVisualizing.bind(this), 1)
  }

  componentWillUnmount(){
    this.wave = null
  }

  render(){
    let size = (this.props.size) ? this.props.size : "20px";
    const equalizerSize = {
      width: this.props.size,
      height: this.props.size,


    }
    return(
      <div style={equalizerSize} ref={this.ReferenceToContainerDiv} className="__Equalizer">{"Will render circular graph"}</div>
    )
  }
}
