import React,{Component} from 'react'
import {v4 as uuid} from 'uuid'
import {connect} from "react-redux";
import {actionAddPersonCreater} from "../../redux/actions/person";

class Person extends Component{

    addPerson=()=>{
        const name = this.nameNode.value
        const age = this.ageNode.value
        const personObj = {id:uuid(),name,age}
        // console.log(personObj)
        this.props.addPerson(personObj)
        this.nameNode.value=''
        this.ageNode.value=''
    }

    render(){
        return(
            <div>
                <h2>Person Component,Count above:{this.props.count}</h2>
                <input ref={c=>this.nameNode=c} type='text' placeholder='input name'/>
                <input ref={c=>this.ageNode=c} type='text' placeholder='input age'/>
                <button onClick={this.addPerson}>add</button>
                <ul>
                    {
                        this.props.personResult.map((p)=>{
                            return <li key={p.id}>name:{p.name}---age:{p.age}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default connect(
    state=>({personResult:state.people,count:state.count}),
    {addPerson:actionAddPersonCreater}
)(Person)
