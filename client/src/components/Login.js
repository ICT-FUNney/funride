import React, { Component } from 'react';
import { signInApi } from '../api/SignIn';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loginID: '',
            loginPass: ''
        }
        this.container = {
            position: "absolute",
            background: "#49BAEB",
            height: "100%",
            width: "100%"
        }
    }

    transit = () => {
        if ((this.state.loginPass == '') || (this.state.loginID == '')) {
            alert('ユーザー名、パスワード入力してください')
            onsubmit = 'return false'
        } else {
            const newToken = signInApi({
                id: this.state.loginID,
                password: this.state.loginPass
            });
            this.props.setToken({
                token: newToken,
                id: this.state.loginID
            });
            this.props.history.push('/map');
        }
    }

    switching = () => {
        this.props.history.push('/signup');
    }

    render() {
        return (
            <div className="login-container" style={this.container}>
                <div className="font1" >funride</div>
                <div className="form-wrapper1">
                    <form onSubmit={this.transit}>
                        <div className="form-item1">
                            <label for="loginID"></label>
                            <input type="text" name="loginID" placeholder="ユーザー名" value={this.state.loginID} onChange={e => this.setState({ loginID: e.target.value })}></input>
                        </div>
                        <div className="form-item1">
                            <label for="loginPass"></label>
                            <input type="password" name="loginPass" placeholder="パスワード" value={this.state.loginPass} onChange={e => this.setState({ loginPass: e.target.value })}></input>
                        </div>
                        <input type="submit" className="button-lay1" value="ログイン" />
                        <input type="button" className="button-lay2" value="新規登録" onClick={this.switching} />
                    </form>
                </div>
            </div >
        );
    }
}


export default Login