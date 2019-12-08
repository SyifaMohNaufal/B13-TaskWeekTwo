import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar-Guest'
import './Profile.css'
import foto from '../img/sample2.jpg'

const styleCss = {
    photo: {
        backgroundImage: `url(${foto})`
    }
}

class profile extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
            return (
                <div>
                    <Navbar />
                    <section className="box-profile">

                        <div className="img-profile">
                            <div className="photo"
                                style={styleCss.photo} 
                            ></div>
                        </div>
                        <div className="description">
                            <h1 id="pName"> Profile Name </h1>
                            <p id="pRole"> Profile Role </p>
                            <a href="/form" className="button bg-green" onClick='/form'>Edit Profile</a >
                        </div>

                        <div className="information">
                                <div className="data">
                                    <p className="field">Project Done</p>
                                    <p id="pProject" className="text-dark"> # </p>
                                </div>

                                <div className="data">
                                    <p className="field">Success rate</p>
                                    <p id="pSuccess" className="text-dark">#%</p>
                                </div>

                                <div className="data">
                                    <p className="field">Skills</p>
                                    <p id="pSkill" className="text-dark">Skill Name</p>
                                </div>

                                <div className="data">
                                    <p className="field">Location</p>
                                    <p id="pLocation" className="text-dark">Location Name</p>
                                </div>

                                <div className="data">
                                    <p className="field">Email</p>
                                    <p id="pEmail" className="text-dark">email@email.com</p>
                                </div>

                            </div>
                    </section>
            </div>
            )
        }
     }
        
        
export default profile;