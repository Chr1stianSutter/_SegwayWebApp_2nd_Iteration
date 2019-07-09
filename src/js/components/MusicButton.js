import React from "react";
import Button from 'react-bootstrap/lib/Button';
import ReactDOM from 'react-dom';
import Coverflow from 'react-coverflow';
import CoverflowComp from './CoverflowComponent';

export default class MusicButton extends React.Component {
  constructor(props){
    super(props)
    //this.setState=this.setState.bind(this)
    this.state = {open : false}
  }
  
  openMenu(){
    //Store.setActive("open");
    this.setState({
      width: '100%',
      open : true
    })
    console.log(this.state)
  }

  closeMenu(){
    //Store.setActive("closed");
    this.setState({
      width: '200px',
      open : false
    })
    console.log(this.state)
  }

  toggleButtonMenu(){
  if(this.state == {open : false}) {
    this.setState({
      open : true
    });
    console.log(this.state)

  }else if (this.state == {open : true}){
    this.setState({
      open : false
    });
    console.log(this.state)
  }
  }

    render() {
        console.log(this.state)
        return (
          <div>
            {(this.state == {open : false}) ?
              <Button block onClick={this.closeMenu.bind(this)}>
                <CoverflowComp/>
              </Button>
              :
              <Button block onClick={this.toggleButtonMenu.bind(this)}>
                <i class="glyphicon glyphicon-music"></i>
              </Button>
            }
          </div>
        );
    }
}
