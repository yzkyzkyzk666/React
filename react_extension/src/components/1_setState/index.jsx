import React, { Component } from 'react'

export default class Demo extends Component {

	state = {count:0}

	add = ()=>{
		//对象式的setState
		/* //1.获取原来的count值
		const {Count} = this.state
		//2.更新状态
		this.setState({Count:Count+1},()=>{
			console.log(this.state.Count);
		})
		//console.log('12行的输出',this.state.Count); //0 */

		//函数式的setState
		this.setState( state => ({count:state.count+1}))
	}

	render() {
		return (
			<div>
				<h1>当前求和为：{this.state.count}</h1>
				<button onClick={this.add}>点我+1</button>
			</div>
		)
	}
}
