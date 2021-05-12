import React, {Component} from 'react'
import Search from './component/Search'
import List from './component/List'

export default class App extends Component{

    state = {
        users:[],
        isFirst:true,
        isLoading:false,
        err:''
    }

    // saveUsers=(users)=>{
    //     this.setState({users})//记得要加{}！！！！！！！
    // }

    updateAppState=(stateObj)=>{
        this.setState(stateObj)
    }

    render(){
        const {users} = this.state
        return(
            <div className="container">
                <Search updateAppState={this.updateAppState}/>
                <List {...this.state}/>
            </div>
        )
    }
}