import { GET_CINEMA_LIST } from "../constants/cinemaConstant";

import axios from "../utils/axiosClient";

export const getCinemaList = () => {
  return (dispatch, state) => {
    dispatch({
      type: GET_CINEMA_LIST.REQUEST,
    });
    axios
      .get(`QuanLyRap/LayThongTinHeThongRap`)
      .then((result) => {
        dispatch({
          type: GET_CINEMA_LIST.SUCCESS,
          payload: {
            data: result.data,
          },
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: GET_CINEMA_LIST.FAIL,
        });
      });
  };
};
