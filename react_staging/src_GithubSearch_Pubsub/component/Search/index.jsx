import React, {Component} from 'react'
import Pubsub from 'pubsub-js'
import axios from 'axios'

export default class Search extends Component{

    search = () =>{
        const {keyWordElement:{value:keyWord}} = this //获取用户的输入(连续解构赋值+重命名)
        Pubsub.publish('yzk',{isFirst:false,isLoading:true})
        // this.props.updateAppState({isFirst:false,isLoading:true})
        axios.get(`/api1/search/users?q=${keyWord}`).then(
            response=>{
                Pubsub.publish('yzk',{isLoading:false,users:response.data.items})
                // this.props.updateAppState({isLoading:false,users:response.data.items})
            },error=>{
                Pubsub.publish('yzk',{isLoading:false,err:error.message})
                // this.props.updateAppState({isLoading:false,err:error.message})
            }
        )
    }

    render(){
        return(
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={c=>this.keyWordElement=c} type="text" placeholder="Enter the name you search"/>&nbsp;
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
}