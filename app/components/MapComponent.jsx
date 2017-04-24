import React, {Component} from 'react';
import {connect} from 'react-redux';
import InitialMap from './InitialMap';
import Form from './Form';
import {Modal} from './Modal';
import {Button} from 'react-bootstrap';
import {addMarker} from '../reducers/mapReducer';
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
    this.handleMapLoad = this.handleMapLoad.bind(this);
    this.handleMarkerClick = this.handleMarkerClick.bind(this);
    this.closePopUp = this.closePopUp.bind(this);
    this.handlePopUpSubmit = this.handlePopUpSubmit.bind(this);
    this.modalClick = this.modalClick.bind(this);
    // this.handleMarkerClose = this.handleMarkerClose.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    // this.updatingContent = this.updatingContent.bind(this);
  }

  // componentDidMount(){
  //   this.props.getMarkers();
  // }

  handleMapLoad(map) {
    this._mapComponent = map;
    if (map) {
      console.log(map.getZoom());
    }
  }

  handleMarkerClick(marker) {
    this.setState({
      selectedMarker: marker
    });
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
    
    this.setState({
      showPopUp: false
    })

    this.props.addNewMarker(this.state.popUpPosition)
  }

  closePopUp(){
    this.setState({
      showPopUp: false
    });
  }

  modalClick(){
    this.setState({
      showModal: !this.state.showModal
    })
  }

  // handleChange(event) {
  // 	this.setState({formValue: event.target.value})
  // }


//   handleMarkerRightClick(targetMarker) {
//     const nextMarkers = this.state.markers.filter(marker => marker !== targetMarker);
//     this.setState({
//       markers: nextMarkers,
//     });
//   }

//   handleMarkerClick(targetMarker) {
//      this.setState({
//        markers: this.state.markers.map(marker => {
//          if (marker === targetMarker) marker.showInfo = true
//          if (!marker.content) {
//           marker.content = (
//             <form onSubmit={(event) => {
//               console.log(event, marker.id)
//               this.updatingContent(this.state.formValue, marker.id)
//             }}>
//               <label>Description:</label>
//               <input type="text" onChange={this.handleChange}/>
//               <Button type="submit">
//                 Submit
//               </Button>
//             </form>
//             )} else {
//             marker.imageUrl = imageArray[Math.floor(Math.random() * 10)]
//             console.log(imageArray[Math.floor(Math.random() * 10)])
//           }
//          console.log(marker)
//          return marker;
//       })
//   })
// }

//  updatingContent(content, markerId) {
//   axios.put('/api', {content: content, id: markerId})
//   .then(response => {
//       const markerData = response.data;
//       const nextMarkers = markerData.map(markerObject => {
//         const latLng = {lat: Number(markerObject.latitude), lng: Number(markerObject.longitude)}
//         const content = markerObject.content ? markerObject.content : null
//         return {
//           id: markerObject.id,
//           position: latLng,
//           content: content
//         }
//       })
//       this.setState({
//         markers: nextMarkers
//       })
//    })
//  }

// 	handleMarkerClose(targetMarker) {
// 	 this.setState({
// 	   markers: this.state.markers.map(marker => {
// 	     if (marker === targetMarker) marker.showInfo = false
// 	     return marker;
// 	   }),
// 	 })
// 	}

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
    addNewMarker: marker => dispatch(addMarker(marker))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapComponent);

