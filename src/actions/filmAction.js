import { GET_FILM_LIST } from "../constants/filmConstant";
import axios from "../utils/axiosClient";

export const getFilmList = () => {
  return (dispatch, getState) => {
    dispatch({
      type: GET_FILM_LIST.REQUEST,
    });
    axios
      .get(`QuanLyPhim/LayDanhSachPhim`)
      .then((result) => {
        dispatch({
          type: GET_FILM_LIST.SUCCESS,
          payload: {
            data: result.data,
          },
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: GET_FILM_LIST.FAIL,
        });
      });
  };
};
