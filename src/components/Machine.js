import React from 'react';

class Machine extends React.Component {

	render() {
		return(
			<div>
				<h1>Machine</h1>
				{this.props.children}
			</div>
		);
	}
}

export default Machine;