import React from 'react';
import './navbarr.css'
import {  Link } from 'react-router-dom'

const navbarr = () => {
    return (
    <header className="navbarr">
        <nav className = "navbarr_nav">
                    <div className = "navbarr_logo"><Link to="/">
                        <img src={require('./../../icon/arkademy.png')} alt='logo' width="100px"/>
                        </Link></div>
                   
                    <div className= "navbarr_searchbox">
                        <button type="submit" className="search_button">
                        <img src={require('./../../icon/search.png')} alt='button' width="20px" height="20px" className="button"></img>
                        </button>
                        <input type="text" placeholder="Search" className = 'box'></input>
                    </div>

                    <div className="spacer"/>
                    
                    <div className = "navbarr_nav_item">
                        <ul>
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/">Profil</Link></li> 
                            <li><vl className="vl"></vl></li>
                            <li><Link to="/">Chat</Link></li>
                            <li><Link to="/">Notif</Link></li>
                            <li><Link to="/">Setting</Link></li>   
                        </ul>
                    </div>
        </nav>
    </header>
    )
}
export default navbarr