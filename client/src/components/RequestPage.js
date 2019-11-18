import React, { Component } from 'react';
import GoogleApiWrapper from './GoogleMap';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import './RequestPage.css';

const detailPage1 = () => 
 <div>
  <h1 className="h1">詳細画面</h1>
    <div className = "detailMap"><GoogleApiWrapper/></div>
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
    <div className = "detailMap"><GoogleApiWrapper/></div>
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
    <div className = "detailMap"><GoogleApiWrapper/></div>
     <ul className="listDetail">
        <li className="li">田尻宗準</li>
        <li className="li">2019‐09‐15 10:04:09</li>
        <li className="li">北海道函館市hogehohe</li>
        <li className="li">函館空港、〒042‐052 北海道函館市5 11</li>
     </ul>
 </div>

const detailPage4 = () => 
 <div>
  <h1 className="h1">詳細画面</h1>
    <div className = "detailMap"><GoogleApiWrapper/></div>
     <ul className="listDetail">
        <li className="li">若林勇汰</li>
        <li className="li">2019‐09‐11 08:19:09</li>
        <li className="li">北海道函館市hogehohe</li>
        <li className="li">函館空港、〒042‐052 北海道函館市5 11</li>
     </ul>
 </div>

const Request = () => {
    
        return(
         <Router>
            <div>
             <h1 className="h1">依頼一覧</h1>
            
             <Link to = '/page2/detail1' className = "a">   
               <ul className="list">  
                    <li className="li">高橋啓太</li>
                    <li className="li">2019‐10‐15 08:04:09</li>
                    <li className="li">北海道函館市hogehohe</li>
                    <li className="li">函館空港、〒042‐052 北海道函館市5 11</li>
               </ul>   
             </Link>

             <Link to = '/page2/detail2' className = "a">
                <ul className="list2">
                    <li className="li">渡邊雄之助</li>
                    <li className="li">2019‐10‐10 07:08:09</li>
                    <li className="li">北海道函館市hogehohe</li>
                    <li className="li">函館空港、〒042‐052 北海道函館市5 11</li>
                </ul>
             </Link>

             <Link to = '/page2/detail3' className = "a">
                <ul className="list3">
                    <li className="li">田尻宗準</li>
                    <li className="li">2019‐09‐15 10:04:09</li>
                    <li className="li">北海道函館市hogehohe</li>
                    <li className="li">函館空港、〒042‐052 北海道函館市5 11</li>
                </ul>
             </Link>
                
             <Link to = '/page2/detail4' className = "a">
                <ul className="list4">
                    <li className="li">若林勇汰</li>
                    <li className="li">2019‐09‐11 08:19:09</li>
                    <li className="li">北海道函館市hogehohe</li>
                    <li className="li">函館空港、〒042‐052 北海道函館市5 11</li>
                </ul>
             </Link>

             <div>
              <Route path = '/page2/detail1' exact component = {detailPage1}/>
              <Route path = '/page2/detail2' exact component = {detailPage2}/>
              <Route path = '/page2/detail3' exact component = {detailPage3}/>
              <Route path = '/page2/detail4' exact component = {detailPage4}/>
             </div>

            </div>
         </Router>
        )
    
        }

        
export default Request
