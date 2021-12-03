import {GET_LISTS, POST_LIST, PUT_TASK} from '../types';

export default function lists(state={}, action){
    switch (action.type) {
        case GET_LISTS:
            return{...state, lists:action.payload} 
        case POST_LIST:
            return{...state}
        case PUT_TASK:
            return{...state}
        default:
            return state;
    }
}