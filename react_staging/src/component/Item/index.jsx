import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class Item extends Component{

    static propTypes={
        updateTodo:PropTypes.func.isRequired,
        deleteTodo:PropTypes.func.isRequired
    }

    state={mouse:false}

    handleMouse=(flag)=>{
        return ()=>{
            this.setState({mouse:flag})
        }
    }

    // handleCheck=(id)=>{
    //     return (event)=>{
    //         const todoObj = {id:id,name:name,done:event.target.checked}
    //         this.props.updateTodo(todoObj)
    //     }
    // }

    handleCheck=(id)=>{
        return (event)=>{
            this.props.updateTodo(id,event.target.checked)
        }
    }

    // handleDelete=(id)=>{
    //     return ()=>{
    //         this.props.deleteTodo(id)
    //     }
    // }

    handleDelete=(id)=>{
        if(window.confirm('确定删除所选项嘛？'))
            this.props.deleteTodo(id)
    }

//checked搭配onChange使用，一个是父传子，一个是子改变父

    render(){
        const {id,name,done} = this.props
        const {mouse} = this.state
        return(
            <li style={{backgroundColor: mouse ? '#ddd' : ''}} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
                <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
                <span>{name}</span>
                {/*<button className="btn btn-danger" style={{display:mouse?'block':'none'}} onClick={handleDelete(id)}>删除</button>*/}
                <button className="btn btn-danger" style={{display: mouse ? 'block' : 'none'}} onClick={()=>this.handleDelete(id)}>删除</button>
            </li>
        )
    }
}