import React, { Component } from "react";
import './RequestPage.css';

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
                <ul className="li-container">
                  <li className="list" onClick={this.transit}>
                    <span style={{background:"#ffffff",margin:"15px"}}>高橋啓太</span><span className="state">保留中</span><br />
                    <img width="13" height="13" style={{background:"#ffffff",margin:"0px 7px"}} src="https://icooon-mono.com/i/icon_00434/icon_004341_64.png" />2019‐10‐15 08:04:09<br />
                    <span style={{background:"#ffffff",color: "#A2DEE2",margin:"0px 5px"}}>●</span>北海道函館市hogehohe<br />
                    <span style={{background:"#ffffff",color: "#FD7E00",margin:"0px 5px"}}>●</span>函館空港、〒042‐052 北海道函館市5 11<br />                        
                  </li>
                  <li className="list" onClick={this.transit}>
                    <span style={{background:"#ffffff",margin:"15px"}}>渡邊雄之助</span><span className="state">完了済み</span><br />
                    <img width="13" height="13" style={{background:"#ffffff",margin:"0px 7px"}} src="https://icooon-mono.com/i/icon_00434/icon_004341_64.png" />2019‐10‐15 08:04:09<br />
                    <span style={{background:"#ffffff",color: "#A2DEE2",margin:"0px 5px"}}>●</span>北海道函館市hogehohe<br />
                    <span style={{background:"#ffffff",color: "#FD7E00",margin:"0px 5px"}}>●</span>函館空港、〒042‐052 北海道函館市5 11<br />
                  </li>
                  <li className="list" onClick={this.transit}>
                    <span style={{background:"#ffffff",margin:"15px"}}>田尻宗準</span><span className="state">完了済み</span><br />
                    <img width="13" height="13" style={{background:"#ffffff",margin:"0px 7px"}} src="https://icooon-mono.com/i/icon_00434/icon_004341_64.png" />2019‐10‐15 08:04:09<br />
                    <span style={{background:"#ffffff",color: "#A2DEE2",margin:"0px 5px"}}>●</span>北海道函館市hogehohe<br />
                    <span style={{background:"#ffffff",color: "#FD7E00",margin:"0px 5px"}}>●</span>函館空港、〒042‐052 北海道函館市5 11<br />
                  </li>
                  <li className="list" onClick={this.transit}>
                    <span style={{background:"#ffffff",margin:"15px"}}>若林勇汰</span><span className="state">完了済み</span><br />
                    <img width="13" height="13" style={{background:"#ffffff",margin:"0px 7px"}} src="https://icooon-mono.com/i/icon_00434/icon_004341_64.png" />2019‐10‐15 08:04:09<br />
                    <span style={{background:"#ffffff",color: "#A2DEE2",margin:"0px 5px"}}>●</span>北海道函館市hogehohe<br />
                    <span style={{background:"#ffffff",color: "#FD7E00",margin:"0px 5px"}}>●</span>函館空港、〒042‐052 北海道函館市5 11<br />
                  </li>
                  <li className="list" onClick={this.transit}>
                    <span style={{background:"#ffffff",margin:"15px"}}>濁川沼吉</span><span className="state">完了済み</span><br />
                    <img width="13" height="13" style={{background:"#ffffff",margin:"0px 7px"}} src="https://icooon-mono.com/i/icon_00434/icon_004341_64.png" />2019‐10‐15 08:04:09<br />
                    <span style={{background:"#ffffff",color: "#A2DEE2",margin:"0px 5px"}}>●</span>北海道函館市hogehohe<br />
                    <span style={{background:"#ffffff",color: "#FD7E00",margin:"0px 5px"}}>●</span>函館空港、〒042‐052 北海道函館市5 11<br />
                  </li>
                </ul>

            </div>
        )
    }
}

export default RequestList