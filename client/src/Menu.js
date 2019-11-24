import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import GoogleApiWrapper from './components/GoogleMap';
/*react-router-domからモジュールをインストールしてる。*/

const topPage = () => <div><h1>Top Page</h1></div>
const page1 = () => <div><GoogleApiWrapper /></div>


/*ページの中身用のコンポーネントを作成*/

const Menu = () => {
    const liStyle = {
        display: 'inline',
        width: '100px'
    }

    return (
        <Router>
            <div style={{ width: '500px', textAlign: 'left' }}>
                <ul style={{ display: 'flex' }}>
                    <li style={liStyle}><Link to='/'>Top</Link></li>
                    <li style={liStyle}><Link to='/page1'>Map</Link></li>

                </ul>

                <div style={{ marginLeft: '50px' }}>

                    <Route path='/' exact component={topPage} />
                    <Route path='/page1' exact component={page1} />


                </div>
            </div>
        </Router>
    )
}

export default Menu