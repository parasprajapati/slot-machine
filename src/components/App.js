import React from 'react';

import Machine from './Machine';
import Slot from './Slot';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.slot1 = React.createRef();
		this.slot2 = React.createRef();
		this.slot3 = React.createRef();
	}
	spin = () => {
		console.log('User clicked spin.');
		this.slot1.current.generateImage();
		this.slot2.current.generateImage();
		this.slot3.current.generateImage();
	}

	render() {
		return(
			<div>
				<Machine>
					<Slot ref={this.slot1}/>
					<Slot ref={this.slot2}/>
					<Slot ref={this.slot3}/>
					<button onClick={this.spin}>Spin</button>
				</Machine>
			</div>
		)
	}
}

export default App;