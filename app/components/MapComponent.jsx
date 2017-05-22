import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { InitialMap } from './InitialMap';
import { Form } from './Form';
import { Modal } from './Modal';
import { Button } from 'react-bootstrap';
import { getAllMarkers, addNewMarker, toggleMarker } from '../reducers/mapReducer';
import { withGoogleMap, GoogleMap, InfoWindow, Marker } from 'react-google-maps';

class MapComponent extends Component {

  constructor(props) {
    super(props);
  	
    this.state = {
        popUpPosition: {},
        showPopUp: false,
        showModal: false,
        center: new google.maps.LatLng(40.6944, -73.9213),
        map: {}
    };

    this.handleMapClick = this.handleMapClick.bind(this);
    this.handleMarkerClick = this.handleMarkerClick.bind(this);
    this.closePopUp = this.closePopUp.bind(this);
    this.handlePopUpSubmit = this.handlePopUpSubmit.bind(this);
    this.modalClick = this.modalClick.bind(this);
    this.handleMarkerClose = this.handleMarkerClose.bind(this);
    this.setCenter = this.setCenter.bind(this);
    this.setMap = this.setMap.bind(this);

  }

  componentDidMount(){
    this.props.getMarkers();
  }

  handleMarkerClick(marker) {
    this.props.markers.map(m => {
      m.showInfo = false;
    });

    marker.showInfo = true;
    this.setState({
      center: {lat: marker.lat, lng: marker.lng}
    });

  }

  handleMapClick(event) {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    this.setState({
      popUpPosition: {lat, lng},
      center: {lat, lng},
      showPopUp: true
    });
  }

  setMap(map) {
    if (map) {
      this.setState({
        map
      })
    }
  }

  setCenter(map) {
    if(map){
      map.panTo(this.state.center)
    }
  }

  handlePopUpSubmit(e){
    e.preventDefault();
    const photo = e.target.photo.files[0];
    const newMarker = {
      lat: this.state.popUpPosition.lat,
      lng: this.state.popUpPosition.lng,
      artworks: [{description: e.target.description.value}]
    };
    this.props.addNewMarker(newMarker, photo);

    this.setState({
      showPopUp: false
    });
  }

  closePopUp(){
    this.setState({
      showPopUp: false
    });
  }

  modalClick(){
    this.setState({
      showModal: !this.state.showModal
    });
  }

	handleMarkerClose(marker) {
    marker.showInfo = false;
	}


  render() {
    return (
      <div>
        <Modal handleClick={this.modalClick} showModal={this.state.showModal}/>
        <div className='map_container'>
          <InitialMap
            containerElement={
              <div style={{ height: '100vh', width: 'auto' }} />
            }
            mapElement={
              <div style={{ height: '100vh', width: '100vw' }} />
            }
            center={this.state.center}
            markers={this.props.markers}
            onMapLoad={this.handleMapLoad}
            onMarkerClick={this.handleMarkerClick}
            onMapClick={this.handleMapClick}
            onMarkerClose={this.handleMarkerClose}
            popUpPosition={this.state.popUpPosition}
            showPopUp={this.state.showPopUp}
            closePopUp={this.closePopUp}
            handleFormSubmit={this.handlePopUpSubmit}
            setCenter={this.setCenter}
            setMap={this.setMap}
          />
        </div>
      </div>
    );
  }
}

MapComponent.propTypes = {
  markers: PropTypes.array.isRequired,
  addNewMarker: PropTypes.func.isRequired,
  getMarkers: PropTypes.func.isRequired
};

/*CONTAINER*/

const mapStateToProps = state => {
  return {
    markers: state.markers
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addNewMarker: (marker, photo) => dispatch(addNewMarker(marker, photo)),
    getMarkers: () => dispatch(getAllMarkers())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MapComponent);
