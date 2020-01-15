
import React, { Component } from 'react';
import './RequestPage.css';
import GoogleMap from './GoogleMap';
import { Button } from '@material-ui/core';
import { sendApi } from '../api/Send';

class Pay extends Component {
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
        this.buttonStyle = {
            position: "absolute",
            bottom: "10%",
            left: "40%"
        }
    }
    transit = () => {
        sendApi({
            balance: 2,
            id: this.props.id,
            dest_id: "b1000000"
        })
        this.props.history.push('/map')
    }

    render() {
        return (
            <div style={this.containerStyle}>

                <GoogleMap />
                <ul className="li-container">
                    <li className="pay">
                        合計：９９９ Funny
                    </li>
                </ul>
                <Button
                    variant="contained" 
                    color="primary"
                    style={this.buttonStyle}
                    onClick={this.transit}>
                    支払い
                </Button>


            </div>

        );
    }
}

export default Pay;