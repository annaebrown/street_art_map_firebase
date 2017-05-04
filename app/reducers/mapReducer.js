import {firebase, storage} from '../../firebase/firebase_config';

const GET_ALL_MARKERS = 'GET_ALL_MARKERS';
const UPDATE_MARKER_STATUS = 'UPDATE_MARKER_STATUS';
const ADD_MARKER = 'ADD_MARKER';


export const getMarkers = (markers) => {
	return {
		type: GET_ALL_MARKERS,
		markers
	}
};

export const toggleMarker = marker => {
	return {
		type: UPDATE_MARKER_STATUS,
		marker
	}
};
 
export const addMarker = marker => {
	return {
		type: ADD_MARKER,
		marker
	}
};

const initialState = {
	markers: []
};

export default (state = initialState, action) => {

	const newState = Object.assign({}, state);

	switch(action.type) {
		case GET_ALL_MARKERS:
			newState.markers = action.markers;
			break;

		case UPDATE_MARKER_STATUS:
			newState.markers = [...newState.markers, action.marker];
			break;

		case ADD_MARKER: 
			newState.markers = [...newState.markers, action.marker];
			break;

		default: 
			return state;
	}

	return newState;
}

export const getAllMarkers = () => dispatch => {
	firebase.database().ref('markers') //create a new object that has markers inside
	.once('value') //once a value is retrieved, create a snapshot and then grab the val() property off of it
	.then(snapshot => {
		const markerObjects = snapshot.val();
		const markers = [];
		for (let key in markerObjects) {
			markers.push({artworks: markerObjects[key].artworks, lat: markerObjects[key].lat, lng: markerObjects[key].lng})
		}
		dispatch(getMarkers(markers));
	})
	.catch(err => console.error(err))
};

export const addNewMarker = (marker, photo) => dispatch => {
	firebase.database().ref('markers')
	.push()
	.then((markerVal) => {
		const markerKey = markerVal.getKey();
		const storageRef = storage.ref(`${markerKey}/${photo.name}`);
		storageRef.put(photo)
		.then(() => {
			storageRef.getDownloadURL()
			.then(artworkPictureURL => {
				marker.artworks[0].img = artworkPictureURL;
				return firebase.database().ref('markers')
				.child(markerKey)
				.update({
					lat: marker.lat,
					lng: marker.lng,
					artworks: marker.artworks
				})
				.then(() => {
					firebase.database().ref('/markers/' + markerKey)
					.once('value')
					.then(snapshot => {
						const updatedMarker = snapshot.val();
						dispatch(addMarker(updatedMarker));
					})
				})
			})
		})
	})
	.catch(err => console.error(err))
};

