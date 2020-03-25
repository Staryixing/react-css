import React, {PureComponent, Component,Fragment } from 'react';

class Example extends PureComponent{
		state= {
			filterText: '',
		}
		handleChange = event=> {
			this.setState({filterText: event.target.value})
		}

		render(){
			// props.list 或 state.filterText 变化时才会调用
			const filteredList = this.props.list.filter(
				item => item.text.includes(this.state.filterText)
			)
			return (
				<Fragment>
					<input onChange={this.handleChange} value={this.state.filterText}/>
					<ul>
						{
							filteredList.map(item => <li key={item.id}>{item.text}</li>)
						}
					</ul>
				</Fragment>
			)
		}
}

export default Example
