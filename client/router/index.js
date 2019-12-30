import { HashRouter, Route, Switch, Link } from "react-router-dom";
import React from 'react';
import Home from '../pages/home';
import Detail from '../pages/detail.js';

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
          </ul>
        </nav>
        <Switch>
          <Route path="/home" component={Home}></Route>
          <Route path="/detail" component={Detail}></Route>
        </Switch>
      </div>
    </HashRouter>
  );
}

export default BasicRoute
