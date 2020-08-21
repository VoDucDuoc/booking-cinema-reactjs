import { combineReducers } from "redux";
import filmReducer from "./filmReducer";
import {cinemaReducer, cinemaDetailReducer} from './cinemaReducer'
import modalTrailerReducer from './modalTrailerReducer'
const rootReducer = combineReducers({
   filmReducer,
   cinemaReducer,
   modalTrailerReducer,
   cinemaDetailReducer,
});

export default rootReducer