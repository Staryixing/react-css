import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default function connect(mapStateToProps, mapDispatchToProps){
  return function wrapWithConnect(WrappedComponent){
    return class Connect extends Component {
      static contextType = {
        store: PropTypes.shape({
          subscript: PropTypes.func.isRequired,
          dispatch: PropTypes.func.isRequired,
          getState: PropTypes.func.isRequired
        }).isRequired
      }
      constructor(props, context){
        super(props, context)
        this.store = context.store;
        this.state = mapStateToProps(this.store.getState());
        this.mappedDispatch = mapDispatchToProps(this.store.dispatch);

      }
      componentDidMount(){
        this.unsub = this.store.subscript(() => {
          const mappedState = mapStateToProps(this.store.getState())
          this.setState(mappedState)
        })
      }
      componentWillUnmount(){
        this.unsub()
      }
      render(){
        return (
          <WrappedComponent {...this.state} {...this.props} {...this.mappedDispatch}/>
        )
      }
    }
  }
}
