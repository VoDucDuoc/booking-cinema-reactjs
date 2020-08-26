import { GET_FILM_LIST } from "../constants/filmConstant";

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
      listFilmTemp.shift();
      //lấy ds phim
      for (let index = 0; index < 19; index++) {
        listFilmShowing.push(listFilmTemp.shift());
      }

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

    default:
      return state;
  }
};

export default filmReducer;
