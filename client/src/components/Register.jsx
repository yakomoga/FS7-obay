import React, {Component} from "react";
import {Route, withRouter} from "react-router-dom";
import { connect } from "react-redux";
import compose from 'recompose/compose'
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import axios from "axios";
import {userRegistration} from "../redux/actions/users/register";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        };
    }

    handleInputChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({
            [name]: value,
        });
    };


    handleRegister = () => {
        const {firstName, lastName, email, password} = this.state;
        this.props.dispatch(userRegistration(firstName, lastName, email, password));
    };

    render() {
        // const { firstName, lastName, email, password } = this.state;
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <div>
                        <h3>Sign Up</h3>
                        <div className="form-group">
                            <label>First name</label>
                            <input
                                name="firstName"
                                onChange={this.handleInputChange}
                                type="text"
                                className="form-control"
                                placeholder="First name"
                            />
                        </div>
                        <div className="form-group">
                            <label>Last name</label>
                            <input
                                name="lastName"
                                onChange={this.handleInputChange}
                                type="text"
                                className="form-control"
                                placeholder="Last name"
                            />
                        </div>
                        <div className="form-group">
                            <label>Email address</label>
                            <input
                                name="email"
                                onChange={this.handleInputChange}
                                type="email"
                                className="form-control"
                                placeholder="Enter email"
                            />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input
                                name="password"
                                onChange={this.handleInputChange}
                                type="password"
                                className="form-control"
                                placeholder="Enter password"
                            />
                        </div>
                        <button
                            onClick={this.handleRegister}
                            type="Register"
                            className="btn btn-primary btn-block"
                        >
                            Register
                        </button>
                        <p className="forgot-password text-right">
                            Already registered? <a href="#">Login</a>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default compose(
    withRouter,
    connect(null, {userRegistration})
)(Register);
