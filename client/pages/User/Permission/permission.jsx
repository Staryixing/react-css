import React,{ Fragment } from 'react';
import { connect } from 'react-redux';
import { Button,Input } from 'antd';
import EmailInput from '../EmailInput.jsx';
import styles from './permission.less';
import Example from '../Example.jsx';

class Permission extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      searchName: '',
      emailList: [
        {
          email: 'xx@126.com',
          id: '11'
        },{
          email: 'yy@126.com',
          id: '12'
        }
      ],
      listData: [
        {
          id: '1',
          text: '小明'
        },{
          id: '2',
          text: '小红'
        },{
          id: '3',
          text: '小黄'
        },{
          id: '4',
          text: '小猫'
        }
      ]
    }
  }
  searchChange(e){
    let value = e.target.value;
    this.setState({
      searchName: value
    })
  }
  emailChange=()=>{
    this.setState({
      emailList: [
        {
          email: '@456.com',
          id: '11'
        },{
          email: '@789.com',
          id: '12'
        },{
          email: 'sss',
          id: '13'
        }
      ],
      listData: [
        {
          id: '1',
          text: '苹果'
        },{
          id: '2',
          text: '梨子'
        },{
          id: '3',
          text: '凤梨'
        },{
          id: '4',
          text: '香蕉'
        }
      ]
    })
  }
  render(){
    let { title,size } = this.props.titleModel;
    return (
      <Fragment>
        <div>权限管理</div>
        <Input className={styles.input} value={this.state.searchName} onChange={(e)=>this.searchChange(e)}/>
        <h1>{title}</h1>
        <div>
          {
            this.state.emailList.map((el,index) => {
              return <EmailInput defaultEmail={el.email} key={index}/>
            })
          }
          <Button onClick={this.emailChange}>改变</Button>
        </div>
        <div>
          <Example list={this.state.listData}/>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = (state)=> {
  return {
    titleModel: state.titleModel
  }
}
const mapDispatchToProps = ()=> {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Permission)
