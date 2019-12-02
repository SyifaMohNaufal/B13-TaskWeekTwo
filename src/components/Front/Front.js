import React, { Component } from 'react';
import "./Front.css"
import { Link } from "react-router-dom"

class home extends Component {
    render() {
        return (

            <div className="frontPage flex-column">
                <div className="frontSign mx-auto">
                    <Link to='/signup'><h1 className='front-page mx-auto text-center'>The Hiring App</h1></Link>
                </div>
                <br></br>
                <div className="frontDesc mx-auto">
                   <h2> Go enter to meet the software engineer that you're looking for! </h2>
                </div>
            </div>
        )
    }
}

export default home