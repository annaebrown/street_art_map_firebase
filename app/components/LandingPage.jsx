import React from 'react';
import { Navbar } from './Navbar';
import MapComponent from './MapComponent';

export const LandingPage = props => {
	return (
		<div>
			<Navbar />
			<MapComponent />
		</div>
	);
};
