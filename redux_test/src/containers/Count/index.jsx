// import CountUI from '../../components/Count'
// import store from '../../redux/store'
import {connect} from 'react-redux'
import {
    actionIncrementCreater,
    actionDecrementCreater,
    actionIncrementAsyncCreater
} from '../../redux/actions/count'
import React, {Component} from "react";

/*
function mapStateToProps(state){
    return {count:state}
}

function mapDispatchToProps(dispatch){
    return {
        increment:(num)=>{dispatch(actionIncrementCreater(num))},
        decrement:(num)=>{dispatch(actionDecrementCreater(num))},
        incrementAsync:(num,time)=>{dispatch(actionIncrementAsyncCreater(num,time))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CountUI)
*/


class CountUI extends Component{

    state={name:'yzk'}//自己的随便写

    // componentDidMount(){
    //     store.subscribe(()=>{
    //         this.setState({})
    //     })
    // }

    increment=()=>{
        const {value} = this.selectNumber
        // console.log(this.selectNumber,count,value)
        // store.dispatch({type:'increment',data:value*1})
        // store.dispatch(actionIncrementCreater(value*1))
        this.props.increment(value*1)
    }
    decrement=()=>{
        const {value} = this.selectNumber
        this.props.decrement(value*1)
    }
    incrementIfOdd=()=>{
        const {value} = this.selectNumber
        if(this.props.count%2!==0)
            this.props.increment(value*1)
    }
    incrementAsync=()=>{
        const {value} = this.selectNumber
        this.props.incrementAsync(value*1,500)
    }

    render(){
        return(
            <div>
                <h2>Count Component, Records of Person:{this.props.personResult.length}</h2>
                <h3>sum:{this.props.count}</h3>
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>incrementIfOdd</button>&nbsp;
                <button onClick={this.incrementAsync}>incrementAsync</button>&nbsp;
            </div>
        )
    }
}


export default connect(
    state=>({count:state.count,personResult:state.people}), //箭头函数想默认返回一个对象要包小括号

    //简化 一般形式
    /*dispatch=>({
        increment:(num)=>{dispatch(actionIncrementCreater(num))},
        decrement:(num)=>{dispatch(actionDecrementCreater(num))},
        incrementAsync:(num,time)=>{dispatch(actionIncrementAsyncCreater(num,time))}
    })*/

    //简化简写形式，mapDispatchToProps可以写为一个对象 而不用写一个函数了
    //不用传参，底层直接帮调用dispatch
    {
        increment:actionIncrementCreater,
        decrement:actionDecrementCreater,
        incrementAsync:actionIncrementAsyncCreater
    }
)(CountUI)