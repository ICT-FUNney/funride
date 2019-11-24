import {React, Component} from "react";

class SetPay extends Component {
    render() {
        return (
            <div>
                <form action="#" method="post" name="set_payment_form">
                    <div className="frame">
                        <input type="tel" name="payment" className="form_SetPay" required="required" autocomplete="off" placeholder="感謝のお気持ちを入れてください"></input>
                    </div>
                    <div className="font">
                        <a>FUNney</a>
                    </div>
                    <div className="frame">
                        <input type="form" name="ID" className="form_SetPay" required="required" autocomplete="off" placeholder="送り先ID"></input>
                    </div>
                    <div className="send_SetPay">
                        <input type="submit" name="send_setpay" value="確定"></input>
                    </div>
                </form>
            </div>
        );
    }
}

export default SetPay;