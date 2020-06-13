import React, {Component} from "react";
import {Route, withRouter} from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { connect } from "react-redux";
import compose from 'recompose/compose'
import {userLogin } from "../redux/actions/users/login";


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            currentUser: {}
        };
    }

    handleInputChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({
            [name]: value,
        });
    };

    openTestPage = () => {
        axios("/users/protected", {
            // headers: {"x-access-token": localStorage.getItem("token")}
            // TODO check is there is a better way to do it
            headers: {"Authorization": "Bearer " + localStorage.getItem("token")}
        })
            .then(response => {
                console.log(response.data)
                this.props.history.push('/protected');
            })
            .catch(error => {
                console.log("This is the error ********* ", error)
            })
    };


    handleLogin = () => {
        const {email, password} = this.state;
        this.props.dispatch(userLogin(email, password));
    };

    render() {
        const {email, password} = this.state;
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <div>
                        <h2>Login</h2>
                        <hr/>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                name="email"
                                type="email"
                                placeholder="Enter email"
                                onChange={this.handleInputChange}
                            />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                name="password"
                                type="password"
                                placeholder="Password"
                                onChange={this.handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out"/>
                        </Form.Group>
                        <Button variant="primary" type="button" onClick={this.handleLogin}>
                            Log in
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, {userLogin})(
    compose(
        withRouter,
        Login
    ));