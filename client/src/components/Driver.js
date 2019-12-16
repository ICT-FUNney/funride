
import React, { Component } from 'react';
import './RequestPage.css';
import GoogleMap from './GoogleMap';

class Driver extends Component {
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

    transit = () => {
        this.props.history.push('/paying')
    }

    render() {
        return (
            <div style={this.containerStyle}>

                <GoogleMap />
                <ul className="li-container" onClick={this.transit}>
                    <li className="detail">
                        b1016126 高橋啓太<br />
                        No.　函館130 へ 20-19<br />
                        ひとこと:<br />
                        仮免あります。（酒気帯びです)<br />
                    </li>
                </ul>

            
            </div>

        );
    }
}

export default Driver;