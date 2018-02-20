import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";
// import UpdateDashboard from "./pages/UpdateDashboard";
import Profile from "./pages/Profile";
import ProfileList from "./pages/ProfileList";
import NoMatch from "./pages/NoMatch";

const App = () =>
<Router>
  <div>
    <Switch>
    <Route exact path="/" component = {Login} />
    <Route exact path="/login" component = {Login} />
    {/* <Route exact path="/dashboard" component = {Dashboard} />
        <Route exact path="dashboard/update" component={UpdateDashboard} /> */}
        <Route exact path="/profile/:id" component = {Profile} />
        <Route exact path="profilelist" component= {ProfileList} />
        <Route component={NoMatch} />
    </Switch>
  </div>
</Router>

export default App;
