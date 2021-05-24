import {INCREMENT,DECREMENT} from './constant'

// const actionIncrementCreater = (data) => {return {type:INCREMENT,data:data}}
export const actionIncrementCreater = data => ({type:INCREMENT,data})
export const actionDecrementCreater = data => ({type:DECREMENT,data})
export const actionIncrementAsyncCreater = (data,time) => {
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch(actionIncrementCreater(data))
        },time)
    }
}