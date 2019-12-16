import React, { Component } from "react";
import { Button } from "@material-ui/core";

class SetPay extends Component {
    constructor(props) {
        super(props)
    }


    transit = () => {
        this.props.history.push('/driver')
    }
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
                        <Button variant="contained" color="primary" onClick={this.transit}>
                            決定
                        </Button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SetPay;