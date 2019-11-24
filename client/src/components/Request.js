
import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';


class Request extends Component {
    render() {
        return (
            <div>
                <h1 className="h1">詳細画面</h1>
                <div className="detailMap"><GoogleApiWrapper /></div>
                <ul className="listDetail">
                    <li className="li">若林勇汰</li>
                    <li className="li">2019‐09‐11 08:19:09</li>
                    <li className="li">北海道函館市hogehohe</li>
                    <li className="li">函館空港、〒042‐052 北海道函館市5 11</li>
                </ul>
            </div>
        );
    }
}

export default Request;