import React from 'react';

import Machine from './Machine';
import Slot from './Slot';
import SpinButton from './SpinButton';

const App = () => {
	return(
		<div>
			<Machine>
				<Slot/>
				<Slot/>
				<Slot/>
				<SpinButton/>
			</Machine>
		</div>
	);
}

export default App;