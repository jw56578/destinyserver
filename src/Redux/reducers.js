import { combineReducers } from "redux";

const user = (state = null) => state;

const bizz = (state = []) => state;

export default combineReducers({ user, bizz });
