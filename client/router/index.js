import { HashRouter, Route, Switch } from "react-router-dom";
import React from 'react';
import Login from '../pages/Login/login';
import Home from '../pages/Home/home';

const BasicRoute = () => {
  return (
    <HashRouter>
      <div>
        <Switch>
          {/* <Route exact path="/" component={Login}></Route>
          <Route path="/home" component={Home}></Route> */}
          <Route exact path="/" render={props=> <Login {...props} />}></Route>
          <Route path="/home" render={props=> <Home {...props} />}></Route>
        </Switch>
      </div>
    </HashRouter>
  );
}

export default BasicRoute
