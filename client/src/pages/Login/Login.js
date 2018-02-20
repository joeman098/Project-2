import React, { Component } from "react";
import Input from "../../components/Form/Input";
import SubmitButton from "../../components/Form/SubmitButton";
import "./Login.css";

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

    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     API.signin({
    //         email: this.state.email,
    //         password: this.state.password
    //     })
    //     .then(res => console.log(res))
    //     .catch(err => console.log(err));
    // }


    render() {
        return (
            <div id="main-page-container">
                <video autoPlay loop muted preload="true" className="fullscreen-bg_video">
                    <source src="../../../video/Circuit_Background.mp4"></source>
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
                                            <label htmlFor="email" id="login-email-label">Email Address</label>
                                            <Input
                                                className="text"
                                                type="text"
                                                id="email"
                                                value={this.state.email}
                                                onChange={this.handleInputChange}
                                                name="email"
                                            />
                                            <label htmlFor="password" id="login-password-label">Password</label>
                                            <Input
                                                type="password"
                                                id="password"
                                                value={this.state.password}
                                                onChange={this.handleInputChange}
                                                name="password"
                                            />

                                            <SubmitButton className="btn" type="submit" value="Sign In" id="sign-in-button"/>
                                        </form>
                                        <a href="http://127.0.0.1:3001/auth/twitch/callback"><button>Login with Twitch</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col s1 m1 l1 xl2" id="right-bar-main">
                    </div>
                </div>
            </div>
        )
    }
}

export default Login; 