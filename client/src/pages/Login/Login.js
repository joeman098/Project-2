import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Dashboard from "../Dashboard";

class Login extends Component {
    state = {
        email: "",
        password: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };
    //check with Joe on routing and authentication redirects
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
        <div id="main-page-container">
            <video autoplay loop muted preload className="fullscreen-bg_video">
                <source src="../../../public/video/Circuit_Background.mp4" type="video/mp4">
            </video>
            <div className="row" id="main-page-content-row">
                <div className="col s1 m1 l1 xl2" id="left-bar-main">
                </div>
                <div className="col s10 m10 l10 xl8" id="main-page-content">
                    <h1 id="main-page-title">s<span id="o">0</span>cial3r</h1>
                    <div className="col s12 m12 l12 xl10 offset-xl1" id="card-col">
                        <div className="card" id="login-card">
                            <div className="card-content white-text" id="card-content">

                                <div className="row" id="sign-in-row">
                                    <form id="signin" name="signin" method="post" action="signin">
                                        <label for="email" id="login-email-label">Email Address</label>
                                        <input className="text" name="email" type="text" id="email" onChange={this.handleInputChange} />
                                        <label for="password" id="login-password-label">Password</label>
                                        <input name="password" type="password" id="password" onChange={this.handleInputChange}/>
                                        <input class="btn" type="submit" value="Sign In" id="sign-in-button" onClick={this.handleFormSubmit}/>
                                    </form>

                                    <h1 id="message-headline"> {messages.error}</h1>
                                    <h1 id="message-headlinegood"> {messages.info}</h1>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col s1 m1 l1 xl2" id="right-bar-main">
                </div>
            </div>
        </div>
    }
}