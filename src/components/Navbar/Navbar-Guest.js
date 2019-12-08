import  React  from 'react';
import './Navbar.css';
import {  Link } from 'react-router-dom'


const navbar = () => {
  return (
    <header className="App-header">
        <nav className="App-nav">
          <div className="App-logo"><Link to="/">
            <img src={require('./icon/arkademy.png')} width="130px" height="90px" alt="logo"></img>
            </Link></div>        
        <div className="spacer"></div>
        <div className="App-set">
            <Link to="/login"><img src={require('./icon/dot.png')} width='30px' height="30px" alt='setting'></img></Link>
          </div>
        </nav>
      </header>
        )
      }

      export default navbar;

