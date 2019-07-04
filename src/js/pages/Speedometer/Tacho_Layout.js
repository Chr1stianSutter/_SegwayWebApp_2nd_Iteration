import React from "react";
import { Grid, Button } from 'semantic-ui-react'

import CircularProgressbar from 'react-circular-progressbar';
import Speedometer from '../../components/Speedometer';
import BatteryBar from '../../components/BatteryBar';
import NewBatteryBar from '../../components/NewBatteryBar';

import Equalizer from '../../components/Equalizer';

const percentage = 80;
const percentageBattery = 80;

import "./style.scss"

export default class TachoLayout extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (

      <div className="backgroundStyle">
      <Grid>
      <div className="visualizerStyle">
        <Equalizer size="1200px" />
      </div>
      </Grid>
        <div className="verticalCentered">

          <Grid verticalAlign='middle' columns={1} centered>

            <Grid.Column>

              <div class="container" className="containerStyle">

                <div class="row justify-content-center">

                  <div className="tachoContainerSyle">
                    <div className="tachoStyle">
                      <Speedometer percentage={percentage} text={percentage + "km/h"}></Speedometer>
                    </div>
                    <div className="batterySyle">
                      <NewBatteryBar percentage={percentageBattery} />
                    </div>

                  </div>
                </div>
              </div>
            </Grid.Column>
          </Grid>
        </div>
      </div>
    );
  }
}
