import { createStore } from "redux";
import reducer from "../reducer/index";
const userStore = createStore(reducer, {});

export default userStore;
