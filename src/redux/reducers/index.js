import { combineReducers } from "redux";
import auth from "./auth";
import chat from "./chat";
import room from './room';
import global from './global';

export default combineReducers({
  auth,
  chat,
  room,
  global
});