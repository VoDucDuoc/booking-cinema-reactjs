import {
  GET_CINEMA_LIST,
  GET_CINEMA_DETAIL_LIST,
} from "../constants/cinemaConstant";
const initalStateCinema = {
  listCinema: [],
  listCinemaDetail: [],
  loading: false,
  error: false,
};

const cinemaReducer = (state = initalStateCinema, action) => {
  switch (action.type) {
    case GET_CINEMA_LIST.REQUEST: {
      return { ...state, loading: true, error: false };
    }
    case GET_CINEMA_LIST.SUCCESS: {
      return {
        ...state,
        listCinema: action.payload.data,
        loading: false,
        error: false,
      };
    }
    case GET_CINEMA_LIST.FAIL: {
      return { ...state, loading: false, error: true };
    }
    case GET_CINEMA_DETAIL_LIST.REQUEST: {
      return { ...state, loading: true, error: false };
    }
    case GET_CINEMA_DETAIL_LIST.SUCCESS: {
      
      return {
        ...state,
        listCinemaDetail: action.payload.data,
        loading: false,
        error: false,
      };
    }
    case GET_CINEMA_DETAIL_LIST.FAIL: {
      return { ...state, loading: false, error: true };
    }
    default:
      return state;
  }
};

export default cinemaReducer;
