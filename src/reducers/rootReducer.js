import { combineReducers } from "redux";
import filmReducer from "./filmReducer";
import cinemaReducer from './cinemaReducer';
import modalTrailerReducer from './modalTrailerReducer';
import scrollReducer from "./scrollReducer";
import userReducer from './userReducer';
import checkoutReducer from "./checkoutReducer";
import adminReducer from "./adminReducer";
const rootReducer = combineReducers({
   filmReducer,
   cinemaReducer,
   modalTrailerReducer,
   scrollReducer,
   userReducer,
   checkoutReducer,
   adminReducer,
});

export default rootReducer