import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../components/Login';
import Signin from '../components/Signin';
import Dasboard from '../components/Dasboard';
import Showdata from '../components/Showdata';
import Landingpage from '../components/Landingpage';

const Routers = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landingpage} />
        <Route path="/Login" component={Login} />
        <Route path="/Signup" component={Signin} />
        <Route path="/Showdata" component={Showdata} />
        <Route path="/Dasboard" component={Dasboard} />
      </Switch>
    </Router>
  );
};

export default Routers;
