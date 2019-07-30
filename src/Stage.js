import React from 'react';
import './Stage.css';

class Stage extends React.Component{
  render(){
    return (
      <div className="stage-participant">
        <h2>{this.props.name}</h2>
        <img src={this.props.avatar} alt="avatar"/>
      </div>
    )
  }
}

export default Stage;