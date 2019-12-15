
import React, { Component } from 'react';
import './RequestPage.css';
import GoogleMap from './GoogleMap';

class Request extends Component {
    constructor(props) {
        super(props)
        this.containerStyle = {
            position: "absolute",
            width: "100%",
            height: "100%"
        };
        this.formStyle = {
            position: "absolute",
            zIndex: "2",
            left: "50%",
            width: "70%",
            marginTop: "30px",
            transform: "translateX(-50%)",
            background: "#FFFFFF"
        };
    }

    render() {
        return (
            <div style={this.containerStyle}>

                <GoogleMap />
                <ul className="li-container">
                    <li className="detail">
                        <span style={{ background: "#ffffff", margin: "15px" }}>高橋啓太</span><br />
                        <img width="13" height="13" style={{ background: "#ffffff", margin: "0px 7px" }} src="https://icooon-mono.com/i/icon_00434/icon_004341_64.png" />2019‐10‐15 08:04:09<br />
                        <span style={{ background: "#ffffff", color: "#A2DEE2", margin: "0px 5px" }}>●</span>北海道函館市hogehohe<br />
                        <span style={{ background: "#ffffff", color: "#FD7E00", margin: "0px 5px" }}>●</span>函館空港、〒042‐052 北海道函館市5 11<br />
                    </li>
                </ul>

            
            </div>

        );
    }
}

export default Request;