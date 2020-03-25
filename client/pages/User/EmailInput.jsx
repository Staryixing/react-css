import React, { Component } from 'react';

class EmailInput extends Component{
    state = {
        email: this.props.defaultEmail
    };

    render(){
        return <input onChange={this.handleChange} value={this.state.email}></input>
    }
    handleChange = event => {
        this.setState({
            email: event.target.value
        })
    }
    // componentWillReceiveProps(nextProps){
    //     if(nextProps.email !== this.props.email){
    //         this.setState({
    //             email: nextProps.email
    //         })
    //     }
    // } 
    // static getDerivedStateFromProps(nextProps, state){
    //     if(nextProps.email !== state.email){
    //         return {
    //             email: nextProps.email
    //         }
    //     }
    //     return null
    // } 

}

export default EmailInput
