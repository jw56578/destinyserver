import { combineReducers } from "redux";

const bizzes = (state = [], action) => {
  switch (action.type) {
    case "ADD_BIZZ":
      return [...state, action.value];
    case "REMOVE_BIZZ":
      const newBizzes = [...state];
      newBizzes.splice(action.value, 1);
      return newBizzes;
    default:
      return state;
  }
};

const loggedIn = (state = [], action) => {
  switch (action.type) {
    case "LOGIN":
      return (state = action.value);
    default:
      return state;
  }
};

const user = (state = "", action) => {
  switch (action.type) {
    case "SET_USER":
      return action.value;
    default:
      return state;
  }
};

export default combineReducers({ bizzes, loggedIn, user });
