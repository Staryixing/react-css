import React, { Component,Fragment } from 'react';

class Example extends Component{
    state = {
				filterText: "", // 输入框的搜索字
				prevFilterText: '', // 上次搜索的字
				filteredList: this.props.list, // 过滤之后的字
				prevPropsList: [] // 原始列表（从props传过来的
    }

    static getDerivedStateFromProps(props, state){
        if(
            props.list !== state.prevPropsList || 
            state.prevFilterText !== state.filterText
        ){
            return {
							prevPropsList: props.list,
							prevFilterText: state.filterText,
							filteredList: props.list.filter(item => item.text.includes(state.filterText))
						}
				}
				return null
		}
		
		handleChange = event => {
			this.setState({
				filterText: event.target.value
			})
		}
		
		render(){
			return (
				<Fragment>
						<input onChange={this.handleChange} value={this.state.filterText}/>
						<ul>
							{
								this.state.filteredList.map(item => <li key={item.id}>{item.text}</li>)
							}
						</ul>
				</Fragment>
			)
		}
}

export default Example
