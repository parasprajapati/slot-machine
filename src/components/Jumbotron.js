import React from 'react';

const Jumbotron = (props) => {
	return (
		<div className="jumbotron text-center mb-3 text-white" style={{ backgroundColor: 'grey' }}>
			<span className="display-4">{props.title}</span>
			{props.children}
		</div>
	);
}

export default Jumbotron;