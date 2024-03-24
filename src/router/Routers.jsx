import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../components/Login';
import Signin from '../components/Signin';
import Dasboard from '../components/Showdata';

const Routers = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={Signin} />
        <Route path="/dasboard" component={Dasboard} />
      </Switch>
    </Router>
  );
};

export default Routers;
