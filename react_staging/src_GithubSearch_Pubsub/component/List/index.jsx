import React, {Component} from 'react'
import Pubsub from 'pubsub-js'
import './index.css'

export default class List extends Component{

    state = {
        users:[],
        isFirst:true,
        isLoading:false,
        err:''
    }

    componentDidMount(){
        const token = Pubsub.subscribe('yzk',(_,stateObj)=>{ //应该是个msg，不想写的话这里_占个位
            this.setState(stateObj)
        })
    }

    componentWillUnmount(){
        Pubsub.unsubscribe(this.token)
    }

    render() {
        const {users,isFirst,isLoading,err} = this.state
        return(
            <div className="row">
                {
                    isFirst?<h2>Welcome! Please search the users here!</h2>:
                    isLoading?<h2>Loading......</h2>:
                    err?<h3 style={{color:'red'}}>{err}</h3>:
                    users.map((userObj) => {
                        return (
                            <div key={userObj.id} className="card">
                                <a rel="noreferrer" href={userObj.html_url} target="_blank">
                                    <img alt="avatar" src={userObj.avatar_url} style={{width: '100px'}}/>
                                </a>
                                <p className="card-text">{userObj.login}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}