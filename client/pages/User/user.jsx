import React from 'react';
import { Button, Input, Pagination } from 'antd';
import styles from './user.less';
import GlobalServers from '@server/global.js'
import YTable from '@components/Table/YTable.jsx';

class User extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      dataList: [],
      total: 0,
      pageSize: 10,
      pageNum: 1
    }
  }
  componentDidMount(){
    this.query()
  }

  async query(){
    const res = await GlobalServers.getUser({
      params: {
        pageNum: this.state.pageNum,
        pageSize: this.state.pageSize
      }
    })
    if(res && res.code === 200){
      this.setState({
        dataList: res.data.rows,
        total: res.data.total
      })
    }
  }
  // 分页
  pagChange = (num)=>{
    this.setState(
      {
        pageNum: num
      }, ()=> {
      this.query()
    })
  }

  render(){
    const columns = [
      {
        title: '账户名',
        key: 'name'
      },{
        title: '角色',
        key: 'roleName'
      },{
        title: '登入账号',
        key: 'account'
      },{
        title: '操作',
        key: 'oper'
      }
    ]
    return (
      <div className={styles.root}>
        <div className={styles.search}>
          <div className={styles.searchUnit}>
            <label className={styles.label}>账户名</label>
            <Input className={styles.input}/>
          </div>
          <Button type="primary" >查询</Button>
          <Button>重置</Button>
        </div>
        <div className={styles.container}>
          <YTable columns={columns} dataSource = {this.state.dataList}></YTable>
          <Pagination total={this.state.total} className={styles.pagina} onChange={this.pagChange}/>
        </div>
      </div>
    )
  }
}

export default User
