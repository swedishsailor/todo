import axios from 'axios';
import {GET_LISTS} from '../types';

const URL = "https://todolist-fake-server.herokuapp.com/to-do-lists";

export function getListsInfo(){
    const request = axios
    .get(`${URL}`)
    .then((response) => response.data);

    return {
        type:GET_LISTS,
        payload: request,
    };
}