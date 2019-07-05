import React from 'react';
import ReactDOM from 'react-dom';
import Coverflow from 'react-coverflow';

export default class CoverflowComponent extends React.Component {
  constructor(props){
    super(props)
    //this.setState=this.setState.bind(this)
    //this.state = {open : false}
  }

  render(){
    return(
      <Coverflow width="960" height="500"
        displayQuantityOfSide={2}
        navigation={false}
        enableScroll={false}
        clickable={true}
        active={0}
      >
        <div
          onClick={() => fn()}
          onKeyDown={() => fn()}
          role="menuitem"
          tabIndex="0"
        >
          <img
            src='../../../static/img1'
            alt='title or description'
            style={{
              display: 'block',
              width: '100%',
            }}
          />
        </div>
        <img src='../../../static/img2' alt='title or description' data-action="http://andyyou.github.io/react-coverflow/"/>
        <img src='../../../static/img3' alt='title or description' data-action="http://andyyou.github.io/react-coverflow/"/>
        <img src='../../../static/img4' alt='title or description' data-action="http://andyyou.github.io/react-coverflow/"/>
        <img src='../../../static/img5' alt='title or description' data-action="http://andyyou.github.io/react-coverflow/"/>
        <img src='../../../static/img6' alt='title or description' data-action="http://andyyou.github.io/react-coverflow/"/>
      </Coverflow>,

      document.querySelector('.content')
    )
  };
}
