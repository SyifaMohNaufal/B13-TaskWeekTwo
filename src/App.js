import React, { Component } from "react";

import SignUp from './components/SignUp/SignUp';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Chat from "./pages/Chat/Chat";
import Notif from "./pages/Notif/Notif";
import Setting from "./pages/Setting";
import Login from "./components/login/Login"
import Front from "./components/Front/Front"
// import Card from "./components/Card/Card"
import Cards from "./components/Card/Cards"

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path={"/login"} component={Login} />
                    <Route path={"/signup"} component={SignUp} />
                    <Route path={"/home"} component={Home} />
                    <Route path={"/profile"} component={Profile} />
                    <Route path={"/chat"} component={Chat} />
                    <Route path={"/notif"} component={Notif} />
                    <Route path={"/setting"} component={Setting} />
                    {/* <Route path={"/card"} component={Card} />  */}
                    <Route path={"/cards"} component={Cards} />
                    <Route path="/" exact component={Front} />

                </div>
            </Router>
        )
    }
}

export default App;