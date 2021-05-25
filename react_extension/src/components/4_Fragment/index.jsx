import React, { Component,Fragment } from 'react'

export default class Demo extends Component {
	render() {
		return (
			// 遍历的时候可以用key,不然直接写空标签也行<></>,Fragment有key和children
			<Fragment key={1}>
				<input type="text"/>
				<input type="text"/>
			</Fragment>
		)
	}
}
