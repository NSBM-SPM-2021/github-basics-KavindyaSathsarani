import { combineReducers } from "redux"
import studentReducer from "./reducer";

const rootReducer = combineReducers({
    data: studentReducer,
});

export default rootReducer;