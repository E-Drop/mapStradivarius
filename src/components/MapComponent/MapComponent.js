import React, { Component } from 'react';
import { connect } from 'react-redux'
import { compose } from 'redux'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';


class MapComponent extends Component {

  render() {
    return (
      <Map className="map" initialCenter={{
        lat: 41.4469883,
        lng: 2.2450325
      }}  google={this.props.google} zoom={10}>
      
      {this.props.markers.markers.length && this.props.markers.markers.map((location, key) => <Marker key={key} position={location} />)}
    
      </Map>
    );
  }
}
const mapStateToProps = state => ({
    markers: state.markers
})

export default compose(
  GoogleApiWrapper({apiKey: "AIzaSyAgyU0ISwo1jY8_Fc5I9WhJKkz3_miRESw"}),
  connect(mapStateToProps, null)
  )(MapComponent);