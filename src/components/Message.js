import React from 'react';

const Message = (props) => {
	return (
		<div className={`text-center alert alert-${props.type}`} role="alert">
			<span className="h2">{props.content}</span>
		</div>
	);
}

export default Message;