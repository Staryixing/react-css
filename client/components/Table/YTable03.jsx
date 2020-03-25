import React from 'react';
import styles from './YTable.less';
import PropTypes from 'prop-types';
import memoize from 'memoize-one';
/**
 * 在render中设置变量， 变成了单选
 */
class YTable extends React.Component{
		constructor(props){
			super(props)
			this.state = {
				rowAllSelect: false,
			}
		}
		
		// 单个选择
		selectChange(e, index){
			this.setState({
				selectValue: e.target.value,
				selectIndex: index
			})
		}

		// total选择
		allSelectChange(e){
			let value = e.target.checked;
			let { selectList} = this.state;
			selectList.forEach(el => {
				el.selected = value
			})
			this.setState({	
				selectList,
				rowAllSelect: value
			})
		}

		/**
		 * 渲染表格的数据的行
		 * @param {*} list 表格的每行数据
		 */
		getSelect = memoize((arr, value, index) =>{
			let selectList = [];
			arr.forEach(el => {
				selectList.push({
					selected: false
				})	
			})
			if(value && index){
				selectList[index].selected = value
			}
			return selectList
		})

		readerTd(list, index){
			const selectList = this.getSelect(this.props.dataSource, this.state.selectValue, this.state.selectIndex);
			
			return <tr key={list.id}>
				{
					this.props.rowSelection?<td>
						<div className={styles.checkbox}>
							<input type="checkbox" className={styles.check_orige} 
								checked={selectList[index].selected}
								onChange={(e)=>this.selectChange(e, index)}/>
						</div>
					</td>:null
				}
				{
					this.props.columns.map((item, index) => {
						if(item.dataIndex){
							return (
								<td key={index}>
									<div>{list[item.key]}</div>
								</td>
							)
						}else{
							return <td key={index}>
								<div>{item.render()}</div>
							</td>
						}
					})
				}
			</tr>
		}
		/**
		 * 渲染表头
		 * @param {*} item 
		 */
		renderTr(item){
			return (
				<th align="center" key={item.key}>
					<div>{item.title}</div>
				</th>
			)
		}
    render(){
				const dataList = this.props.dataSource;
        return (
						<table className={styles.table}>
							<thead className={styles.thead}>
								<tr>
										<th>单选</th>
										{
											this.props.columns.map(item => 
												{	return this.renderTr(item) }
											)
										}
								</tr>
							</thead>
							<tbody>
									{
										dataList.map((i, index) =>{
											return this.readerTd(i, index)
										})
									}
							</tbody>
						</table>
        )
    }
}

YTable.propTypes = {
	columns: PropTypes.array,
	dataSource: PropTypes.array,
	rowSelection: PropTypes.object
}
YTable.defaultProps = {
	columns: [{}],
	dataSource: [{}],
}

export default YTable
