import { HashRouter, Route, Switch, Link } from "react-router-dom";
import React from 'react';
import Home from '../pages/home';
import Detail from '../pages/detail.js';
import User from '../pages/user';

const BasicRoute = () => {
  return (
    <HashRouter>
      <div className="root">
        <nav>
          <ul>
            <li>
              <Link to="/home">home</Link>
            </li>
            <li>
              <Link to="/detail">detail </Link>
            </li>
            <li>
              <Link to="/user">user </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/home" component={Home}></Route>
          <Route path="/detail" component={Detail}></Route>
          <Route path="/user" component={User}></Route>
        </Switch>
      </div>
    </HashRouter>
  );
}

export default BasicRoute
