import { combineReducers } from "redux";
import filmReducer from "./filmReducer";

import cinemaReducer from './cinemaReducer'
const rootReducer = combineReducers({
   filmReducer,
   cinemaReducer,
});

export default rootReducer