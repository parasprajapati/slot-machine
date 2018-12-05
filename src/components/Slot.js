import React from 'react';

class Slot extends React.Component {
	state = { image: 0 };

	generateImage = () => {
		this.setState({ image: Math.floor(Math.random() * 10) });
	}

	render() {
		return(
			<div className="card">
				<div className="card-body">
					<span>Number: {this.state.image}</span>
				</div>
			</div>
		);
	}
}

export default Slot;