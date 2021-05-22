import React,{Component} from 'react'

export default class Person extends Component{

    addPerson=()=>{
        const name = this.nameNode.value
        const age = this.ageNode.value
        console.log(name,age)
    }

    render(){
        return(
            <div>
                <h2>Person Component</h2>
                <input ref={c=>this.nameNode=c} type='text' placeholder='input name'/>
                <input ref={c=>this.ageNode=c} type='text' placeholder='input age'/>
                <button onClick={this.addPerson}>add</button>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </div>
        )
    }
}
