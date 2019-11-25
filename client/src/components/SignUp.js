import React, { Component } from 'react';

class SignUp extends Component {
    render() {
        return (
            <div>
                <div className="font2">funride</div>
                <div className="form-wrapper2">
                    <form>
                        <div className="form-item2">
                            <label for="loginID"></label>
                            <input type="text" name="loginID" required="required" placeholder="ユーザー名"></input>
                        </div>
                        <div className="form-item2">
                            <label for="loginPass"></label>
                            <input type="password" name="loginPass" required="required" placeholder="パスワード"></input>
                        </div>
                        <div className="form-item2">
                            <label for="loginID"></label>
                            <input type="password" name="reloginPadd" required="required" placeholder="パスワード再入力"></input>
                        </div>
                        <div>
                            <input type="submit" className="button-lay4" value="新規登録"></input>
                        </div>
                    </form>
                </div>
            </div>

        );
    }
}

export default SignUp