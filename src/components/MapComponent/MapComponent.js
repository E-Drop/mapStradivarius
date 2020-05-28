import React, { Component } from 'react';
import {Map, GoogleApiWrapper} from 'google-maps-react';


class MapComponent extends Component {

  render() {
    return (
      <Map className="map" initialCenter={{
        lat: 41.4469883,
        lng: 2.2450325
      }}  google={this.props.google} zoom={10}>
      </Map>
    );
  }
}
const mapStateToProps = state => ({
    markers: state.markers
})

export default GoogleApiWrapper({apiKey: "AIzaSyAgyU0ISwo1jY8_Fc5I9WhJKkz3_miRESw"})
(MapComponent);