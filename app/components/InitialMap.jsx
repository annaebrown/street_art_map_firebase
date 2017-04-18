import React from 'react';

import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

import { 
  withGoogleMap,
  GoogleMap,
  InfoWindow,
  Marker,
} from "react-google-maps";

const fancyStyles = [
  {"featureType":"water","stylers":[{"color":"#19a0d8"}]},
  {"featureType":"administrative","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"},{"weight":6}]},
  {"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#e85113"}]},
  {"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#efe9e4"},{"lightness":-40}]},
  {"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#efe9e4"},{"lightness":-20}]},
  {"featureType":"road","elementType":"labels.text.stroke","stylers":[{"lightness":100}]},
  {"featureType":"road","elementType":"labels.text.fill","stylers":[{"lightness":-100}]},{"featureType":"road.highway","elementType":"labels.icon"},
  {"featureType":"landscape","elementType":"labels","stylers":[{"visibility":"off"}]},
  {"featureType":"landscape","stylers":[{"lightness":20},{"color":"#efe9e4"}]},
  {"featureType":"landscape.man_made","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"lightness":100}]},
  {"featureType":"water","elementType":"labels.text.fill","stylers":[{"lightness":-100}]},
  {"featureType":"poi","elementType":"labels.text.fill","stylers":[{"hue":"#11ff00"}]},
  {"featureType":"poi","elementType":"labels.text.stroke","stylers":[{"lightness":100}]},
  {"featureType":"poi","elementType":"labels.icon","stylers":[{"hue":"#4cff00"},{"saturation":58}]},
  {"featureType":"poi","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#f0e4d3"}]},
  {"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#efe9e4"},{"lightness":-25}]},
  {"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#efe9e4"},{"lightness":-10}]},
  {"featureType":"poi","elementType":"labels","stylers":[{"visibility":"simplified"}]}
]

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
        position={{lat: marker.latitude, lng: marker.longitude}}
        onClick={() => props.onMarkerClick(marker)}
      />
    }) : null}
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