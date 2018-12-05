import React from 'react';

class Slot extends React.Component {
	state = { image: 0 };
	
	generateImage = () => {
		this.setState({ image: Math.floor(Math.random() * 10) });
	}

	render() {
		return(
			<div>
				<h2>Slot</h2>
				<span>Number: {this.state.image}</span>
			</div>
		);
	}
}

export default Slot;