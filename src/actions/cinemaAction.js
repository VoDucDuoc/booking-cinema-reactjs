import { GET_CINEMA_LIST, GET_CINEMA_DETAIL_LIST,GET_CINEMA_SYSTEM_INFO } from "../constants/cinemaConstant";

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
       
        dispatch({
          type: GET_CINEMA_LIST.FAIL,
        });
      });
  };
};
export const getCinemaDetailList = () =>{
  return (dispatch, state)=>{
    dispatch({
      type: GET_CINEMA_DETAIL_LIST.REQUEST,
    });
    axios.get(`QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP02`)
  .then((result)=>{
    dispatch({
      type: GET_CINEMA_DETAIL_LIST.SUCCESS,
      payload: {
        data: result.data,
      },
    });
  }).catch((error)=>{
  
    dispatch({
      type: GET_CINEMA_DETAIL_LIST.FAIL,
    })
  })
}}
export const getCinemaSystemInfo = (id) =>{
  return (dispatch)=>{
    dispatch({
      type: GET_CINEMA_SYSTEM_INFO.REQUEST,
    });
    axios.get(`QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${id}`)
  .then((result)=>{
    dispatch({
      type: GET_CINEMA_SYSTEM_INFO.SUCCESS,
      payload: {
        data: result.data,
      },
    });
  }).catch((error)=>{
  
    dispatch({
      type: GET_CINEMA_SYSTEM_INFO.FAIL,
    })
  })
}}
