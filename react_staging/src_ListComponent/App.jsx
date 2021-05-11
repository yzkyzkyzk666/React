import React, {Component} from 'react'
import Header from './component/Header'
import List from './component/List'
import Footer from './component/Footer'
import './App.css'

export default class extends Component{

    state={todos:[
            {id:'001',name:'吃饭',done:'true'},
            {id:'002',name:'睡觉',done:'true'},
            {id:'003',name:'敲代码',done:'false'}
        ]}

    addTodo=(todoObj)=>{
        const {todos} = this.state
        const newTodos = [todoObj,...todos]
        this.setState({todos:newTodos})
    }

    // updateTodo=(todoObj)=>{
    //     const {todos} = this.state
    //     const {done} = todoObj.done
    //     const newTodos = todos.map((todo)=>{
    //         if(todoObj.id===todo.id){
    //             return {...todo, done}
    //         }
    //         else return todoObj
    //     })
    //     this.setState({todos:newTodos})
    // }     -----------------------------------这样新obj id和原来一样会报错，直接修改对应id的obj不用新建obj就行

    updateTodo=(id,done)=>{
        const {todos} = this.state
        const newTodos = todos.map((todo)=>{
            if(todo.id===id){
                return {...todo, done}
            }
            else return todo
        })
        this.setState({todos:newTodos})
    }

    deleteTodo=(id)=>{
        const {todos} = this.state
        const newTodos=todos.filter((todo)=>{
            return todo.id!==id
        })
        this.setState({todos:newTodos})
    }

    checkAllTodo=(done)=>{
        const {todos} = this.state
        const newTodos = todos.map((todo)=>{
            return {...todo,done}/*done:done*/
        })
        this.setState({todos:newTodos})
    }

    clearAllDone=()=>{
        const {todos} = this.state
        const newTodos = todos.filter((todo)=>{
            return !todo.done /*todo.done===false*/
        })
        this.setState({todos:newTodos})
    }

    render(){
        const {todos} = this.state
        return(
            <div className="todo-container">
                <div className="todo-wrap">
                  <Header addTodo={this.addTodo}/>
                  <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                  <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
                </div>
            </div>
        )
    }
}