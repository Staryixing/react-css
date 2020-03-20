import React from 'react';
import { connect } from 'react-redux';
import { Button, Input, Pagination,Modal,Select, message } from 'antd';
import styles from './user.less';
import GlobalServers from '@server/globalServer.js'
import YTable from '@components/Table/YTable.jsx';
import { setRoleList } from '@models/action.js';
import editorimg from '@assets/edit.png';
import deleteimg from '@assets/delete.png';

const { Option } = Select;

class User extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      dataList: [
        {
          id: 111,
          name: "账户01",
          roleId: '2',
          roleName: '运营',
          account: 'test'
        }
      ],
      total: 0,
      pageSize: 10,
      pageNum: 1,
      visible: false,
      userForm: {
        name: '',
        roleName: '',
        account: '',
        pwd: '',
      },
      selectRoleId: ''
    }
    this.addRole = this.addRole.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }
  componentDidMount(){
    let { queryRoleList } = this.props;
    queryRoleList()
    this.query()
  }

  shouldComponentUpdate(nextProps, nextState){
    return true
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
    this.setState({ pageNum: num }, ()=> { this.query() })
  }
  // 新增、编辑
  addRole(){
    this.setState({ visible: true })
  }
  handleOk(){
    this.addHandle()
    this.setState({ visible: false })
  }
  handleCancel(){
    this.setState({ visible: false });
    this.clearUserForm()
  }
  formChange (e, label){
    let param = this.state.userForm;
    param[label] = e.target.value;
    this.setState({
      userForm: param
    })
  }
  selectChange = (value,option,label)=>{
    let param = this.state.userForm;
    param[label] = value;
    this.setState({
      userForm: param,
      selectRoleId: option.key
    })
  }
  async addHandle(){
    let param = {
      name: this.state.userForm.name,
      roleId: this.state.selectRoleId,
      account: this.state.userForm.account,
      pwd: 'e10adc3949ba59abbe56e057f20f883e'
    }
    const res = await GlobalServers.addUser({
      params: param
    })
    if(res.code === 200){
      message.success('操作成功');
      this.clearUserForm()
    }
  }
  clearUserForm(){
     this.setState({
      userForm: {
        name: '',
        roleName: '',
        account: '',
        pwd: '',
      },
     })
  }
  render(){
    const columns = [
      {
        title: '账户名',
        key: 'name',
        dataIndex: 'name'
      },{
        title: '角色',
        key: 'roleName',
        dataIndex: 'roleName'
      },{
        title: '登入账号',
        key: 'account',
        dataIndex: 'account'
      },{
        title: '操作',
        key: 'oper',
        render: ()=>{
          return <div className={styles.oper}>
            <img src={editorimg} alt="" onClick={this.addRole}/>
            <img src={deleteimg} alt=""/>
          </div>
        }
      }
    ]
    const { dataList } = this.props.roleModel;
    return (
      <div className={styles.root}>
        <div className={styles.search}>
          <div className={styles.searchUnit}>
            <label className={styles.label}>账户名</label>
            <Input className={styles.input}/>
          </div>
          <Button type="primary" className='ml10'>查询</Button>
          <Button className='ml10'>重置</Button>
          <Button className='ml10' onClick={this.addRole}>新增</Button>  
        </div>
        <div className={styles.container}>
          <YTable columns={columns} dataSource = {this.state.dataList} />
          <Pagination total={this.state.total} className={styles.pagina} onChange={this.pagChange}/>
        </div>

        <Modal visible={this.state.visible} onOk={this.handleOk} 
          onCancel={this.handleCancel}
          title="新增">
            <div className={styles.formCont}>
              <div className={styles.formUnit}>
                <label className={styles.label}>账户名</label>
                <Input className={styles.input} value={this.state.userForm.name} 
                  onChange={(e) =>this.formChange(e,'name')}/>
              </div>
              <div className={styles.formUnit}>
                <label className={styles.label}>角色</label>
                <Select style={{ width: 200 }} value={this.state.userForm.roleName} 
                    onSelect={(value,option) => this.selectChange(value,option,'roleName')}>
                    {
                      dataList.map((item,index) => (
                        <Option key={item.id} value={item.name} >{item.name}</Option>
                      ))
                    }
                </Select>
              </div>
              <div className={styles.formUnit}>
                <label className={styles.label}>登入账号</label>
                <Input className={styles.input} value={this.state.userForm.account} 
                  onChange={(e) =>this.formChange(e,'account')}/>
              </div>
              <div className={styles.formUnit}>
                <label className={styles.label}>密码</label>
                <Input className={styles.input} value={this.state.userForm.pwd} 
                  onChange={(e) =>this.formChange(e,'pwd')}/>
              </div>
            </div>
        </Modal>
      </div>
    )
  }
}
const mapStateToProps = (state)=> {
  return {
    roleModel: state.roleModel
  }
}
const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    queryRoleList(data){
      dispatch(setRoleList(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User) 
