import React, { PropTypes } from 'react';
import { PopUp } from './InfoWindow';
import { ArtworkWindow } from './ArtworkWindow';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { fancyStyles } from './MapStyles';

import { withGoogleMap, GoogleMap, InfoWindow, Marker } from 'react-google-maps';

export const InitialMap = withGoogleMap(props => (
    <GoogleMap
      ref={props.setMap}
      defaultZoom={14}
      defaultCenter={props.center}
      defaultOptions={{ styles: fancyStyles }}
      onClick={(evt) => props.onMapClick(evt)}
    >
      { 
        props.markers && props.markers.map((marker, index) => {
          return (
            <Marker
              key={index}
              position={{lat: marker.lat, lng: marker.lng}}
              onClick={() => props.onMarkerClick(marker)}
            >
              { marker.showInfo && (
                  <InfoWindow onCloseClick={() => props.onMarkerClose(marker)}>
                    <ArtworkWindow marker={marker}/>
                  </InfoWindow>
                ) 
              }
            </Marker>
          )
        }) 
      }
      { 
        props.showPopUp && props.popUpPosition ? 
        <PopUp 
          position={props.popUpPosition} 
          closePopUp={props.closePopUp} 
          showProgress={props.showProgress} 
          onSubmit={props.handleFormSubmit}
        /> 
        : null 
      }
    </GoogleMap>
  ) 
);

InitialMap.propTypes = {
  center: PropTypes.object.isRequired,
  markers: PropTypes.array.isRequired,
  popUpPosition: PropTypes.object.isRequired,
  showProgress: PropTypes.bool.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
  showProgress: PropTypes.func.isRequired,
  onMarkerClose: PropTypes.func.isRequired,
  onMapClick: PropTypes.func.isRequired
};
