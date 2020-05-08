import React from 'react';
import { Button, Form, Input } from 'antd';
import styles from './login.less';
import GlobalServers from '@server/globalServer.js';

class Login extends React.PureComponent{
		constructor(){
			super()
			this.submit = this.submit.bind(this)
		}
		
		componentDidMount(){

		}

		async submit (){
			// console.log('this', this)
			let res = await GlobalServers.login({
				params: {
					userName: 'admin',
					pwd: "e10adc3949ba59abbe56e057f20f883e"
				}
			}) 
			if(res.code === 200){
				this.props.history.push('/home')
				sessionStorage.setItem('userInfo',JSON.stringify(res.data))
			}
		}
		
    	render(){
			return (
				<div className={styles.root}>
					<div className={styles.from}>
						<div>登录界面</div>
						<input type="checkbox" />
						<Input placeholder="请输入用户名" style={{ marginTop: 20 }}/>
						<Input placeholder="请输入密码" style={{ marginTop: 20 }}/>
						<Button onClick={this.submit} type="primary" className={styles.subbtn}>登录</Button>
					</div>
				</div>
			)
		}
}

export default Login
