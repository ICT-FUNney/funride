import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import GoogleMap from './GoogleMap';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const MapContainerStyles = {
    list: {
        width: 250,
    },
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    appBarColorDefault: {
        backgroundColor: '#49BAEB',
    }
};

class MapContainer extends Component {
    constructor(props) {
        super(props)
        this.containerStyle = {
            position: "absolute",
            width: "100%",
            height: "100%",
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
        this.props.history.push('/pay')
    }

    render() {
        return (

            <div style={this.containerStyle}>

                <TextField
                    id="outlined-basic"
                    label="どこへ行きますか？"
                    variant="outlined"
                    width="70%"
                    style={this.formStyle}
                    onKeyPress={(ev) => {
                        console.log(`Pressed keyCode ${ev.key}`);
                        if (ev.key === 'Enter') {
                            this.transit()
                            ev.preventDefault();
                        }
                    }} />
                <GoogleMap />
            </div>
        );
    }
}

MapContainer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(MapContainerStyles)(MapContainer);