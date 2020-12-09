import { GET_FILM_LIST, GET_FILM_DETAIL, CLEAR_FILM_DETAIL } from "../constants/filmConstant";
import axios from "../utils/axiosClient";

export const getFilmList = () => {
  return (dispatch) => {
    dispatch({
      type: GET_FILM_LIST.REQUEST,
    });
    axios
      .get(`QuanLyPhim/LayDanhSachPhim?maNhom=GP02`)
      .then((result) => {
        dispatch({
          type: GET_FILM_LIST.SUCCESS,
          payload: {
            data: result.data,
          },
        });
      })
      .catch((error) => {
       
        dispatch({
          type: GET_FILM_LIST.FAIL,
        });
      });
  };
};
export const getFilmDetail = (id) => {
  return (dispatch) => {
    dispatch({
      type: GET_FILM_DETAIL.REQUEST,
    });
    axios
      .get(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`)
      .then((result) => {
        dispatch({
          type: GET_FILM_DETAIL.SUCCESS,
          payload: {
            data: result.data,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_FILM_DETAIL.FAIL,
        });
      });
  };
};

export const clearFilmDetail = () =>{
  return {
    type: CLEAR_FILM_DETAIL
  }
}
