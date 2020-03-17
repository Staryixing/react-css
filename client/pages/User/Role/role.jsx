import React from 'react';
import { connect } from 'react-redux';

class Role extends React.Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }

  componentDidMount(){
   // let { setPageTitle,setRoleList } = this.props


  }

  render(){
    let { pageTitle } = this.props;
    return (
      <div>
        角色管理
        <h1>{pageTitle}</h1>
      </div>
    )
  }
}

const mapStateToProps = (state)=> {
  return {
    pageTitle: state.pageTitle,
    // userList: state.infoList
  }
}   

const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    setPageTitle(){

    },
    // setInfoList(){

    // }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Role)
