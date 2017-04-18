import React from 'react';
import { 
  InfoWindow
} from "react-google-maps";

const PopUp = (props) => {
	return (
		<div>
			<InfoWindow position={props.position} onCloseClick={() => props.closePopUp()}/>
		</div>
	)
}

export default PopUp;