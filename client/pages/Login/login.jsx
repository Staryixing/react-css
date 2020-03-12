import React from 'react';
import { Button, Form, Input } from 'antd';
import styles from './login.less';

class Login extends React.PureComponent{
		constructor(){
			super()
			// this.submit = this.submit.bind(this)
		}
		componentDidMount(){
			// this.submit()
		}

		submit = ()=>{
			console.log('this', this)
			this.props.history.push('/home')
		}
		foo(){
			const w = 1;
		}
    	render(){
				const layout = {
					labelCol: {
						span: 8,
					},
					wrapperCol: {
						span: 16,
					}
				};
				const tailLayout = {
					wrapperCol: { offset: 8, span: 16 },
				};
        return (
            <div className={styles.root}>
                <div className={styles.from}>
                    <div>登录界面</div>
                    <Input placeholder="Basic usage" />
					<Button onClick={this.submit} type="primary">登录</Button>
                </div>
            </div>
        )
    }
}

export default Login
