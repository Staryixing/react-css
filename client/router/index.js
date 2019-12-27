import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import React from 'react';
import Home from '../pages/home';
import Detail from '../pages/detail';

const BasicRoute = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Detail}></Route>
        <Route exact path="/detail" component={Detail}></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default BasicRoute
