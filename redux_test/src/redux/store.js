import {createStore,applyMiddleware,combineReducers} from 'redux'
import countReducer from './reducers/count'
import personReducer from './reducers/person'
import thunk from 'redux-thunk'

const allReducers = combineReducers({
    count:countReducer,
    people:personReducer
})
export default createStore(allReducers,applyMiddleware(thunk))