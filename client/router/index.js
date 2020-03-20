import { HashRouter, Route, Switch } from "react-router-dom";
import React, { Suspense } from 'react';
const Login = React.lazy(() => import('../pages/Login/login'));
const Home = React.lazy(() => import('../pages/Home/home'));
// import Login from '../pages/Login/login';
// import Home from '../pages/Home/home';

const BasicRoute = () => {
  return (
    <HashRouter>
      <div>
        <Suspense fallback={<div>loading...</div>}>
          <Switch>
            {/* <Route exact path="/" component={Login}></Route>
            <Route path="/home" component={Home}></Route> */}
            <Route exact path="/" render={props=> <Login {...props} />}></Route>
            <Route path="/home" render={props=> <Home {...props} />}></Route>
          </Switch>
        </Suspense>
      </div>
    </HashRouter>
  );
}

export default BasicRoute
