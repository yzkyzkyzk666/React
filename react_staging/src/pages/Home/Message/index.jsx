import React,{Component} from 'react'
import {Link,Route,Switch,Redirect} from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component{
    state={
        messageArr:[
            {id:'01',title:'message1'},
            {id:'02',title:'message2'},
            {id:'03',title:'message3'}
        ]
    }
    render(){
        const {messageArr} = this.state
        return(
            <div>
                <ul>
                    {
                        messageArr.map((messageObj)=>{
                            return(
                                <li key={messageObj.id}>
                                    {/* 向路由组件传递params参数 */}
                                    {/*<Link to={`/home/message/detail/${messageObj.id}/${messageObj.title}`}>{messageObj.title}</Link>*/}

                                    {/* 向路由组件传递search参数 */}
                                    {/*<Link to={`/home/message/detail/?id=${messageObj.id}&title=${messageObj.title}`}>{messageObj.title}</Link>*/}

                                    {/* 向路由组件传递search参数 */}
                                    <Link replace={true} to={{pathname:"/home/message/detail",state:{id:messageObj.id,title:messageObj.title}}}>{messageObj.title}</Link>
                                </li>

                            )
                        })
                    }
                {/*map外侧的{}别忘记写，忘记好多次了...*/}
                </ul>
                <hr/>
                {/* 路由组件声明接收params参数 */}
                {/*<Route path="/home/message/detail/:id/:title" component={Detail}/>*/}

                {/* 接收search参数无需声明接收 */}
                {/*<Route path="/home/message/detail" component={Detail}/>*/}

                {/* 接收state参数无需声明接收 */}
                <Route path="/home/message/detail" component={Detail}/>
            </div>
        )
    }
}