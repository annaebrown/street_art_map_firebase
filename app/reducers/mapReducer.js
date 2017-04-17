const GET_ALL_MARKERS = 'GET_ALL_MARKERS';
const SELECT_MARKER = 'SELECT_MARKER';

const initialState = {
	markers: [{
		position: {
			lat: 40.6944,
			lng: -73.9213,
		},
		key: `Taiwan`,
		defaultAnimation: 2
    },
    {
		position: {
	  		lat: 40.697261,
	  		lng: -73.916272,
		},
		key: `Taiwan`,
		defaultAnimation: 2,
    
    }],
	selectedMarker: {}
};

export default (state = initialState, action) => {

	const newState = Object.assign({}, state);

	switch(action.type) {
		case GET_ALL_MARKERS:
			newState.markers = action.markers;
			break;

		case SELECT_MARKER:
			newState.marker = action.marker;
			break;
	}

	return newState;
}
