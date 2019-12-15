import React, { Component } from 'react';

class Login extends Component {

    constructor(props) {
        super(props);
    }
    transit = () => {
        this.props.history.push('/map')
    }

    render() {
        return (
            <div className="login-container">
                <div className="font1" >funride</div>
                <div className="form-wrapper1">
                    <form>
                        <div className="form-item1">
                            <label for="loginID"></label>
                            <input type="text" name="loginID" required="required" placeholder="ユーザー名"></input>
                        </div>
                        <div className="form-item1">
                            <label for="loginPass"></label>
                            <input type="password" name="loginPass" required="required" placeholder="パスワード"></input>
                        </div>
                        <div>
                            <input type="submit" className="button-lay1" value="ログイン" onClick={this.transit} />
                        </div>
                    </form>
                </div>
            </div >
        );
    }
}

export default Login