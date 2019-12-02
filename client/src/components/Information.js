import React, { Component } from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

class Information extends Component {
  constructor(props) {
    super(props)


    this.containerStyle = {
      position: "absolute",
      width: "100%",
      height: "100%"
    };
    this.InformationStyle = {
      position: "absolute",
      zIndex: "2",
      bottom: "3%",
      left: "50%",
      transform: "translateY(-50%) translateX(-50%)",
      textAlign: "center",
      padding:" 0.5px 20px",
      fontWeight: "bold",
     // fontSize: "small",
      width: "70%",
      color: "#6091d3",/*文字色*/
      background: "#FFF",
      border: "solid 3px #6091d3",/*線*/
      borderRadius: "10px",/*角の丸み*/
    };
    this.PayStile = {
      position: "absolute",
      zIndex: "2",
      bottom: "0%",
      left: "50%",
      transform: "translateY(-50%) translateX(-50%)",
      textAlign: "center",
      padding: "0.1px 19px",
      color: "#2c2c2f",
      background: "#cde4ff",
      borderTop: "solid 5px #5989cf",
      borderBottom: "solid 5px #5989cf",
    }
  }

  transit = () => {
    this.props.history.push('/request')
  }

  render() {
    return (
      <div style={this.containerStyle}>
        <div style={this.InformationStyle}>
        <p>高橋啓太　b1016666</p>
        <p>No. 函館130へ 20-19</p>
        <p>ひとこと：</p>
        <p>仮免あります。（酒気帯びです）</p>
        </div>

        <div style={this.PayStile}>
        <p>支払い</p>
        </div>

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
})(Information);