import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Detail from './detail.js';
import User from './user.jsx';
import styles from './home.less';

export default class Home extends React.Component {
  constructor(props){
    super(props)

  }

  render (){
    return (
      <div className={styles.home}>
        <div className={styles.nav}>
          首页
        </div>
        <div className={styles.main}>
          <header>头部</header>
          <main>
            <Switch>
              <Route path="/home/detail" component={Detail}></Route>
              <Route path="/home/user" component={User}></Route>
              <Redirect to="/home/detail"/>
            </Switch>
          </main>
          <footer></footer>
        </div>
      </div>
    )
  }
}
