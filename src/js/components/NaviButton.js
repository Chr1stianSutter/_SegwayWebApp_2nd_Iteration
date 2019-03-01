import React from "react";
import Button from 'react-bootstrap/lib/Button';
import MenuButton from '../components/MenuButton';
import Layout_FlexBox from '../pages/Layout_FlexBox';
//import MusicButton from '../components/MusicButton';
import {observer} from "mobx-react";

import Store from '../stores/store.js'
//console.log("imported", Store)
//const navStore = new Store();

@observer
export default class NaviButton extends React.Component {
  constructor(props){
      super(props)
      this.state = {"show_menu": false}
  }

  open_the_menu(){
      //MobxStore.navState.activeNavElement = "navigation"

      Store.setActiveNavState("navigation");
      //console.log(store)
      //activeNavElement = "navigation";
      this.setState({"show_menu": true})

      //MusicButton.setState({"show_menu": false}),
      //Layout_FlexBox.setState({"top":'100px'});
  }
  close_the_menu(){

      //Layout_FlexBox.setState({"top":'420px'});
      Store.setActiveNavState("");
      //MobxStore.navState.activeNavElement = null;
      //activeNavElement = null;
      this.setState({"show_menu": false});
  }

  render(){
    //const x = this.props.Store.setActiveNavState === "navigation" ? "navigation" : "";
      //console.log(this.state)
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


    //const {navState} = Store;
    const {activeNavElement} = Store;
    //console.log(Store);

      return (

          <div style={style}>
              {console.log(Store.activeNavElement)}
              {("navigation" == Store.activeNavElement) ?

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
                         <Button onClick={this.close_the_menu.bind(this)} bsStyle="warning" inline style={menuHeaderStyle}>NAVI</Button>
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
                  <Button onClick={this.open_the_menu.bind(this)} bsStyle="warning" block style={style} > NAVI </Button>
              }
          </div>
      );
  }
}
