import React, {Component} from 'react'
import {NavLink,BrowserRouter,Route} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Header from './components/Header'

export default class App extends Component{
	render(){
		return(
			<div>
				<div className="row">
					<div className="col-xs-offset-2 col-xs-8">
						<Header/>
					</div>
				</div>
				{/*<BrowserRouter>*/}
				<div className="row">
					<div className="col-xs-2 col-xs-offset-2">
						<div className="list-group">
							{/*原生html中是通过<a>标签来实现跳转到不同的页面*/}
							{/*<a className="list-group-item active" href="./about.html">About</a>*/}
							{/*<a className="list-group-item" href="./home.html">Home</a>*/}

							{/*在React中通过路由链接实现切换组件---编写路由路径*/}
							{/*必须在Link外侧包裹一个Router,Router必须指定是BrowserRouter还是HashRouter*/}
							{/*<BrowserRouter>但是这里的路由器并不能和下面的路由器互通，所以应该把路由器写在外侧统一管理*/}

							{/*<Link className="list-group-item" to="/about">About</Link>*/}
							{/*<Link className="list-group-item" to="/home">Home</Link>*/}

							{/*NavLink的设计理念是你点谁他就会给谁默认追加一个央视的类名active，刚好bootstrap里带active类名的会高亮*/}
							{/*当然NaveLink里也可以自定义activeClassName="xxx"(默认是active可不写)*/}
							<NavLink activeClassName="yzk" className="list-group-item" to="/about">About</NavLink>
							<NavLink activeClassName="yzk" className="list-group-item" to="/home">Home</NavLink>
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
				{/*</BrowserRouter>*/}
			</div>
		)
	}
}