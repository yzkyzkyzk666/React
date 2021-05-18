import React, { Component } from 'react'
import {NavLink} from "react-router-dom";

export default class Home extends Component {
    render() {
        console.log(this.props)
        return (
            <NavLink activeClassName="yzk" className="list-group-item" {...this.props} />
        )
    }
}