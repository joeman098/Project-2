import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Dashboard from "../Dashboard";
import Input from "../../components/Form/Input";
import SubmitButton from "../../components/Form/SubmitButton";

class Login extends Component {
    state = {
        email: "",
        password: ""
    };

    componentDidMount() {
        this.setState({
            email: "",
            password: ""
        })
    };

    handleInputChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };
    //check with Joe on routing and authentication redirects?
    handleFormSubmit = event => {
        event.preventDefault();
        API.signin({
            email: this.state.email,
            password: this.state.password
        })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div id="main-page-container">
                <video autoplay loop muted preload className="fullscreen-bg_video">
                    <source src="../../../video/Circuit_Background.mp4"/>
                </video>
                <div className="row" id="main-page-content-row">
                    <div className="col s1 m1 l1 xl2" id="left-bar-main">
                    </div>
                    <div class="col s10 m10 l10 xl8" id="main-page-content">
                        <h1 id="main-page-title">s<span id="o">0</span>cial3r</h1>
                        <div class="col s12 m12 l12 xl10 offset-xl1" id="card-col">
                            <div class="card" id="login-card">
                                <div class="card-content white-text" id="card-content">
                                    <div class="row" id="sign-in-row">
                                        <form id="signin" name="signin" method="post" action="signin">
                                            <label for="email" id="login-email-label">Email Address</label>
                                            <Input
                                                className="text"
                                                type="text"
                                                id="email"
                                                value={this.state.email}
                                                onChange={this.handleInputChange}
                                                name="email"
                                                placeholder="Email"
                                            />
                                            <label for="password" id="login-password-label">Password</label>
                                            <Input
                                                type="password"
                                                id="password"
                                                value={this.state.password}
                                                onChange={this.handleInputChange}
                                                name="password"
                                                placeholder="Password"
                                            />
                                            <SubmitButton className="btn" type="submit" value="Sign In" id="sign-in-button"/>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col s1 m1 l1 xl2" id="right-bar-main">
                    </div>
                </div>
            </div>
        )
    }
}

export default Login; 