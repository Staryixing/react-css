import React, {PureComponent, Component,Fragment } from 'react';
import memoize from 'memoize-one';

class Example extends Component{
		state = {
			filterText: ''
		}
		filter = memoize(
			(list, filterText) => list.filter(item => item.text.includes(filterText))
		)
		
		handleChange = event => {
			this.setState({ filterText: event.target.value });
		}

		render(){
			const filteredList = this.filter(this.props.list, this.state.filterText);
			return (
				<Fragment>
					<input onChange={this.handleChange} value={this.state.filterText} />
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
