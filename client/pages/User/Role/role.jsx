import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { inTitle,deTitle } from '@models/action.js'
class Role extends React.Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }

  componentDidMount(){
   // let { setPageTitle,setRoleList } = this.props
  }
  add =()=>{
    let { inTitle } = this.props;
    inTitle({
      a: 1
    })
  }
  del = ()=> {
    let { deTitle } = this.props
    deTitle({})
  }
  render(){
    let { title,size } = this.props.titleModel;
    return (
      <div>
        角色管理
        <h1>{title}</h1>
        <h1>{size}</h1>
        <Button onClick={this.add}>+</Button>
        <Button onClick={this.del}>-</Button>
      </div>
    )
  }
}

const mapStateToProps = (state)=> {
  return {
    titleModel: state.titleModel,
  }
}   

const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    inTitle(data){
      dispatch(
        inTitle(data)
      )
    },
    deTitle(data){
      dispatch(
        deTitle(data)
      )
    } 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Role)
// export default Role
