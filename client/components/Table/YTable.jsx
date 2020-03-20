import React from 'react';
import styles from './YTable.less';
import PropTypes from 'prop-types';


class YTable extends React.PureComponent{
		/**
		 * 
		 * @param {*} list 表格的每行数据
		 */
		readerTd(list){
			return <tr key={list.id}>
				{
					this.props.columns.map((item, index) => {
						if(item.dataIndex){
							return <td key={index}>
								<div>{list[item.key]}</div>
							</td>
						}else{
							return <td key={index}>
								<div>{item.render()}</div>
							</td>
						}
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
											<th align="center" key={item.key}>
												<div>{item.title}</div></th>
											))
										}
								</tr>
							</thead>
							<tbody>
									{
										this.props.dataSource.map(i =>{
											return this.readerTd(i)
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
