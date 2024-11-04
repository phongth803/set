import { combineReducers } from "redux";
import todoReducer from "./todo.reducers";

const rootReducer = combineReducers({
  todo: todoReducer,
});
export default rootReducer;
