import React from "react";
import { Grid, Button } from 'semantic-ui-react'

import CircularProgressbar from 'react-circular-progressbar';
import Speedometer from '../../components/Speedometer';
import BatteryBar from '../../components/BatteryBar';
import NewBatteryBar from '../../components/NewBatteryBar';

import Equalizer from '../../components/Equalizer';

import MusicButton from "../../components/MusicButton";

const percentage = 80;
const percentageBattery = 80;

import "./style.scss"

export default class TachoLayout extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (

      <div>
        <Grid>
          <div className="visualizerStyle red">
            <Equalizer size="1200px" />
          </div>
        </Grid>
        <div>
          <Grid className="">
            <Grid.Column>
              <div class="container">
                <div className="absoluteCenter">
                  <div className="tachoContainerSyle">
                    <div className="tachoStyle ">
                      <Speedometer percentage={percentage} text={percentage + "km/h"}></Speedometer>
                    </div>
                    <div className="batteryStyle ">
                      <NewBatteryBar percentage={percentageBattery} />
                    </div>
                  </div>
                </div>
              </div>
            </Grid.Column>
            <Grid.Row className="divStyle">
              <div>
                <MusicButton className="buttonStyle"/>
              </div>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    );
  }
}
