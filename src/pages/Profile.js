import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar'
import './css/Profile.css'
import foto from './img/sample2.jpg'

const styleCss = {
    photo: {
        backgroundImage: `url(${foto})`
    }
}

class profile extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <section className="box-profile">
                    <div className="img-profile">
                        <div className="photo" style={styleCss.photo} ></div>
                    </div>
                    <div className="description">
                        <h1 id="pName">Syifa Mohammad Naufal</h1>
                        <p id="pRole">Front End Designer</p>
                        {/* <a href="/profile" className="button bg-green" onClick="editForm()">Edit Profile</a> */}
                    </div>
                    <div className="information">
                        <div className="data">
                            <p className="field">Project Done</p>
                            <p id="pProject" className="text-dark">10</p>
                        </div>
                        <div className="data">
                            <p className="field">Success rate</p>
                            <p id="pSuccess" className="text-dark">75%</p>
                        </div>
                        <div className="data">
                            <p className="field">Skills</p>
                            <p id="pSkill" className="text-dark">Javascript</p>
                        </div>
                        <div className="data">
                            <p className="field">Location</p>
                            <p id="pLocation" className="text-dark">Bogor, Indonesia</p>
                        </div>
                        <div className="data">
                            <p className="field">Email</p>
                            <p id="pEmail" className="text-dark">Syifamnaufal@gmail.com</p>
                        </div>
                    </div>
                </section>

                {/* <section id="input-form">
                    <form method="#" action="#">
                    <div className="form">
                        <label>Name</label>
                        <input 
                        id="inpName" 
                        type="text" 
                        name="name" 
                        /> 
                    </div>
                    <div className="form">
                        <label>Role</label>
                        <input 
                        id="inpRole" 
                        type="text" 
                        name="role" 
                        />
                    </div>
                    <div className="form">
                        <label>Project Done</label>
                        <input 
                        id="inpProject" 
                        type="number" 
                        name="project" 
                        />
                    </div>
                    <div className="form">
                        <label>Success rate</label>
                        <input 
                        id="inpSuccess" 
                        type="number" 
                        name="success" 
                        />
                    </div>
                    <div className="form">
                        <label>Skills</label>
                        <input 
                        id="inpSkill" 
                        type="text" 
                        name="skill" 
                        />
                    </div>
                    <div className="form">
                        <label>Location</label>
                        <input 
                        id="inpLocation" 
                        type="text" 
                        name="location" 
                        />
                    </div>
                    <div className="form">
                        <label>Email</label>
                        <input 
                        id="inpEmail" 
                        type="email" 
                        name="email" 
                        />
                    </div>
                    <div className="form">
                        <input 
                        onClick="simpanForm()" 
                        type="Submit"
                         name="submit" 
                         defaultValue="SUBMIT" 
                         className="bg-blue" />
                    </div>
                    </form>
                    <div>
                        </div>
            </section> */}
        </div>
        )
    }
}


export default profile;