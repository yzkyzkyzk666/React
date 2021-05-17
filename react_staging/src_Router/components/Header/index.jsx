import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

class Header extends Component {

    goBack=()=>{
        this.props.history.goBack()
    }

    goForward=()=>{
        this.props.history.goForward()
    }

    go=()=>{
        this.props.history.go(2)
    }

    render() {
        return (
            <div className="page-header">
                <h2>React Router Demo</h2>
                <button onClick={this.goBack}>GoBack</button>
                <button onClick={this.goForward}>GoForward</button>
                <button onClick={this.go}>Go</button>
            </div>
        )
    }
}

export default withRouter(Header)
//withRouter可以加工一般组件，让一般组件能够具备路由组件所特有的API
//withRouter返回值是一个新组件