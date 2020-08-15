import { combineReducers } from "redux";
import filmReducer from "./filmReducer";
import modalReducer from './modalReducer';
import cinemaReducer from './cinemaReducer'
const rootReducer = combineReducers({
   filmReducer,
   modalReducer,
   cinemaReducer,
});

export default rootReducer