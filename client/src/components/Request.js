
import React, { Component } from 'react';
import './RequestPage.css';
import GoogleMap from './GoogleMap';
import { Button } from '@material-ui/core';

function buttonOn(props) {
    return(
        <div>
        <p>
            引き受ける
        </p>
        </div>
    );
}

function buttonOff(props) {
    return false;
}

class Request extends Component {
    constructor(props) {
        super(props);
         this.handleButtonOnClick = this.handleButtonOnClick.bind(this);
        /* this.handleButtonOffClick = this.handleButtonOffClick.bind(this); */
         this.state = {buttonPush : true};

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
            left: "35%"
        };
    }

    handleButtonOnClick(){
        this.setState({buttonPush: false});
    }         
    
    render() {
        
        const buttonPush = this.state.buttonPush;
        let button;

        if (buttonPush){
            button = <buttonOn onClick={this.handleButtonOnClick} />;
        } else {
            button = <buttonOff />;
        }

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
            
                <buttonOn/>
                {button}
            </div>
        );
    }
}

export default Request;