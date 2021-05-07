import React,{Component} from 'react'//{Component}不是用了解构赋值，而是export分别暴露，不止default，是react写好的
import hello from './index.module.css'

export default class Hello extends Component{
	render(){
		return <h2 className={hello.title}>Hello,React!</h2>
	}
}