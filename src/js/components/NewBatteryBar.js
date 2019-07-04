//code adapted from examples for "https://www.npmjs.com/package/react-circular-progressbar"
//found on "https://codesandbox.io/s/vymm4oln6y" under "SegmentedProgressbar.js"

import React from "react";
import { render } from 'react-dom';
import _ from 'lodash';
import CircularProgressbar from 'react-circular-progressbar';

// Component that renders an arbitrary
// number of divs on top of CircularProgressbar,
// whose content is centered.
function LayeredProgressbar(props) {
  const { renderOverlays, ...otherProps } = props;
  const overlayStyles = {
    position: 'absolute',
    //height: '100%',
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
      <div style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
      }}>
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

function getRadialSeparators(numSeparators) {
  const degrees = 360 / numSeparators;
  return _.range(numSeparators / 2).map(index => (
    <RadialSeparator degrees={index * degrees} />
  ));
}

function NewBatteryBar(props) {
  return (
    <LayeredProgressbar
    percentage={props.percentage}
    //text={props.text}
    // Path width must be customized with strokeWidth,
    // since it informs dimension calculations.
    strokeWidth={5}
    // You can override styles either by specifying this "styles" prop,
    // or by overriding the default CSS here:
    // https://github.com/iqnivek/react-circular-progressbar/blob/master/src/styles.css
    styles={{
      // Customize the root svg element
      root: {},
      // Customize the path, i.e. the part that's "complete"
      path: {
        transform: 'rotate(215deg)',
        transformOrigin: 'center center',
        // Tweak path color:
        //stroke: '#f88',
        // Tweak path to use flat or rounded ends:
        strokeLinecap: 'butt',
        // Tweak transition animation:
        transition: 'stroke-dashoffset 0.5s ease 0s',
      },
      // Customize the circle behind the path
      trail: {
        // Tweak the trail color:
        stroke: "#070c05",
      },
      // Customize the text

      text: {
        // Tweak text color:
        fill: '#f88',
        // Tweak text size:
        fontSize: '30px',
      }
    }}

      renderOverlays={() =>
        getRadialSeparators().concat(
        <div style={{ fontSize: 50,  color: '#3e98c7', marginTop: '278px', zIndex:'10', backgroundColor:'#070c05', paddingLeft:'38px', paddingRight:'38px', paddingBottom:'0px', paddingTop:'35px', marginBottom:'0px'}}>
          {props.percentage}%
        </div>,
        <div style={{ fontSize: 30, color: '#3e98c7', marginTop: '370px', backgroundColor:'#070c05' }}>

        </div>
      )
      }
    />
  );
}

export default NewBatteryBar;
