import React from 'react';

const Jumbotron = (props) => {
	return (
		<div className="jumbotron text-center">
			<h1 className="display-4">{props.title}</h1>
			<p className="lead">{props.content}</p>
		</div>
	);
}

export default Jumbotron;