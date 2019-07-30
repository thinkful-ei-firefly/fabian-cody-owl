import React from 'react';

class Chat extends React.Component{

	render(){
		const date = new Date(this.props.timestamp);
		const time = date.toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' });

		if (this.props.type === 'message'){
			console.log(this.props.timestamp);
			return(
				<div>
				<img src={this.props.participant.avatar} alt='avatar'/>
				<h4>{this.props.participant.name} <span>{time}</span></h4>
				{this.props.message}
				</div>
			);
		}else{
			return (
				<div>
				<span>{this.props.participant.name}</span>
				{this.props.type}
				</div>
			);
		}
		
	}
}

export default Chat;