import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { Menu, Icon } from 'antd';
import User from '../User/user.jsx';
import Role from '../User/Role/role';
import Permission from '../User/Permission/permission';
import styles from './home.less';
const { SubMenu } = Menu;

export default class Home extends React.Component {
  constructor(props){
    super(props)

  }
  handleClick(e){
    // console.log('e',e)
  }
  jumpto(link){
    this.props.history.push(link)
  }
  render (){
    return (
      <div className={styles.home}>
        <div className={styles.nav}>
          <Menu
            onClick={this.handleClick}
            style={{ width: 200 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline">
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="team" />
                <span>权限管理</span>
              </span>
            }>
            <Menu.Item key="1" onClick={() =>this.jumpto('/home/user')}>用户管理</Menu.Item>
            <Menu.Item key="2" onClick={() =>this.jumpto('/home/role')}>角色管理</Menu.Item>
            <Menu.Item key="3" onClick={() =>this.jumpto('/home/permission')}>权限管理</Menu.Item>
          </SubMenu>
        </Menu>
        </div>
        <div className={styles.main}>
          <header className={styles.header}>头部</header>
          <main>
            <Switch>
          <Route path="/home/user" render={props=> <User {...props} />}></Route>
          <Route path="/home/role" render={props=> <Role {...props} />}></Route>
          <Route path="/home/permission" render={props=> <Permission {...props} />}></Route>
              {/* <Route path="/home/user" component={User}></Route>
              <Route path="/home/role" component={Role}></Route>
              <Route path="/home/permission" component={Permission}></Route> */}
              <Redirect to="/home/user"/>
            </Switch>
          </main>
          <footer></footer>
        </div>
      </div>
    )
  }
}
