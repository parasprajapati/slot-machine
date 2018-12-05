import '../assets/css/App.css';
import React from 'react';

import Jumbotron from './Jumbotron';
import Slot from './Slot';
import Message from './Message';
import Score from './Score';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			slot1: 0,
			slot2: 0,
			slot3: 0,
			winner: 0,
			wallet: 1000,
			pool: 0,
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

		if ((this.state.pool - 5) >= 0) {
			this.setState({
				pool: this.state.pool - 5,
			});
	
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
				// if (this.checkResults(0, 0, 0)) {
					switch(this.state.slot1){
						case 0:
							this.setState({
								winner: 1,
								pool: this.state.pool + 10000,
							});
							break;
						case 1:
							this.setState({
								winner: 1,
								pool: this.state.pool + 500,
							});
							break;
						case 2:
							this.setState({
								winner: 1,
								pool: this.state.pool + 100,
							});
							break;
						default:
							this.setState({
								winner: 1,
								pool: this.state.pool + 50,
							});
							break;
					}
				} else {
					this.setState({
						winner: -1,
					});
				}
			}, 2000);

		} else {
			this.setState({
				winner: -2,
			});
		}


	}

	handleAdd = (amount) => {
		if (this.state.wallet >= amount) {
			this.setState({
				wallet: this.state.wallet - amount,
				pool: this.state.pool + amount,
			});
		} else {
			this.setState({
				pool: this.state.pool + this.state.wallet,
				wallet: 0,
			});
		}
	}

	handleTake = (amount) => {
		if (this.state.pool >= amount) {
			this.setState({
				wallet: this.state.wallet + amount,
				pool: this.state.pool - amount,
			});
		} else {
			this.setState({
				wallet: this.state.pool + this.state.wallet,
				pool: 0,
			});
		}
	}

	render() {
		let message;
		switch (this.state.winner){
			case -1:
				message = (
					<Message type="danger" content="Loser!"/>
				);
				break;
			case 1:
				message = (
					<Message type="success" content="Winner!"/>
				);
				break;
			case 2:
				message = (
					<Message type="info" content="Spinning..."/>
				);
				break;
			case -2:
				message = (
					<Message type="danger" content="There's no money in the pool!"/>
				);
				break;
			default:
				message = (
					<Message type="secondary" content="Welcome!"/>
				);
				break;
		}
		return(
			<div className="container mt-3">
				<div className="row">
					<div className="col-md-10 ml-auto mr-auto">
						<div className="card machine">
							<div className="card-body">
								<Jumbotron title="The Great Slot Machine"/>
								<div className="row">
									<div className="col">
										{message}
									</div>
								</div>
								<div className="card">
									<div className="card-body">
										<div className="row">
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
									</div>
								</div>
								<div className="row mt-3 mb-3">
									<div className="col">
										<button className="btn btn-info btn-block btn-lg" onClick={this.spin}>SPIN ($5)</button>
									</div>
								</div>
								<Score
									ref={this.score}
									wallet={this.state.wallet}
									pool={this.state.pool}
									handleAdd={this.handleAdd}
									handleTake={this.handleTake}
								/>
								<div className="row">
									<div className="col">

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default App;