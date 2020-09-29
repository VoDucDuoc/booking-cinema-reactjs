import { GET_FILM_LIST, GET_FILM_DETAIL, CLEAR_FILM_DETAIL } from "../constants/filmConstant";

const initialState = {
  listFilmShowing: [],
  listFilmComing: [],
  detailFilm: {},
  loading: false,
  error: false,
};

const filmReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FILM_LIST.REQUEST: {
      return { ...state, loading: true, error: false };
    }
    case GET_FILM_LIST.SUCCESS: {
      let listFilmTemp = action.payload.data;
      let listFilmShowing = [];
      let listFilmComing = [];
      
     
      listFilmShowing = listFilmTemp;
      listFilmShowing.map((item) => {
        return listFilmComing.unshift(item);
      });
      return {
        ...state,
        loading: false,
        error: false,
        listFilmShowing,
        listFilmComing,
      };
    }
    case GET_FILM_LIST.FAIL: {
      
      return { ...state, loading: false, error: true };
    }


    case GET_FILM_DETAIL.REQUEST: {
      return {...state, loading: true, error: false};
    }
    case GET_FILM_DETAIL.SUCCESS: {
      return {...state,detailFilm: action.payload.data, loading: false, error: false };
    }
    case GET_FILM_DETAIL.FAIL: {
      return {...state, loading: false, error: true};
    }
    case CLEAR_FILM_DETAIL: {
      return {...state, detailFilm: {}}
    }
    default:
      return state;
  }
};

export default filmReducer;
