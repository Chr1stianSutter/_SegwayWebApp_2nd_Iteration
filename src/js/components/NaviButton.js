import React from "react";
import Button from 'react-bootstrap/lib/Button';
import MenuButton from '../components/MenuButton';
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
class Header extends React.Component {
  constructor(props){
      super(props)
      this.state = {"show_menu": false}
      this.open_the_menu = this.open_the_menu.bind(this);
  }
  open_the_menu(){
      this.setState({"show_menu": true})
  }
  render(){
      console.log(this.state)
      const style = {
          height: '40px',
          width: '200px',
          fontSize: '24px',
          fontWeight: 'bold'
      };
      const boxBorderRed ={

        border: '1px solid red'
      };

      const tech = {
          background: 'orange',
          color: '#fff',
          padding: '5px',
          marginRight: '5px'

      };

      const buttonStyle = {
        height: '120px',
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom:'20px'
      };
      const menuButtonStyle = {
        height: '120px',
        width: '200px',
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom:'20px'
      };

      const divStyle = {
       boxSizing: 'border-box',
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
                        <div class="col-sm-3"style={divStyle}>
                           <Button bsStyle="warning" inline style={menuButtonStyle}>To Adress</Button>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-sm-3" style={divStyle}>
                           <Button bsStyle="warning" inline style={menuButtonStyle}>To Home</Button>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-sm-3" style={divStyle}>
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
module.exports = Header;
