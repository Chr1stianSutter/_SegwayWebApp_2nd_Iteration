import React from "react";
import Button from 'react-bootstrap/lib/Button';
import MenuButton from '../components/MenuButton';
import Layout_FlexBox from '../pages/Layout_FlexBox';

class AppButton extends React.Component {
  constructor(props){
      super(props)
      this.state = {"show_menu": false}
      this.open_the_menu = this.open_the_menu.bind(this);
  }
  open_the_menu(){
      this.setState({"show_menu": true}),
      Layout_FlexBox.setState({"top":'100px'});
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
        marginBottom:'20px',
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

      const divStyle = {
       boxSizing: 'border-box',
       zIndex:  '20'
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
                        <div class="col-sm-3" style={divStyle}>
                           <Button bsStyle="warning" inline style={menuButtonStyle}>App 1</Button>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-sm-3" style={divStyle}>
                           <Button bsStyle="warning" inline style={menuButtonStyle}>App 2</Button>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-sm-3" style={divStyle}>
                           <Button bsStyle="warning" inline style={menuButtonStyle}>App 3</Button>
                        </div>
                    </div>
                  </div>
                </div>


                  :
                  <Button onClick={this.open_the_menu} bsStyle="warning" block style={style} > APPS </Button>
              }
          </div>
      );
  }
}
module.exports = AppButton;
