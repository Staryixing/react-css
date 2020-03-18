import React from 'react';
import { connect } from 'react-redux';

class Permission extends React.Component{
  constructor(props){
    super(props)
    
  }
  render(){
    let { title,size } = this.props.titleModel;
    return (
      <div>
        <div>权限管理</div>
        <h1>{title}</h1>
      </div>
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
