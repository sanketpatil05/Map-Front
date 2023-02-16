import * as types from "./actionTypes";
import axios from "axios";



const get_auth=()=>{
    return {type:types.GET_AUTH}
}

export { get_auth}