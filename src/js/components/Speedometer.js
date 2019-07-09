//code adapted from examples for "https://www.npmjs.com/package/react-circular-progressbar"
//found on "https://codesandbox.io/s/vymm4oln6y" under "SegmentedProgressbar.js"

import React from "react";
import _ from 'lodash';
import CircularProgressbar from 'react-circular-progressbar';

export default class Speedometer extends React.Component {
  constructor(props){
    super(props)
    this.state = {speed: this.props.controller.getSpeed()}
    this.props.controller.setUpdateSpeedometer(this.speedDidChange.bind(this))
  }

  speedDidChange(){
    this.setState({speed: this.props.controller.getSpeed()})
  }

  render(){
    return(
      <LayeredProgressbar
        percentage={this.state.speed * 5 * 0.8}
        styles={{
          path: {
            strokeLinecap: 'butt',
            //transform: 'rotate(235deg)',
            transform: 'rotate(215deg)',
            transformOrigin: 'center center',
            stroke: 'orange'
          },
          trail: {
            // Tweak the trail color:
            stroke: "#242424",
          },
        }}
        renderOverlays={() =>
          getRadialSeparators(20).concat(
            <div style={{ fontSize: 80, color: 'orange', marginTop: '-15px' }}>
              {Math.floor(this.state.speed)}
            </div>,
            <div style={{ fontSize: 20, color: 'orange', marginTop: '80px' }}>
              km/h
            </div>,
          )
        }
      />
    )
  }
}
// Component that renders an arbitrary
// number of divs on top of CircularProgressbar,
// whose content is centered.
function LayeredProgressbar(props) {
  const { renderOverlays, ...otherProps } = props;
  const overlayStyles = {
    position: 'absolute',
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };
  const overlays = props.renderOverlays();
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
      }}
    >
      <div style={{ position: 'absolute' }}>
        <CircularProgressbar {...otherProps} textForPercentage={null} />
      </div>
      {overlays.map((overlay, index) => (
        <div style={overlayStyles} key={index}>
          {overlay}
        </div>
      ))}
    </div>
  );
}

function LayeredProgressbarBackground(props) {
  const { renderOverlays, ...otherProps } = props;
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
      }}
    >
      <div style={{ position: 'absolute' }}>
        <CircularProgressbar {...otherProps} textForPercentage={null} />
      </div>
    </div>
  );
}

function RadialSeparator(props) {
  return (
    <div
      style={{
        backgroundColor: "#070c05",
        width: '10px',
        height: '650px',
        transform: `rotate(${props.degrees}deg)`,
      }}
    />
  );
}

// Expects an even number of separators.
// Can be implemented with non-even numbers
// but requires changing the styling of LayeredProgressbar,
// left as exercise to the reader.
function getRadialSeparators(numSeparators) {
  const degrees = 360 / numSeparators;
  return _.range(numSeparators / 2).map(index => (
    <RadialSeparator degrees={index * degrees} />
  ));
}
