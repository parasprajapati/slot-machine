import React from 'react';

class Machine extends React.Component {
	state = { score: 0 };

	render() {
		return(
			<div>
				<h1>Machine</h1>
				{this.props.children}
				{this.state.score}
			</div>
		);
	}
}

export default Machine;