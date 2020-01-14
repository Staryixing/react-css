import React, { Component } from 'react';
import { connect } from '../../react-redux';
import actions from '../../store/counter';

class Conuter extends Component{
  render(){
    return (
      <div>
        <p>{`number: ${this.props.number}`}</p>
        <button onClick={() => {this.props.add(2)}}>+</button>
        <button onClick={() => {this.props.minus(2)}}>-</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  number:state.counter.number
})

const mapDispatachToProps = (dispatch) => ({
  add:(num) => {
    dispatch(actions.add(num))
  },
  minus: (num)=> {
    dispatch(actions.minus(num))
  }
})

export default connect(mapStateToProps, mapDispatachToProps)(Conuter)
