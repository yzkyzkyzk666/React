import React,{Component} from 'react'
import qs from 'querystring'

const detailData = [
    {id:'01',content:'Hello'},
    {id:'02',content:'Hello yzk'},
    {id:'03',content:'Hello new world'}
]
export default class Detail extends Component{
    render(){
        console.log(this.props)
        //接收params参数
        // const {id,title} = this.props.match.params

        //接收search参数
        const {search} = this.props.location
        const {id,title} = qs.parse(search.slice(1))

        const findResult = detailData.find((detailObj)=>{
            return detailObj.id===id
        })
        return(
            <ul>
                <li>ID:{id}</li>
                <li>Title:{title}</li>
                <li>Content:{findResult.content}</li>
            </ul>
        )
    }
}