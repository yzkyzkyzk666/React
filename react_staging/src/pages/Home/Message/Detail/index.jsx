import React,{Component} from 'react'

const detailData = [
    {id:'01',content:'Hello'},
    {id:'02',content:'Hello yzk'},
    {id:'03',content:'Hello new world'}
]
export default class Detail extends Component{
    render(){
        //接收params参数
        console.log(this.props)
        const {id,title} = this.props.match.params
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