import '../assets/css/app.css';
import React from 'react';

import Jumbotron from './Jumbotron';
import Slot from './Slot';


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			slot1: 0,
			slot2: 0,
			slot3: 0,
			winner: 0,
		};
	}
	
	generateImage = () => {
		return Math.floor(Math.random() * 5);
	}

	checkResults = (slot1, slot2, slot3) => {
		if ((slot1 === slot2) && (slot2 === slot3) && (slot3 === slot1)) {
			return true;
		}
		return false;
	}

	spin = () => {
		var timer1 = 0;
		var timer2 = 0;
		var timer3 = 0;

		timer1 = setInterval(() => {
			const slot1 = this.generateImage();
			this.setState({
				slot1: slot1,
			});
		}, Math.floor(Math.random() * 15) + 50);

		timer2 = setInterval(() => {
			const slot2 = this.generateImage();
			this.setState({
				slot2: slot2,
			});
		}, Math.floor(Math.random() * 15) + 50);

		timer3 = setInterval(() => {
			const slot3 = this.generateImage();
			this.setState({
				slot3: slot3,
			});
		}, Math.floor(Math.random() * 15) + 50);

		this.setState({
			winner: 2,
		});

		setTimeout(() => {
			clearInterval(timer1);
			clearInterval(timer2);
			clearInterval(timer3);
			if (this.checkResults(this.state.slot1, this.state.slot2, this.state.slot3)) {
				this.setState({
					winner: 1,
				});
			} else {
				this.setState({
					winner: -1,
				});
			}
		}, 2000);
	}

	render() {
		let message;
		switch (this.state.winner){
			case -1:
				message = (
					<div className="alert alert-danger" role="alert">
						You lose!
					</div>
				);
				break;
			case 1:
				message = (
					<div className="alert alert-success" role="alert">
						You win!
					</div>
				);
				break;
			case 2:
				message = (
					<div className="alert alert-info" role="alert">
						Spinning...
					</div>
				);
				break;
			default:
				message = (
					<div className="alert alert-secondary" role="alert">
						Please click on the SPIN button.
					</div>
				);
				break;
		}
		return(
			<div>
				<div className="container mt-3">
					<Jumbotron title="Slot Machine" content="Click the SPIN button to test your luck!"/>
					<div className="row mt-3">
						<div className="col-4">
							<Slot imageNumber={this.state.slot1}/>
						</div>
						<div className="col-4">
							<Slot imageNumber={this.state.slot2}/>
						</div>
						<div className="col-4">
							<Slot imageNumber={this.state.slot3}/>
						</div>
					</div>
					<div className="row mt-3 mb-3">
						<div className="col">
							<button className="btn btn-info btn-block btn-lg" onClick={this.spin}>SPIN</button>
						</div>
					</div>
					{message}
				</div>
			</div>
		)
	}
}

export default App;