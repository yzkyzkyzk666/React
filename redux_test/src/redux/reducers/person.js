import {ADD_PERSON} from "../constant";

const iniState=[{id:'001',name:'Tom',age:18}]
export default function personReducer(preState=iniState,action){
    const {type,data} = action
    switch(type){
        case 'ADD_PERSON':
            return [data,...preState]
        default:
            return preState
    }
}