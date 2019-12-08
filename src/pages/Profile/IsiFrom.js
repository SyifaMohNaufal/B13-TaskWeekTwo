import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar-Guest'
import './Profile.css'
import foto from '../img/sample2.jpg'

const styleCss = {
    photo: {
        backgroundImage: `url(${foto})`
    }
}

class isiForm extends Component {
    constructor(props) {
        super(props)

        this.state = {}
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

                <section id="input-form">
                    <form >
                        <div className="form">
                            <label>Name</label>
                            <input id="inpName" type="text" name="name" />
                        </div>
                        <div className="form">
                            <label>Role</label>
                            <input id="inpRole" type="text" name="role" />
                        </div>
                        <div className="form">
                            <label>Project Done</label>
                            <input id="inpProject" type="number" name="project" />
                        </div>
                        <div className="form">
                            <label>Success rate</label>
                            <input id="inpSuccess" type="number" name="success" />
                        </div>
                        <div className="form">
                            <label>Skills</label>
                            <input id="inpSkill" type="text" name="skill" />
                        </div>
                        <div className="form">
                            <label>Location</label>
                            <input id="inpLocation" type="text" name="location" />
                        </div>
                        <div className="form">
                            <label>Email</label>
                            <input id="inpEmail" type="email" name="email" />
                        </div>
                        <div className="form-group">
                            <label for="upload">Profile Image</label>
                            <br></br>
                            <p> Please upload your best image for your profile. </p>
                            <input type="file" classNames="form-control-file" id="upload"/>
                        </div>
                        <div className="form">
                            {/* <input onClick="/profile" type="submit" name="submit" defaultValue="SUBMIT" className="bg-blue" /> */}
                            <a href="/profile" className="button bg-blue text-center" onClick='/profile'>submit</a >
                        </div>
                    </form>
                </section>
            </div>
        )
    }
}

export default isiForm;