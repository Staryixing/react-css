import { HashRouter, Route, Switch } from "react-router-dom";
import React, { Suspense } from 'react';
const Login = React.lazy(() => import('../pages/Login/login'));
const Home = React.lazy(() => import('../pages/Home/home'));

const BasicRoute = () => {
  return (
    <HashRouter>
        <Suspense fallback={<div>loading...</div>}>
          <Switch>
            {/* <Route exact path="/" component={Login}></Route>
            <Route path="/home" component={Home}></Route> */}
            <Route exact path="/" render={props=> <Login {...props} />}></Route>
            <Route path="/home" render={props=> <Home {...props} />}></Route>
          </Switch>
        </Suspense>
    </HashRouter>
  );
}

export default BasicRoute
