import React, {Component} from 'react'
import axios from 'axios'

export default class Search extends Component{

    search = () =>{
        // console.log(this.keyWordElement.value)
        // const {value} = this.keyWordElement
        const {keyWordElement:{value:keyWord}} = this
        axios.get(`/api1/search/users?q=${keyWord}`).then(
            response=>{
                console.log('成功了',response.data)
            },error=>{
                console.warn('失败了！',error)
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