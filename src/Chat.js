import React from 'react';
import './Chat.css';

class Chat extends React.Component {

	render() {
		const date = new Date(this.props.timestamp);
		const time = date.toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' });

		if (this.props.type === 'message') {
			return (
				<div className='chat-message'>
					<img src={this.props.participant.avatar} alt='avatar' />
					<div>
						<h4>{this.props.participant.name} <span>{time}</span></h4>
						<p>{this.props.message}</p>
					</div>
				</div>
			);
		} else {
			return (
				<div className='system-message'>
					<span>{this.props.participant.name}</span>
					<div>'{this.props.type}'</div>
				</div>
			);
		}

	}
}

export default Chat;