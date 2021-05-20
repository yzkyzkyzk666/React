import CountUI from '../../components/Count'
// import store from '../../redux/store'
import {connect} from 'react-redux'
import {
    actionIncrementCreater,
    actionDecrementCreater,
    actionIncrementAsyncCreater
} from '../../redux/count_actionCreater'

function mapStateToProps(state){
    return {count:state}
}

function mapDispatchToProps(dispatch){
    return {
        increment:(num)=>{dispatch(actionIncrementCreater(num))},
        decrement:(num)=>{dispatch(actionDecrementCreater(num))},
        incrementAsync:(num,time)=>{dispatch(actionIncrementAsyncCreater(num,time))},
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CountUI)