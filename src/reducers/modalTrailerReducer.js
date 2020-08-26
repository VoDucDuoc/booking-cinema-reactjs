import { SHOW_MODAL, HIDE_MODAL } from "../constants/modalTrailerConstant";

const initalState = {
    show: false,
    url: '',
    interval: 2000
}


const modalTrailerReducer = (state=initalState, action) => {
    switch (action.type) {
        case SHOW_MODAL:{
            return {...state, show: true, url: action.url, interval: null}
        }
        case HIDE_MODAL:{
            return {...state, show: false, url: '', interval: 2000}
        }
        default:
            return state;
    }
}
export default modalTrailerReducer