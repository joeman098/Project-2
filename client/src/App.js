import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
// import ProfileList from "./pages/ProfileList";
import NoMatch from "./pages/NoMatch";
import Feed from "./pages/Feed";
import Browse from "./pages/Browse";
import socialit from "./pages/socialit"

const App = () =>
<Router>
  <div>
    <Switch>
        <Route exact path="/" component = {Login} />
        {/* <Route exact path="/dashboard" component = {Dashboard} /> */}
        <Route exact path="/stream/:channel" component={Feed} />
        {/* <Route exact path="dashboard/update" component={UpdateDashboard} /> */}
        <Route exact path="/profile/:id" component={Profile} />
        {/* <Route exact path="profilelist" component={ProfileList} /> */}
        <Route exact path="/Browse" component={Browse} />
        <Route exact path="/socialit/:channel" component={socialit} />
        <Route component={NoMatch} />
    </Switch>
  </div>
</Router>

export default App;
