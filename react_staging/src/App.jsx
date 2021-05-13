import React, {Component} from 'react'
import {Link,BrowserRouter,Route} from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'

export default class App extends Component{
	render(){
		return(
			<div>
				<div className="row">
					<div className="col-xs-offset-2 col-xs-8">
						<div className="page-header"><h2>React Router Demo</h2></div>
					</div>
				</div>
				<BrowserRouter>
					<div className="row">
						<div className="col-xs-2 col-xs-offset-2">
							<div className="list-group">
								{/*原生html中是通过<a>标签来实现跳转到不同的页面*/}
								{/*<a className="list-group-item active" href="./about.html">About</a>*/}
								{/*<a className="list-group-item" href="./home.html">Home</a>*/}

								{/*在React中通过路由链接实现切换组件---编写路由路径*/}
								{/*必须在Link外侧包裹一个Router,Router必须指定是BrowserRouter还是HashRouter*/}
								{/*<BrowserRouter>但是这里的路由器并不能和下面的路由器互通，所以应该把路由器写在外侧统一管理*/}
								<Link className="list-group-item active" to="/about">About</Link>
								<Link className="list-group-item active" to="/home">Home</Link>
								{/*</BrowserRouter>*/}
							</div>
						</div>
						<div className="col-xs-6">
							<div className="panel">
								<div className="panel-body">
									{/*注册路由---就是一个映射关系*/}
									{/*必须在Route外侧包裹一个Router,Router必须指定是BrowserRouter还是HashRouter*/}
									{/*<BrowserRouter>*/}
									<Route path="/about" component={About}/>
									<Route path="/home" component={Home}/>
									{/*</BrowserRouter>*/}
								</div>
							</div>
						</div>
					</div>
				</BrowserRouter>
			</div>
		)
	}
}