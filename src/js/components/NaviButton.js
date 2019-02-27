import React from "react";
import Button from 'react-bootstrap/lib/Button';
import MenuButton from '../components/MenuButton';
import Layout_FlexBox from '../pages/Layout_FlexBox';
import MusicButton from '../components/MusicButton';
import {observer} from "mobx-react";

/*
export default class Header extends React.Component {


    render() {

        return (
            <div>
                <Button bsStyle="warning" block> NAVI </Button>
            </div>
        );
    }
}
*/


/*
const naviButtonState = observable(NaviButton.state = {"show_menu": false});
naviButtonState.open_the_menu = function(){
  this.state = {"show_menu": true};
}
naviButtonState.close_the_menu = function(){
  this.state = {"show_menu": false};
}
*/

@observer
export default class NaviButton extends React.Component {
  constructor(props){
      super(props)
      this.state = {"show_menu": false}
      this.open_the_menu = this.open_the_menu.bind(this);
      this.close_the_menu = this.close_the_menu.bind(this);
  }
  open_the_menu(){
      this.setState({"show_menu": true}),
      MusicButton.setState({"show_menu": false}),
      Layout_FlexBox.setState({"top":'100px'});
  }
  close_the_menu(){
      this.setState({"show_menu": false}),
      Layout_FlexBox.setState({"top":'420px'});
  }
  render(){
      console.log(this.state)
      const style = {
          height: '40px',
          fontSize: '24px',
          fontWeight: 'bold'
      };
      const boxBorderRed ={

        border: '1px solid red'
      };

      const buttonStyle = {
        height: '120px',
        fontSize: '24px',
        fontWeight: 'bold',
        //marginBottom:'20px',
        zIndex:  '20'
      };
      const menuButtonStyle = {
        height: '120px',
        width: '200px',
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom:'20px',
        zIndex:  '20'
      };
      const menuHeaderStyle = {
        height: '40px',
        width: '200px',
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom:'20px',
        zIndex:  '20'
      };

      const divStyle = {
       boxSizing: 'border-box'
       //paddingTop: '20px'
     };




      return (

          <div style={style}>

              {this.state.show_menu ?

                /*
                  <p>
                      <span style={tech}>To Adresss</span>
                      <span style={tech}>To Home</span>
                      <span style={tech}>To Recent</span>

                  </p>
                */

                <div >
                  <div class="col-sm-12" style={boxBorderRed}>
                  <div class="row">
                      <div  style={divStyle}>
                         <Button onClick={this.close_the_menu} bsStyle="warning" inline style={menuHeaderStyle}>NAVI</Button>
                      </div>
                  </div>
                    <div class="row">
                        <div style={divStyle}>
                           <Button bsStyle="warning" inline style={menuButtonStyle}>To Adress</Button>
                        </div>
                    </div>

                    <div class="row">
                        <div style={divStyle}>
                           <Button bsStyle="warning" inline style={menuButtonStyle}>To Home</Button>
                        </div>
                    </div>

                    <div class="row">
                        <div  style={divStyle}>
                           <Button bsStyle="warning" inline style={menuButtonStyle}>To Recent</Button>
                        </div>
                    </div>
                  </div>
                </div>


                  :
                  <Button onClick={this.open_the_menu} bsStyle="warning" block style={style} > NAVI </Button>
              }
          </div>
      );
  }
}
