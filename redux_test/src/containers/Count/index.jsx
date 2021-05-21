import CountUI from '../../components/Count'
// import store from '../../redux/store'
import {connect} from 'react-redux'
import {
    actionIncrementCreater,
    actionDecrementCreater,
    actionIncrementAsyncCreater
} from '../../redux/count_actionCreater'

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

export default connect(
    state=>({count:state}), //箭头函数想默认返回一个对象要包小括号

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