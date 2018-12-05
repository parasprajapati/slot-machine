import React from 'react';

import Jumbotron from './Jumbotron';
import Slot from './Slot';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.slot1 = React.createRef();
		this.slot2 = React.createRef();
		this.slot3 = React.createRef();
	}
	spin = () => {
		this.slot1.current.generateImage();
		this.slot2.current.generateImage();
		this.slot3.current.generateImage();
	}

	render() {
		return(
			<div className="container mt-3">
				<Jumbotron title="Slot Machine" content="Click the SPIN button to test your luck!"/>
				<div className="row mt-3">
					<div className="col-md-4">
						<Slot ref={this.slot1}/>
					</div>
					<div className="col-md-4">
						<Slot ref={this.slot2}/>
					</div>
					<div className="col-md-4">
						<Slot ref={this.slot3}/>
					</div>
				</div>
				<div className="row mt-3">
					<div className="col">
						<button className="btn btn-primary btn-block btn-lg" onClick={this.spin}>SPIN</button>
					</div>
				</div>
			</div>
		)
	}
}

export default App;