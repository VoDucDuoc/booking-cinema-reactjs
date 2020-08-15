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
      let listFilmNew = [];
      let listFilmShowing = [];
      let listFilmComing = [];
      listFilmTemp.shift(); //trong API cái phim đầu tiên trong phim nhìn hơi ngáo nên e bỏ

      //lấy ds phim
      for (let index = 0; index < 19; index++) {
        listFilmShowing.push(listFilmTemp.shift());
      }
      // listFilmNew.map((item) => {
      //   return Object.entries(item).map(([props, value]) => {
      //     if (props === "trailer") {
      //       let urlNew = value.substring(30);
      //       let propsNew = { ...item, trailer: urlNew };
      //       listFilmShowing.push(propsNew);
      //     }
      //     return listFilmShowing;
      //   });
      // });

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
