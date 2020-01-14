import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class Provider extends Component{
  static childContextTypes = {
    store: PropTypes.shape({
      store: PropTypes.func.isRequired,
      dispatch: PropTypes.func.isRequired,
      getState: PropTypes.func.isRequired
    }).isRequired
  }
  constructor(props){
    super(props);
    this.store = props.store;
  }
  getChildContext(){
    return {
      store: this.store
    }
  }

  render(){
    return this.props.children
  }
}