import React, {Component} from 'react'
import Item from '../Item'
import PropTypes from "prop-types";
import './index.css'

export default class List extends Component{

    static propTypes={
        todos:PropTypes.array.isRequired,
        updateTodo:PropTypes.func.isRequired,
        deleteTodo:PropTypes.func.isRequired
    }

    render(){
        const {todos,updateTodo,deleteTodo}=this.props
        return(
            <ul className="todo-main">
                {
                    todos.map((todo)=>{
                       {/*return <Item key={todo.id} id={todo.id} name={todo.name} done={todo.done}/>*/}
                       return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
                    })
                }
            </ul>
        )
    }
}