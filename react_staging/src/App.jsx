import React, { Component } from 'react'
import {Button,DatePicker} from 'antd'
import {GithubOutlined} from '@ant-design/icons'
import moment from 'moment';
import 'antd/dist/antd.css'
const { RangePicker } = DatePicker;

export default class App extends Component {
	render() {
		return (
			<div>
				App....
				<Button type="primary">Click me</Button>
				<Button>Click me</Button>
				<Button type="link">Click me</Button>
				<Button type="ghost">Click me</Button>
				<Button type="dashed">Click me</Button>
				<GithubOutlined />
				<DatePicker />
				<RangePicker />
			</div>
		)
	}
}
