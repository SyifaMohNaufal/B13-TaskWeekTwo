import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './SignUp.css'
import axios from 'axios';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: false
        }
    }

    render() {
        if (this.state.login) {
            return <Redirect to={'/login'} />
        }
        return (
            <div className="main">
                <div className="containerrrrss mx-auto">
                    <div className="sign-up-content my-auto">
                        <Link to="/"><button className="btn btn-sm btn-primary " type="button">Back</button></Link>
                
                <Formik
                    initialValues={{
                        username: '',
                        name: '',
                        email: '',
                        password: '',
                        level: ''
                        }}

                    validationSchema={Yup.object().shape({
                        username: Yup.string().required('Username is required'),
                        name: Yup.string().required('name is required'),
                        email: Yup.string().required('email is required'),
                        password: Yup.string().required('Password is required')
                        })}

                    onSubmit={({ username, email, password, name, level }, { setStatus, setSubmitting }) => {
                        setStatus();

                        const data = {
                            name: name,
                            username: username,
                            email: email,
                            password: password,
                            level: '2',
                            }

                        axios({
                            method: 'post',
                            url: 'http://54.173.46.17:3014/register',
                            headers: {'Content-Type': 'application/json'},
                            data: data
                            })

                         .then(res => {
                            const result = res.data
                            console.log(result)
                            this.setState({
                                login: true
                                })
                            })

                         .catch(err => {
                            if (err.response) {
                               const result = err.response.data
                               return console.log(result[0])
                            }

                            if (err.request) {
                               return console.log(err.request)
                            }
                            else {
                               return console.log(err)
                            }
                        })
                    }}

                    render={({ errors, touched, isSubmitting }) => (
                        <Form>
                            <h2 className="form-title">
                                Sign up to start seeking for the professionals you're looking for!
                            </h2>

                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <Field name="name" type="text" className={'form-control my-auto' + (errors.name && touched.name ? ' is-invalid' : '')} />
                                <ErrorMessage name="name" component="div" className="invalid-feedback" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <Field name="username" type="text" className={'form-control my-auto' + (errors.username && touched.username ? ' is-invalid' : '')} />
                                <ErrorMessage name="username" component="div" className="invalid-feedback" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <Field name="email" type="email" className={'form-control my-auto' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                <ErrorMessage name="email" component="div" className="invalid-feedback" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <Field name="password" type="password" className={'form-control my-auto' + (errors.password && touched.password ? ' is-invalid' : '')} />
                                <ErrorMessage name="password" component="div" className="invalid-feedback" />
                            </div>

                            <div className="form-group">
                                <label>Who are you?</label>
                                <Field as="select" name="level" className="form-control">
                                <option value="0">-select user type-</option>
                                    <option value="2">Engineer</option>
                                    <option value="1">Company</option>
                                </Field>
                            </div>

                            <div className="form-group">
                                <button type="submit" className="btn btn-primary btn-block" disabled={isSubmitting}>Sign Up</button>
                            </div>
                             

                            <p className="loginhere"> Already have an account ? 
                                <a href="/login" className="loginhere-link">{" "} Log in</a>
                            </p>
                        </Form>
                        )}
                     />
                </div>
            </div>
        </div>
        )
    }
}

export default SignUp