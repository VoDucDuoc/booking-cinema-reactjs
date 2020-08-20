import {SHOW_MODAL, HIDE_MODAL} from '../constants/modalTrailerConstant';

export const showModal = (url)=>{
    return {
        type: SHOW_MODAL,
        url,
    }
}

export const hideModal = ()=>{
    return {
        type: HIDE_MODAL,
    }
}