
import React, { Component } from 'react';
import GoogleApiWrapper from './components/GoogleMap';
import 'typeface-roboto';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';
import PlayArrowOutlinedIcon from '@material-ui/icons/PlayArrowOutlined';
import PauseOutlinedIcon from '@material-ui/icons/PauseOutlined';
import Request from "./components/RequestPage";
import Menu from "./Menu";
//import { GoogleApiWrapper } from 'google-maps-react';

class App extends Component {


  constructor(props) {
    super(props);
    this.state = {powerOn: false, speed: 0}
  }

  componentWillUnmount(){
    this.setState({
      powerOn:false
    })
  }

  getNetwork = () => {
    const connectionInfo = navigator.connection

    this.setState({
      powerOn: true,
      speed: connectionInfo.downlink
    })

    const changeFunc = (e) => this.state.powerOn && this.setState({speed: e.target.downlink})

    navigator.connection.onchange = changeFunc;
  }

  render() {
    return (
      <Menu/>
    );
  }
}

export default App;