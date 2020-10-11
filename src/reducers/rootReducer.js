import { combineReducers } from "redux";
import filmReducer from "./filmReducer";
import cinemaReducer from './cinemaReducer';
import modalTrailerReducer from './modalTrailerReducer';
import scrollReducer from "./scrollReducer";
import userReducer from './userReducer';
import checkoutReducer from "./checkoutReducer";
const rootReducer = combineReducers({
   filmReducer,
   cinemaReducer,
   modalTrailerReducer,
   scrollReducer,
   userReducer,
   checkoutReducer,
});

export default rootReducer