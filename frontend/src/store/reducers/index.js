import { combineReducers } from "@reduxjs/toolkit";
import UserReducer from "./user";

const rootReducer = combineReducers({
  user: UserReducer,
});

export default rootReducer;
