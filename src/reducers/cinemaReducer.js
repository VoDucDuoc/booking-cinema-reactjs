import { GET_CINEMA_LIST } from "../constants/cinemaConstant";
const initalState = {
    listCinema: [],
    loading:false,
    error: false
}

const cinemaReducer = (state=initalState, action) =>{
    switch (action.type) {
        case GET_CINEMA_LIST.REQUEST:{
            return {...state, loading: true, error: false}
        }
        case GET_CINEMA_LIST.SUCCESS:{
            console.log(action.payload.data);
            return {...state, listCinema: action.payload.data, loading: false,error:false}
        }
        case GET_CINEMA_LIST.FAIL:{
            return {...state, loading: false, error: true}
        }
        default:
            return state;
    }
}

export default cinemaReducer