import React from 'react';
import { NavBar } from './Navbar';
import MapComponent from './MapComponent';

export const LandingPage = props => {
	return (
		<div>
			<NavBar />
			<MapComponent />
		</div>
	);
};
