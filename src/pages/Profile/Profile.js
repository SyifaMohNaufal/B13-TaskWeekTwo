import React, { Component } from 'react';
// import ReactDOM from 'react-dom'
import Navbar from '../../components/Navbar/Navbar'
import './Profile.css'
// import foto from '../img/sample2.jpg'

// const styleCss = {
//     photo: {
//         backgroundImage: `url(${foto})`
//     }
// }

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
                                // style={styleCss.photo} 
                            ></div>
                        </div>
                        <div className="description">
                            <h1 id="pName">Syifa Mohammad Naufal</h1>
                            <p id="pRole">Front End Designer</p>
                            <a href="/form" className="button bg-green" onClick='/form'>Edit Profile</a >
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
            </div>
            )
        }
     }
        
        
export default profile;