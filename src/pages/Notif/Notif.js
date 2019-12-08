import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar-Guest'

class notif extends Component{
    render(){
        return  (
            <div>
                <Navbar/>
                <div className="container w-100 h-100 text-center mt-4">
                    <div className = "row">
                    <div className="card">
                        <div className="card-body">
                         <h1 className = "card-text">  The developer is still working on this feature. </h1>
                        <img className="card-img-bottom w-75 h-100" src={require("./undraw_developer_activity_bv83.svg")} alt="errors"></img>
                        </div>
                        </div>
                        </div>
                    </div>
            </div>  
       
        )
    }
}

export default notif