import  React  from 'react';
import './Navbar.css';
import {  Link } from 'react-router-dom'


const navbar = () => {
  return (
    <header className="App-header">
        <nav className="App-nav">
          <div className="App-logo"><Link to="/">
            <img src={require('./../../icon/arkademy.png')} width="130px" height="90px" alt="logo"></img>
            </Link></div>

          <div className="App-searchbox">
            <button type="submit" className="searchButton">
              <img src={require('./../../icon/search.png')} alt='search button' width="20px" height="20px" className="search"></img>
            </button>
            <input type="text" placeholder="Search" className="search-box"></input>
          </div>
        
       <div className="spacer"></div>

        <div className="App-nav">
            <ul>
                <li className="Home-text"><Link to="/home"> Home </Link></li>
                <li className='Name-text'><Link to="/profile"><div className="Initial-text">N</div>Naufal</Link></li>
                <li className='vl'></li>
                <li className='Chat'><Link to='/chat'><img src={require('./../../icon/chat.png')} width='30px' height="30px" alt='chat'></img></Link></li>
                <li className='Bell'><Link to='/notif'><img src={require('./../../icon/bell.png')} width='30px' height="30px" alt='bell'></img></Link></li>
                <li className='Setting'><Link to="/login"><img src={require('./../../icon/dot.png')} width='30px' height="30px" alt='setting'></img></Link></li>
            </ul>
          </div>
        </nav>
      </header>
        )
      }

      export default navbar;

//           /* <Route path="../pages/home.js" component = {home} /> */
//           /* <Route path="../pages/profile.js"><Profile /></Route>
//           <Route path="../pages/chat.js"><Chat /></Route>
//           <Route path="../pages/notif.js"><Notif /></Route>
//           <Route path="../pages/setting.js"><Setting /></Route> */
      
      


// // function Home(){
// //   return <h2>Home</h2>
// // }
// // function Profile(){
// //   return <h2>Profile</h2>
// // }
// // function Chat(){
// //   return <h2>Chat</h2>
// // }
// // function Notif(){
// //   return <h2>Notif</h2>
// // }
// // function Setting(){
// //   return <h2>Setting</h2>
// // }

