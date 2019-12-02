import React, { Component } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import SignUp from './components/SignUp/SignUp';
import Login from "./components/Login/Login";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Chat from "./pages/Chat/Chat";
import Notif from "./pages/Notif/Notif";
import Setting from "./pages/Setting/Setting";
import Front from "./components/Front/Front";
import Cards from "./components/Card/Cards";
import Form from "../src/pages/Profile/IsiFrom"

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Route path={"/login"} component={Login} />
                    <Route path={"/signup"} component={SignUp} />
                    <Route path={"/home"} component={Home} />
                    <Route path={"/profile"} component={Profile} />
                    <Route path={"/chat"} component={Chat} />
                    <Route path={"/notif"} component={Notif} />
                    <Route path={"/setting"} component={Setting} />
                    <Route path={"/cards"} component={Cards} />
                    <Route path="/" exact component={Front} />
                    <Route path={'/form'} component ={Form} />
                </Router>
            </div>
        )
    }
}

export default App;