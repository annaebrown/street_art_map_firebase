import {firebase} from '../../firebase/firebase_config';

const GET_ALL_MARKERS = 'GET_ALL_MARKERS';
const SELECT_MARKER = 'SELECT_MARKER';
const ADD_MARKER = 'ADD_MARKER';

const getMarkers = markers => {
	return {
		type: GET_ALL_MARKERS,
		markers
	}
}

const selectMarker = marker => {
	return {
		type: SELECT_MARKER,
		marker
	}
}
 
const addMarker = marker => {
	return {
		type: ADD_MARKER,
		marker
	}
}

const initialState = {
	markers: [],
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

		case ADD_MARKER: 
			newState.markers = [...newState.markers, action.marker]

		default: 
			return state;
	}

	return newState;
}

export const getAllMarkers = () => {
	return dispatch => {
		firebase.database().ref('markers') //create a new object that has markers inside
		.once('value') //once a value is retrieved, create a snapshot and then grab the val() property off of it
		.then(snapshot => {
			const markerObjects = snapshot.val();
			const markers = [];

			for (let key in markerObjects) {
				markers.push({latitude: markerObjects[key].latitude, longitude: markerObjects[key].longitude})
			}

			dispatch(getMarkers(markers));
		})
		.catch(err => console.error(err))
	}
};

export const addNewMarker = marker => {
	return dispatch => {
		firebase.database().ref('markers')
		.push({
			latitude: marker.latitude,
			longitude: marker.longitude
		})
		.then(() => {
			dispatch(addMarker(marker));
		})
		.catch(err => console.error(err))
	}
}; 
