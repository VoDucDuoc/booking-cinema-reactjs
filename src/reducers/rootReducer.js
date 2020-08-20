import { combineReducers } from "redux";
import filmReducer from "./filmReducer";
import cinemaReducer from './cinemaReducer'
import modalTrailerReducer from './modalTrailerReducer'
const rootReducer = combineReducers({
   filmReducer,
   cinemaReducer,
   modalTrailerReducer,
});

export default rootReducer