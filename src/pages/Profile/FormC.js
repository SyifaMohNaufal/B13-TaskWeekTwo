import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar-Guest'
import './Profile.css'
import axios from "axios"
// import foto from '../img/sample2.jpg'

// const styleCss = {
//     photo: {
//         backgroundImage: `url(${foto})`
//     }
// }

class isiForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            company_name:"",
            company_desc:"",
            company_location:"",
            company_logo:"",
            redirect: false
        }
        this.submitProfile = this.submitProfile.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    async submitProfile() {
        try {
          const response = await axios.post("http://localhost:3014/company/", {
            company_name: this.state.company_name,
            company_desc: this.state.company_desc,
            company_location: this.state.company_location,
            company_logo: this.state.company_logo
          });
          console.log("Returned data:", response.data);
          if (response.data.result.affectedRows === 1) {
            alert("Submit form successful!");
            this.setState({ redirect: true });
          } else {
            alert("Submit form failed!");
          }
        } catch (e) {
          alert("Submit form error!")
          console.log(`Axios request failed: ${e}`);
        }
      }
    
      onChange(event) {
        this.setState({ [event.target.name]: event.target.value });
      }
    
      handleSubmit(event) {
        event.preventDefault();
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
                            <h1 id="pName"> Company Name </h1>
                            <p id="pRole"> Company Description </p>
                            <a href="/form" className="button bg-green" onClick='/form'>Edit Profile</a >
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

                <section id="input-form">
                    <form>
                        <div className="form">
                            <label>Company Name</label>
                            <input id="Company_name" type="text" name="Company_name" />
                        </div>
                        <div className="form">
                            <label>Description</label>
                            <input id="company_desc" type="text" name="company_desc" />
                        </div>
                        <div className="form">
                            <label>Location</label>
                            <input id="Company_location" type="text" name="company_location" />
                        </div>
                        <div className="form">
                            <label>Email</label>
                            <input id="inpEmail" type="email" name="email" />
                        </div>
                        <div className="form-group">
                            <label for="upload">Company Image</label>
                            <br></br>
                            <p> Please upload your best image for your profile. </p>
                            <input type="file" classNames="form-control-file" id="company_logo" name="company_logo"/>
                        </div>
                        <div className="formbutton">
                            <button className="btn btn-lg btn-primary  btn-sm text-uppercase mt-2 border-dark" type="button" onClick={this.submitProfile}> Submit </button>
                        </div>
                
                    </form>
                </section>
            </div>
        )
    }
}

export default isiForm;