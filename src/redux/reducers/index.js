import { combineReducers } from "redux";
import auth from "./auth";
import chat from "./chat";
import room from './room';

export default combineReducers({
  auth,
  chat,
  room
});