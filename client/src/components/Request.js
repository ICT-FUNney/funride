
import React, { Component } from 'react';
import './RequestPage.css';

class Request extends Component {
    render() {
        return (
            <div>
             <div style={{width:"414px", height:"746px", overflow: "hidden"}}>
              <img width="414px" height="850px" src="https://s3-alpha-sig.figma.com/img/cb0d/e82f/163af39af08721271a132f96f3ff53be?Expires=1576454400&Signature=VIZIt5rgZszrseHB3TSlQJeGG-Qv7zmWRtdkXgHLU8NRNqp9jePBFWxKDXibJQSIBlTbj18hWd4YtMVOERzyaVvvG-ErI3bx8BqksmKUCJj~Rq9egxdBsKlBjjU0og~AeqrX9~C1IvldWQbZGvEt5L3Lcg0ZUFAFgQ6SQwscly3MSqQrnq83y9ZnrNgMhAwOYCLrn0jVu3zG7rdCcka6EYIRPkEmpVpUYEjk~p6XwsVnY6w9wOLUEo6Rd3ZtznUAapCQ69nDUs5l~eIDHIMlP7Q68O-uDWNOKSsxe9Rf~jTdPJMeLkiPGEcJBCil4KhttgeL7KuidMXTos3MFmlSqA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>  
             </div>
             <h1 className="h1">詳細画面</h1>
                 <ul className="li">
                   <li className="detail">
                     <span style={{background:"#ffffff",margin:"15px"}}>高橋啓太</span><br />
                     <img width="13" height="13" style={{background:"#ffffff",margin:"0px 7px"}} src="https://icooon-mono.com/i/icon_00434/icon_004341_64.png" />2019‐10‐15 08:04:09<br />
                     <span style={{background:"#ffffff",color: "#A2DEE2",margin:"0px 5px"}}>●</span>北海道函館市hogehohe<br />
                     <span style={{background:"#ffffff",color: "#FD7E00",margin:"0px 5px"}}>●</span>函館空港、〒042‐052 北海道函館市5 11<br />
                   </li>
                 </ul>
            </div>
            
        );
    }
}

export default Request;