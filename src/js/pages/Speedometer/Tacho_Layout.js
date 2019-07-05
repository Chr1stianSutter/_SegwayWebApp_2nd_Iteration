import React from "react";
import { Grid, Button } from 'semantic-ui-react'

import CircularProgressbar from 'react-circular-progressbar';
import Speedometer from '../../components/Speedometer';
import BatteryBar from '../../components/BatteryBar';
import NewBatteryBar from '../../components/NewBatteryBar';

import Equalizer from '../../components/Equalizer';

import MusicButton from "../../components/MusicButton";

//Testing coverflow component, remove later
import ReactDOM from 'react-dom';
import Coverflow from 'react-coverflow';
import CoverflowComp from '../../components/CoverflowComponent';

const percentage = 80;
const percentageBattery = 80;

import "./style.scss"

export default class TachoLayout extends React.Component {
  constructor(props) {
    super(props);
    this.setState = ({open : false});
  }
  render() {
    return (
      <div>
        <div className="visualizerStyle">
          <Equalizer size="1200px" />
        </div>

        <div className="tachoStyle">
          <Speedometer percentage={percentage} text={percentage + "km/h"}></Speedometer>
        </div>

        <div className="batteryStyle">
          <NewBatteryBar percentage={percentageBattery} />
        </div>

        <div className="heightTest">
          {/*<MusicButton className="buttonStyle" onCLick={this.toggleButtonMenu}/>*/}
          <Coverflow width="960" height="600"
            displayQuantityOfSide={2}
            navigation={false}
            enableScroll={false}
            clickable={true}
            active={0}
            enableHeading={false}
          >
            <div
              onClick={() => fn()}
              onKeyDown={() => fn()}
              role="menuitem"
              tabIndex="0"
            >
              <img
                src={'../../../static/img1.jpeg'}
                alt='title or description'
                data-action=""
                style={{
                  display: 'block',
                  width: '100%',
                  height:'100%'
                }}
              />
            </div>

            <img src={'../../../static/img2.png'} alt='title or description' data-action=""/>
            <img src={'../../../static/img3.jpeg'} alt='title or description' data-action=""/>
            <img src={'../../../static/img4.png'} alt='title or description' data-action=""/>
            <img src={'../../../static/img5.jpeg'} alt='title or description' data-action=""/>
          </Coverflow>
        </div>
      </div>
    );
  }
}
