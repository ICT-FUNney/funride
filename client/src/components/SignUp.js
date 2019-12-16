import React, { Component } from 'react';


class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            signupPass: '',
            signupID: '',
            resignupPass: ''
        }
        this.container = {
            position: "absolute",
            background: "#49BAEB",
            width: "100%",
            height: "100%"
        }
    }
    
    transit = () => {
        if((this.state.signupPass == '') || (this.state.signupID == '') || (this.state.resignupPass == '')){
            alert('ユーザー名、パスワード入力してください')
            onsubmit = 'return false'
        }else if(this.state.signupPass != this.state.resignupPass){
            alert('パスワードと再確認用パスワードが違います')
            onsubmit = 'return false'
        }else{
        this.props.history.push('/map')
        }
    }

    switching = () => {
        this.props.history.push('/login')
    }

    render() {
        return (
            <div style={this.container}>
                <div className="font2">funride</div>
                <div className="form-wrapper2">
                    <form onSubmit = {this.transit}>
                        <div className="form-item2">
                            <label for="loginID"></label>
                            <input type="text" name="signupID" placeholder="ユーザー名" value={this.state.signupID}  onChange={e => this.setState({signupID: e.target.value})}></input>
                        </div>
                        <div className="form-item2"> 
                            <label for="loginPass"></label>
                            <input type="password" name="signupPass" placeholder="パスワード" value={this.state.signupPass}  onChange={e => this.setState({signupPass: e.target.value})}></input>
                        </div>
                        <div className="form-item2">
                            <label for="loginID"></label>
                            <input type="password" name="resignupPass" placeholder="パスワード再入力" value={this.state.resignupPass}  onChange={e => this.setState({resignupPass: e.target.value})}></input>
                        </div>
                            <input type="submit" className="button-lay4" value="新規登録"></input>
                    </form>
                            <input type = "button" className = "button-lay3" value = "ログインはこちらから" onClick = {this.switching}></input>
                </div>
            </div>

        );
    }
}

export default SignUp