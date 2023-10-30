import { combineReducers } from "redux";
import { setUser } from "./addUserReducer";

const reducer = combineReducers({ userStore: setUser });

export default reducer;
