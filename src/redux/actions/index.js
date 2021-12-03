import axios from 'axios';
import {GET_LISTS, GET_REGISTER, POST_LIST, PUT_TASK} from '../types';

const URL = "https://todolist-fake-server.herokuapp.com";

export function getListsInfo(){
    const request = axios
    .get(`${URL}/to-do-lists`)
    .then((response) => response.data);

    return {
        type:GET_LISTS,
        payload: request,
    };
}

export function getRegisterData(){
    const request = axios
    .get(`${URL}/register`)
    .then((response => response.data));

    return {
        type:GET_REGISTER,
        payload:request,
    };
}

export function addList(payload){
    const request = axios(`${URL}/to-do-lists`, {
        method: "POST",
        headers: {
            Accept: "application.json",
            "Content-Type": "application/json",
        },
        data: JSON.stringify(payload),
    }
    ).then((response) => response.data);
    return {
        type:POST_LIST,
        payload:request,
    }
}

export function addTask(payload, e){
    const request = axios(`${URL}/to-do-lists/${e.target.id}`, {
        method: "PUT",
        headers: {
            Accept: "application.json",
            "Content-Type": "application/json",
        },
        data: JSON.stringify(payload),
    }
    ).then((response) => response.data);
    console.log(request);
    return {
        type:PUT_TASK,
        request,
    }
}