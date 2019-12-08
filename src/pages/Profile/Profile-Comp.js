import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar-comp'
import './Profile.css'
import axios from 'axios'
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
            id_proj: this.props.match.params.id_proj,
            items: []
        }
    }

    componentDidMount () {
        axios({
           method: 'get',
           url: 'http://54.173.46.17:5000/project/',
           headers: {'Content-Type': 'application/json'},
        })
        .then(response => {
        //    let result = response.data.result[0];
           console.log(response);
           this.setState({items: response.data.result })
        }).catch(err => {
           if (err.response) {
              return console.log(err.response.data)
           }
           if (err.request) {
              return console.log('error from request', err.request);
           }
           else {
              console.log(err)
           }
        })
      }
    render() {
        const{items} = this.state
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
                        <h1 id="pName"> Company Name </h1>
                        <p id="pRole"> Company Description </p>
                        <a href="/formC" className="button bg-success text-dark" onClick='/formC'>Edit Profile</a>
                        <a href="/project" className="button bg-warning text-dark" onClick='/project'>Add Project</a>
                    </div>

                    <div className="information mx-auto my-5 py-3">
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
                <section>
                    <div className="prolist-container">
                        <div className="project-list-group">
                            <div className="list-group mt-5 w-75 mx-auto">
                               <div className="list-group-title">
                                    <h2>
                                        List of Project
                                    </h2>
                                </div>
                                <div className = "listProject">
                                {items.map((item, index)=>
                                        
                                <div key={index}>
                                <a href="/" className="list-group-item list-group-item-action flex-column align-items-start">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">{item.proj_name}</h5>
                                        <small>{item.proj_deadline}</small>
                                    </div>
                                    <p className="mb-1">{item.proj_desc} </p>
                                    <small>Rp.{item.proj_fee}</small>
                                </a>
                                {/* <a href="/" className="list-group-item list-group-item-action flex-column align-items-start">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">{this.state.data.proj_name}</h5>
                                        <small>{this.state.data.proj_deadline}</small>
                                    </div>
                                    <p className="mb-1">{this.state.data.proj_desc} </p>
                                    <small>Rp.{this.state.data.proj_fee}</small>
                                </a>
                                <a href="/" className="list-group-item list-group-item-action flex-column align-items-start">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">{this.state.data.proj_name}</h5>
                                        <small>{this.state.data.proj_deadline}</small>
                                    </div>
                                    <p className="mb-1">{this.state.data.proj_desc} </p>
                                    <small>Rp.{this.state.data.proj_fee}</small>
                                </a> */}
                                </div>)}
                            </div>
                        </div>
                    </div>
                    </div>
                </section>
            </div>
        )
    }
}


export default profile;