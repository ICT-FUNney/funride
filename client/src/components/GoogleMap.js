import React, { Component } from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

class GoogleMap extends Component {
  constructor(props) {
    super(props)


    this.containerStyle = {
      position: "absolute",
      width: "100%",
      height: "100%"
    };
    this.buttonStyle = {
      position: "absolute",
      zIndex: "2",
      left: "50%"
    };
  }

  transit = () => {
    this.props.history.push('/request')
  }

  render() {
    return (
      <div style={this.containerStyle}>
        <button style={this.buttonStyle} type="button" name="aaa" value="aaa" onClick={this.transit}>ボタン</button>
        <Map
          google={this.props.google}
          zoom={14}
          center={{ lat: 35.681236, lng: 139.767125 }}
          initialCenter={{ lat: 35.681236, lng: 139.767125 }}
          mapTypeControl={false}
          zoomControl={true}
          streetViewControl={false}
        >
          <Marker
            title={"現在地"}
            position={{ lat: 35.681236, lng: 139.767125 }}
          />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyB0ftXJ-48aqJgBjfRney-Co4vmnd4yd6g")
})(GoogleMap);