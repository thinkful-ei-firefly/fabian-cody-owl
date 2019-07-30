import React from 'react';

class Participant extends React.Component{


	render(){
		return (
			<div className={this.props.inSession?'session-participant':''}>
			<img src={this.props.avatar} alt='avatar'/>
			<p>{this.props.name}</p>
			<span>{this.props.onStage?'on stage':'off stage'}</span>
			</div>
			)
	};
}

export default Participant;