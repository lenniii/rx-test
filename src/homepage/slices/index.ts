import { combineReducers } from "redux";
import postReducer from "./posts";
export * from "./posts";

export default combineReducers({ postReducer });
