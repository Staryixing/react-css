import React from 'react';
import styles from './YTable.less';
import PropTypes from 'prop-types';


class YTable extends React.PureComponent{

		readerTd(list){
			return <tr key={list.id}>
				{
					this.props.columns.map((item, index) => {
						return <td key={index}>
							{list[item.key]}
						</td>
					})
				}
			</tr>
		}

    render(){
        return (
						<table className={styles.table}>
							<thead className={styles.thead}>
								<tr>
										{
											this.props.columns.map(item => (
											<th align="center" key={item.key}>{item.title}</th>
											))
										}
								</tr>
							</thead>
							<tbody>
									{
										this.props.dataSource.map(i =>{
											return  this.readerTd(i)
										})
									}
							</tbody>
						</table>
        )
    }
}

YTable.propTypes = {
	columns: PropTypes.array,
	dataSource: PropTypes.array
}
YTable.defaultProps = {
	columns: [],
	dataSource: []
}

export default YTable
