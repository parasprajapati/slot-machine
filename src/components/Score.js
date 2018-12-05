import React from 'react';

class Score extends React.Component {
	state = {
		wallet: 1000,
		pool: 0,
	};

	handleAdd5 = () => {
		this.props.handleAdd(5);
	}

	handleAdd15 = () => {
		this.props.handleAdd(15);
	}

	handleAdd25 = () => {
		this.props.handleAdd(25);
	}

	handleTake50 = () => {
		this.props.handleTake(50);
	}

	handleTake100 = () => {
		this.props.handleTake(100);
	}

	handleTake1000 = () => {
		this.props.handleTake(1000);
	}

	updatePool(){
		this.setState({
			pool: this.state.pool + this.props.amount,
		});
	}

	render() {
		return(
			<div className="card">
				<div className="card-body">
					<div className="row">
						<div className="col-sm-6">
							<div className="row">
								<div className="col-6 text-left">
									<span>Wallet:</span>
								</div>
								<div className="col-6 text-right">
									<span>${this.props.wallet}</span>
								</div>
							</div>
						</div>
						<div className="col-sm-6">
							<div className="row">
								<div className="col-6 text-left">
									<span>Pool:</span>
								</div>
								<div className="col-6 text-right">
									<span>${this.props.pool}</span>
								</div>
							</div>
						</div>
					</div>
					<div className="row mt-3">
						<div className="col-md-6 mb-3">
							<div className="row">
								<div className="col-4">
									<button onClick={this.handleAdd5} className="btn btn-sm btn-block btn-warning">Add $5</button>
								</div>
								<div className="col-4">
									<button onClick={this.handleAdd15} className="btn btn-sm btn-block btn-warning">Add $15</button>
								</div>
								<div className="col-4">
									<button onClick={this.handleAdd25} className="btn btn-sm btn-block btn-warning">Add $25</button>
								</div>
							</div>
						</div>
						<div className="col-md-6 mb-3">
							<div className="row">
								<div className="col-4">
									<button onClick={this.handleTake50} className="btn btn-sm btn-block btn-success">Take $50</button>
								</div>
								<div className="col-4">
									<button onClick={this.handleTake100} className="btn btn-sm btn-block btn-success">Take $100</button>
								</div>
								<div className="col-4">
									<button onClick={this.handleTake1000} className="btn btn-sm btn-block btn-success">Take $1000</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Score;