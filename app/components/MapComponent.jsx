import React, {Component} from 'react';
import {connect} from 'react-redux';
import InitialMap from './InitialMap';
import Form from './Form';
import {Modal} from './Modal';
import {Button} from 'react-bootstrap';
import {getAllMarkers, addNewMarker, toggleMarker} from '../reducers/mapReducer';
import { 
  withGoogleMap,
  GoogleMap,
  InfoWindow,
  Marker,
} from 'react-google-maps';

class MapComponent extends Component {

  constructor(props) {
    super(props);
  	
    this.state = {
        popUpPosition: {},
        showPopUp: false,
        showModal: false
    };

    this.handleMapClick = this.handleMapClick.bind(this);
    this.handleMarkerClick = this.handleMarkerClick.bind(this);
    this.closePopUp = this.closePopUp.bind(this);
    this.handlePopUpSubmit = this.handlePopUpSubmit.bind(this);
    this.modalClick = this.modalClick.bind(this);
    this.handleMarkerClose = this.handleMarkerClose.bind(this);

  }

  componentDidMount(){
    this.props.getMarkers();
  }

  handleMarkerClick(marker) {
    marker.showInfo = true;
    this.props.toggleMarker(marker);
  }

  handleMapClick(event) {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    this.setState({
      popUpPosition: {lat, lng},
      showPopUp: true
    });
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
    this.props.toggleMarker(marker);
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
            markers={this.props.markers}
            onMapLoad={this.handleMapLoad}
            onMarkerClick={this.handleMarkerClick}
            onMapClick={this.handleMapClick}
            onMarkerClose={this.handleMarkerClose}
            popUpPosition={this.state.popUpPosition}
            showPopUp={this.state.showPopUp}
            closePopUp={this.closePopUp}
            handleFormSubmit={this.handlePopUpSubmit}
          />
          {/*
            onMarkerRightClick={this.handleMarkerRightClick}
            onMarkerClose={this.handleMarkerClose}
          */}
        </div>
      </div>
    );
  }
}

/*CONTAINER*/

const mapStateToProps = state => {
  return {
    markers: state.markers
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNewMarker: (marker, photo) => dispatch(addNewMarker(marker, photo)),
    toggleMarker: marker => dispatch(toggleMarker(marker)),
    getMarkers: () => dispatch(getAllMarkers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapComponent);

