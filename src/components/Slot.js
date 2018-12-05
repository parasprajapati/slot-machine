import React from 'react';

import image1 from './assets/img/1.png';
import image2 from './assets/img/2.png';
import image3 from './assets/img/3.png';
import image4 from './assets/img/4.png';
import image5 from './assets/img/5.png';

class Slot extends React.Component {
	render() {
		const images = [image1, image2, image3, image4, image5];

		return(
			<div className="ccard">
				<div className="ccard-body text-center">
					<img className="img-fluid" src={images[this.props.imageNumber]} alt="slot item"/>
				</div>
			</div>
		);
	}
}

export default Slot;