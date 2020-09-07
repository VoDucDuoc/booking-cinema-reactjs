import { combineReducers } from "redux";
import filmReducer from "./filmReducer";
import cinemaReducer from './cinemaReducer';
import modalTrailerReducer from './modalTrailerReducer';
import scrollReducer from "./scrollReducer";
const rootReducer = combineReducers({
   filmReducer,
   cinemaReducer,
   modalTrailerReducer,
   scrollReducer,
});

export default rootReducer