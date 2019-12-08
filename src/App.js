import React, { Component } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import SignUp from './components/SignUp/SignUp';
import Login from "./components/Login/Login";
import Home from "./pages/Home/Home";
import HomeE from "./pages/Home/Home-eng";
import HomeC from "./pages/Home/Home-comp";
import Profile from "./pages/Profile/Profile";
import ProfileC from "./pages/Profile/Profile-Comp";
import Project from "./components/ProjectCard/Project"
import Chat from "./pages/Chat/Chat";
import Notif from "./pages/Notif/Notif";
import Setting from "./pages/Setting/Setting";
import Front from "./components/Front/Front";
import Card from "./components/Card/Card";
import Cards from "./components/Card/Cards";
import Details from "./components/Card/Details"
import Hire from "./components/Hire/Hire"
import Form from "../src/pages/Profile/IsiFrom"
import FormC from "./pages/Profile/FormC"

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Route path={"/login"} component={Login} />
                    <Route path={"/signup"} component={SignUp} />
                    <Route path={"/home"} component={Home} />
                    <Route path={"/homee"} component={HomeE} />
                    <Route path={"/homec"} component={HomeC} />
                    <Route path={"/profile"} component={Profile} />
                    <Route path={"/profileC"} component={ProfileC} />
                    <Route path={"/project"} component={Project} />
                    <Route path={"/chat"} component={Chat} />
                    <Route path={"/notif"} component={Notif} />
                    <Route path={"/setting"} component={Setting} />
                    <Route path={"/cards"} component={Cards} />
                    <Route path={'/card'} component={Card} />
                    <Route path={"/details/:ideng"} component={Details}/>
                    <Route path ={"/hire"} component={Hire}/>
                    <Route path="/" exact component={Front} />
                    <Route path={'/form'} component ={Form} />
                    <Route path={'/formC'} component ={FormC} />
                </Router>
            </div>
        )
    }
}

export default App;