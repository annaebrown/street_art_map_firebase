import React from 'react';
import PopUp from './InfoWindow';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { fancyStyles } from './MapStyles';

import { 
  withGoogleMap,
  GoogleMap,
  InfoWindow,
  Marker,
} from "react-google-maps";


const InitialMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={14}
    defaultCenter={{ lat: 40.6944, lng: -73.9213 }}
    defaultOptions={{ styles: fancyStyles }}
    onClick={(evt) => props.onMapClick(evt)}
  >
    {props.markers ? props.markers.map((marker, index) => {
      return <Marker
        key={index}
        position={{lat: marker.lat, lng: marker.lng}}
        onClick={() => props.onMarkerClick(marker)}
      />
    }) : null}
    { props.showPopUp && props.popUpPosition ? <PopUp position={props.popUpPosition} closePopUp={props.closePopUp} handleSubmit={props.handleFormSubmit}/> : null }
  </GoogleMap>
));

        //       {/*onClick={() => props.onMarkerClick(marker)}*/}
        // {{marker.showInfo && (
        //   <InfoWindow onCloseClick={() => props.onMarkerClose(marker)}>
        //     {
        //       marker.imageUrl ? <div id="infowindow"><img src = {marker.imageUrl}/><p id="description">{marker.content}</p></div> : <div>{marker.content}</div>
        //     }
        //   </InfoWindow>
        // )}}

export default InitialMap;