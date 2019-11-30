import React, { Component } from 'react';

import { Link, Redirect } from 'react-router-dom'

import './SignUp.css'
import axios from 'axios';
class SignUp extends Component {
      constructor(props) {
            super(props)
            this.state = {
				name : "",
				username : "",
				email : "",
				password: "",
				Redirect: false,
            }
            this.signup = this.signup.bind(this)
                this.onChange = this.onChange.bind(this)
      }

      async signup() {
		  try {
			  const response = await axios.post("http://localhost:3014/register" , this.state)
			  console.log('returned data: ' , response.data)  
			  this.setState({redirect:true})

		  } catch (error) {
			  console.log(`Axios request failed: ${error}`)
		  }
            console.log('Clicked sign up')
      }

      onChange(e) {
            this.setState({[e.target.name]: e.target.value})
            console.log(this.state)
	  }
	  
	  handleSubmit(e){
		  e.preventDefault()
	  }

      render() {
		  if(this.state.redirect){
			  return (<Redirect to={'/login'}/>)
		  }
            return (
                  <div className="main">
                        <div className="containerrrrss">
                              <div className="sign-up-content">
                                    <Link to="/"><button className="btn btn-sm btn-primary " type="button">Back</button></Link>
                                    <form  onSubmit={this.handleSubmit}>
{/* <h2 className="form-title">What type of user are you ?</h2> */}
                                    <h2 className="form-title">Sign up to start seeking for the professionals you're looking for!</h2>
{/* <div className="form-radio text-center">
<input type="radio" name="member_level" defaultValue="newbie" id="newbie" defaultChecked="checked" />
<label htmlFor="newbie">Engineer</label>
<input type="radio" name="member_level" defaultValue="master" id="master" />
<label htmlFor="master">Company</label>
</div> */}
                                    <div className="form-group">
                                          <label htmlFor="name">Full name</label>
                                          <input type="text" name="name" id="name" className="form-control is-invalid" onChange={this.onChange} />
                                    </div>
                                    <div className="form-group">
                                          <label htmlFor="name">Username</label>
                                          <input type="text" name="username" id="name" className="form-control" onChange={this.onChange}/>
                                    </div>
                                    <div className="form-group">
                                          <label htmlFor="email">Email</label>
                                          <input type="text" name="email" id="email" className="form-control" onChange={this.onChange}/>
                                    </div>
                                    <div className="form-group">
                                          <label htmlFor="pass">Password</label>
                                          <input type="password" name="password" id="pass" className="form-control" onChange={this.onChange}/>
                                    </div>
{/* <div className="form-group">
 {/* <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" /> */}
 {/* <label htmlFor="agree-term" className="label-agree-term"><span><span /></span>I agree all statements in  <a href="/" className="term-service">Terms of service</a></label> */}
 {/* </div> */}
                                    <div className="form-textbox text-center ">
                                          <button type="button" className="btn btn-primary btn-lg btn-block" onClick={this.signup}>Submit</button>
                                    </div>
                                    </form>
                                    <p className="loginhere">
                                          Already have an account ?<a href="/login" className="loginhere-link"> Log in</a>
                                    </p>
                              </div>
                        </div>
                  </div>
            )
      }
}
export default SignUp