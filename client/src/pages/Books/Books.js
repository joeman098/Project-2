import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Books extends Component {


  render() {
    return (
      <div id="main-page-container">
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
                                <input className="text" name="email" type="text" id="email" />
                                <label for="password" id="login-password-label">Password</label>
                                <input name="password" type="password" id="password"/>
                                <input className="btn" type="submit" value="Sign In" id="sign-in-button"/>
                            </form>



                        </div>
                    </div>
                    <div className="row">
                        <div className="card-action" id="login-card-links">
                            <button type="submit" id="register">REGISTER</button>
                            <a href="/forgot" id="forgot-password">Forgot password</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div className="col s1 m1 l1 xl2" id="right-bar-main">
        </div>
    </div>
</div>
    );
  }
}

export default Books;
