import { SHOW_MODAL, HIDE_MODAL } from "../constants/modalTrailerConstant";

const initalState = {
    show: false,
    url: '',
}


const modalTrailerReducer = (state=initalState, action) => {
    switch (action.type) {
        case SHOW_MODAL:{
            return {...state, show: true, url: action.url}
        }
        case HIDE_MODAL:{
            return {...state, show: false, url: ''}
        }
        default:
            return state;
    }
}
export default modalTrailerReducer