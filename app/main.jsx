import React from 'react';
import {render} from 'react-dom';
import LandingPage from './components/LandingPage';
import {Provider} from 'react-redux';
import store from './store';


render (
	<Provider store={store}>
		<LandingPage />
	</Provider>,
	document.getElementById('main')
);
