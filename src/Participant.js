import React from 'react';
import './Participant.css';

class Participant extends React.Component {


	render() {
		return (
			<div className='participant'>
				<img src={this.props.avatar} alt='avatar' />
				<p>{this.props.name}</p>
				<p>{this.props.onStage ? 'on stage' : 'off stage'}</p>
			</div>
		)
	};
}

export default Participant;