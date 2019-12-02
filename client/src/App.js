
import React, { Component } from 'react';
import 'typeface-roboto';
//import { GoogleApiWrapper } from 'google-maps-react';
import Login from './components/Login';
import GoogleMap from './components/GoogleMap';
import Request from './components/Request';
import SetPay from './components/SetPay';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RequestList from './components/RequestList';
import Information from './components/Information';


class App extends Component {


  constructor(props) {
    super(props);
    this.state = { powerOn: false, speed: 0 }
  }

  componentWillUnmount() {
    this.setState({
      powerOn: false
    })
  }

  getNetwork = () => {
    const connectionInfo = navigator.connection

    this.setState({
      powerOn: true,
      speed: connectionInfo.downlink
    })

    const changeFunc = (e) => this.state.powerOn && this.setState({ speed: e.target.downlink })

    navigator.connection.onchange = changeFunc;
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route path='/map' component={GoogleMap} />
          <Route path='/request' component={RequestList} />
          <Route path='/pay' component={SetPay} />
          <Route path='/detail' component={Request} />
          <Route path='/information' component={Information}/>
        </Switch>
      </Router>
    );
  }
}

export default App;