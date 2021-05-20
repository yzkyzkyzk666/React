import React,{Component} from 'react'

export default class Count extends Component{

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
                <h2>sum:{this.props.count}</h2>
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