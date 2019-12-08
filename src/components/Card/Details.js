import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import NavbarC from '../Navbar/Navbar-comp'
import axios from 'axios';

class details extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            ideng: this.props.match.params.ideng,
            data: ''
        }
    }

    componentDidMount () {
      axios({
         method: 'get',
         url: 'http://54.173.46.17:3014/engineer/' + this.state.ideng,
         headers: {'Content-Type': 'application/json'},
      })
      .then(response => {
         let result = response.data.result[0];
         console.log(result);
         this.setState({
            data: result
         })
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
        return (
           <div>
           <div>
                <NavbarC />
            </div>
            <div className="main h-100">
           <div className="container d-flex mt-5 mx-auto">
                    <img className="image-profile" style={{width: '30rem', height:'35rem'}} src={this.state.data.eng_image} alt='profile'/>
                <div className="card ml-0"  style={{height:'35rem', width:'20rem'}}>
                        <div className="card-body">
                            <h5 className="card-title">{this.state.data.eng_name}</h5>
                            <span className="card-text">Role                : {this.state.data.eng_desc}</span>
                            <span className="card-text">Project done   : {this.state.data.project} </span>
                            <span className="card-text">Success rate    : {this.state.data.success}%</span>
                            <span className="card-text">Skill                 : {this.state.data.skill_name}</span>
                            <span className="card-text">location          : {this.state.data.eng_location}</span>
                            <span className="card-text">date of birth   : {this.state.data.eng_dob}</span>
                            <span className="card-text">showcase        : {this.state.data.showcase}</span>
                            <Link to ={"/hire"}  className="btn btn-primary">Hire Me!</Link>
                        </div>
                </div>
                </div>
            </div>
            </div>
        )
    }
}

export default details
