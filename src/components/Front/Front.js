import React, { Component } from 'react';
import"./Front.css"
import {Link} from "react-router-dom"

class home extends Component{
    render(){
        return  (
            <div className = "frontPage">
            <Link to='/signup'><h1 className= 'front-page'>The Hiring App</h1></Link>
            </div>
        )
    }
}

export default home