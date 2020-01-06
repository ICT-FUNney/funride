
import React, { Component } from 'react';
import 'typeface-roboto';
//import { GoogleApiWrapper } from 'google-maps-react';
import Login from './components/Login';
import GoogleMap from './components/GoogleMap';
import Request from './components/Request';
import SetPay from './components/SetPay';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RequestList from './components/RequestList';
import Header from './components/Header';
import MapContainer from './components/MapContainer';
import Information from './components/Information';
import SignUp from './components/SignUp';
import './Signup.css';
import './Login.css';
import Driver from './components/Driver';
import Pay from './components/Pay';
import './setpay.css'



class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      powerOn: false,
      speed: 0,
      id: "",
      token: ""
    }
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

  setToken = (data) => {
    this.setState({
      token: data.token,
      id: data.id
    });
    console.log(this.state.token)
  }

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path='/login' render={(props) => <Login setToken={this.setToken}{...props} />} />
          <Route path='/map' component={MapContainer} />
          <Route path='/request' component={RequestList} />
          <Route path='/pay' component={SetPay} />
          <Route path='/detail' component={Request} />
          <Route path='/information' component={Information} />
          <Route path='/signup' component={SignUp} />
          <Route path='/driver' component={Driver} />
          <Route path='/paying' render={(props) => <Pay user={{
            id: this.state.id,
            token: this.state.token
          }}{...props} />} />
        </Switch>
      </Router>
    );
  }
}

export default App;