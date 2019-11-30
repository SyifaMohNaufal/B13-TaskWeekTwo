import React, { Component } from 'react';
import './Login.css'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            Redirect: false,
        }
        this.login = this.login.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    async login() {
        if (this.state.username && this.state.password) {
            try {
                const response = await axios.post(`http://localhost:3014/login`, this.state)
                console.log('returned data: ', response.data)
                console.log(response.data.token.token);
                if (response.data) {
                    localStorage.setItem("authorization", JSON.stringify(response.data.token.token));
                    this.setState({ redirect: true })
                }
            } catch (error) {
                console.log(`Axios request failed: ${error}`)
            }
        } else {
            console.log("Login Error")
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
        // console.log(this.state)
    }

    handleSubmit(e) {
        e.preventDefault()
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={'/home'} />
        }
        return (
            <body className="loginPage">
                <div className="container mx-auto" >
                    <div className="row mx-auto">
                        <div className="col-sm-7 col-md-5 col-lg-11 mx-auto">
                            <div className="card card-signin mx-auto my-5 w-100">
                                <div className="card-body">
                                    <Link to="/"><button className="btn btn-sm btn-primary" type="button">Back</button></Link>
                                    <h5 className="card-title text-center">Sign In</h5>
                                    <form className="form-signin" onSubmit={this.handleSubmit}>
                                        <div className="form-label-group">
                                            <label htmlFor="name">Username</label>
                                            <input type="text" name="username" id="name" className='form-control' placeholder="Username" required autoFocus onChange={this.onChange} />
                                        </div>
                                        <div className="form-label-group">
                                            <label htmlFor="pass">Password</label>
                                            <input type="password" name="password" id="pass" className='form-control' placeholder="Password" required onChange={this.onChange} />
                                        </div>
                                        <div className="custom-control custom-checkbox mb-3">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                            <label className="custom-control-label" htmlFor="customCheck1">Remember password</label>
                                        </div>
                                        <button className="btn btn-lg btn-primary btn-block text-uppercase" type="button" onClick={this.login}>Sign in</button>
                                        <Link to="/signup" ><button className="btn btn-lg btn-info btn-block text-uppercase mt-2" type="submit"> Sign up</button></Link>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        )
    }
}
export default Login;