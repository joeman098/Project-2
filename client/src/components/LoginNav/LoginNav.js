import React from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Form/Input";
import "./LoginNav.css";

const LoginNav = props =>
    <nav className="row" id="login-nav">
        <h3 id="login-logo">0</h3>
        <span className="input-field col m6 offset-m6 l6 offset-l3" id="post-bar-col">
            <Input 
                placeholder="Search"
                name="search"
                type="text"
                id="search-input"
                onChange={props.handleInputChange}
            />
            <Input 
                className="btn" 
                type="submit" 
                value="SEARCH" 
                id="search-button" 
                onClick={props.handleSearchSubmit}
            />
        </span>
        <ul id="nav-dashboard" className="right hide-on-small-only chat-nav-links">
            <li><Link to={"/profilelist"} className="" id="main-chat-link">PROFILE LIST</Link></li>
        </ul>
    </nav>

export default LoginNav;