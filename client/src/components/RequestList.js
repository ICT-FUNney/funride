import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import GoogleApiWrapper from './GoogleMap';

const detailPage1 = () =>
    <div>
        <h1 className="h1">詳細画面</h1>
        <div className="detailMap"><GoogleApiWrapper /></div>
        <ul className="listDetail">
            <li className="li">高橋啓太</li>
            <li className="li">2019‐10‐15 08:04:09</li>
            <li className="li">北海道函館市hogehohe</li>
            <li className="li">函館空港、〒042‐052 北海道函館市5 11</li>
        </ul>
    </div>

const detailPage2 = () =>
    <div>
        <h1 className="h1">詳細画面</h1>
        <div className="detailMap"><GoogleApiWrapper /></div>
        <ul className="listDetail">
            <li className="li">渡邊雄之助</li>
            <li className="li">2019‐10‐10 07:08:09</li>
            <li className="li">北海道函館市hogehohe</li>
            <li className="li">函館空港、〒042‐052 北海道函館市5 11</li>
        </ul>
    </div>

const detailPage3 = () =>
    <div>
        <h1 className="h1">詳細画面</h1>
        <div className="detailMap"><GoogleApiWrapper /></div>
        <ul className="listDetail">
            <li className="li">田尻宗準</li>
            <li className="li">2019‐09‐15 10:04:09</li>
            <li className="li">北海道函館市hogehohe</li>
            <li className="li">函館空港、〒042‐052 北海道函館市5 11</li>
        </ul>
    </div>


class RequestList extends Component {
    constructor(props) {
        super(props)
    }

    transit = () => {
        this.props.history.push("/detail")
    }
    render() {
        return (
            <div>
                <h1 className="h1">依頼一覧</h1>


                <ul className="list">
                    <li className="li" onClick={this.transit}>
                        高橋啓太<br />
                        2019‐10‐15 08:04:09<br />
                        北海道函館市hogehohe<br />
                        函館空港、〒042‐052 北海道函館市5 11<br />
                    </li>
                    <li className="li" onClick={this.transit}>
                        渡邊雄之助<br />
                        2019‐10‐15 08:04:09<br />
                        北海道函館市hogehohe<br />
                        函館空港、〒042‐052 北海道函館市5 11<br />
                    </li>
                    <li className="li" onClick={this.transit}>
                        田尻宗準<br />
                        2019‐10‐15 08:04:09<br />
                        北海道函館市hogehohe<br />
                        函館空港、〒042‐052 北海道函館市5 11<br />
                    </li>
                    <li className="li" onClick={this.transit}>
                        若林勇汰<br />
                        2019‐10‐15 08:04:09<br />
                        北海道函館市hogehohe<br />
                        函館空港、〒042‐052 北海道函館市5 11<br />
                    </li>
                </ul>

            </div>
        )
    }
}

export default RequestList