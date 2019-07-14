import React from 'react';
import ReactDOM from 'react-dom';
import Coverflow from 'react-coverflow';
import "./style.scss"

export default class CoverflowComponent extends React.Component {
  constructor(props){
    super(props)
    //this.setState=this.setState.bind(this)
    //this.state = {open : false}
  }

  render(){
    return(
      <div className="coverflowContainer">
        <Coverflow width="960" height="460"
          displayQuantityOfSide={2}
          navigation={false}
          enableScroll={false}
          clickable={true}
          active={0}
          enableHeading={false} >
          <div
            onClick={() => fn()}
            onKeyDown={() => fn()}
            role="menuitem"
            tabIndex="0" >
            <img src={'../../../static/img1.jpeg'}
              alt='title or description'
              data-action=""
              style={{
                display: 'block',
                width: '100%',
                height:'100%'
            }} />
          </div>

          <img src={'../../../static/img2.png'} alt='title or description' data-action=""  />
          <img src={'../../../static/img3.jpeg'} alt='title or description' data-action="" />
          <img src={'../../../static/img4.png'} alt='title or description' data-action="" />
          <img src={'../../../static/img5.jpeg'} alt='title or description' data-action="" />
        </Coverflow>
      </div>
    )
  };
}
