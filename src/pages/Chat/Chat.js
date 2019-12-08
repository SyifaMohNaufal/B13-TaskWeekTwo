import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar-Guest'

class chat extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="container w-75 h-75 text-center mt-4">
                    <div className = "row">
                    <div className="card">
                        <div className="card-body">
                        <img className="card-img-top w-75 h-75" src={require("./undraw_in_progress_ql66.svg")} alt="errors"></img>
                        <div className="card-img-overlay">
                            <h1 className = "card-text">  Sorry this feature is still on development, please be patient for the upcoming update.</h1>
                        </div>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default chat