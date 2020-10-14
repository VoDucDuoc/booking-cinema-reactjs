import {
  LOGIN,
  EDIT_FILM,
  DELETE_FILM,
  ADD_SCHEDULE,
  ADD_FILM,
} from "../constants/adminConstant";
import axios from "../utils/axiosClient";

export const loginAction = (values) => {
  return (dispatch) => {
    dispatch({
      type: LOGIN.REQUEST,
    });
    axios
      .post(`QuanLyNguoiDung/DangNhap`, values)
      .then((result) => {
        dispatch({
          type: LOGIN.SUCCESS,
          payload: {
            data: result.data,
          },
        });
        localStorage.setItem("user", JSON.stringify(result.data));
      })
      .catch((error) => {
        console.log(error.data);
        dispatch({
          type: LOGIN.FAIL,
        });
      });
  };
};
export const editFilmUploadAction = (values) => {
  return (dispatch) => {
    dispatch({
      type: EDIT_FILM.REQUEST,
    });
    axios
      .post(`QuanLyPhim/CapNhatPhimUpload`, values)
      .then((result) => {
        dispatch({
          type: EDIT_FILM.SUCCESS,
          payload: {
            data: result.data,
          },
        });
      })
      .catch((error) => {
        console.log(error.data);
        dispatch({
          type: EDIT_FILM.FAIL,
        });
      });
  };
};
export const editFilmAction = (values) => {
  return (dispatch) => {
    dispatch({
      type: EDIT_FILM.REQUEST,
    });
    axios
      .post(`QuanLyPhim/CapNhatPhim`, values)
      .then((result) => {
        dispatch({
          type: EDIT_FILM.SUCCESS,
          payload: {
            data: result.data,
          },
        });
      })
      .catch((error) => {
        console.log(error.data);
        dispatch({
          type: EDIT_FILM.FAIL,
        });
      });
  };
};
export const deleteFilmAction = (id) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_FILM.REQUEST,
    });
    axios
      .delete(`QuanLyPhim/XoaPhim?MaPhim=${id}`)
      .then((result) => {
        dispatch({
          type: DELETE_FILM.SUCCESS,
          payload: {
            data: result.data,
          },
        });
      })
      .catch((error) => {
        console.log(error.data);
        dispatch({
          type: DELETE_FILM.FAIL,
        });
      });
  };
};
export const addScheduleAction = (values) => {
  return (dispatch) => {
    dispatch({
      type: ADD_SCHEDULE.REQUEST,
    });
    axios
      .post(`QuanLyDatVe/TaoLichChieu`, values)
      .then((result) => {
        dispatch({
          type: ADD_SCHEDULE.SUCCESS,
          payload: {
            data: result.data,
          },
        });
        console.log(result.data);
      })
      .catch((error) => {
        console.log(error.data);
        dispatch({
          type: ADD_SCHEDULE.FAIL,
        });
      });
  };
};
export const addFilmAction = (values) => {
  return (dispatch) => {
    dispatch({
      type: ADD_FILM.REQUEST,
    });
    axios
      .post(`QuanLyPhim/ThemPhimUploadHinh`, values)
      .then((result) => {
        dispatch({
          type: ADD_FILM.SUCCESS,
          payload: {
            data: result.data,
          },
        });
        console.log(result.data);
      })
      .catch((error) => {
        console.log(error.data);
        dispatch({
          type: ADD_FILM.FAIL,
        });
      });
  };
};
export const getAdminFromLocal = (values) => {
  return (dispatch) => {
    dispatch({
      type: "GET_ADMIN_FROM_LOCAL",
      values,
    });
  };
};
export const logoutAction = () => {
  return (dispatch) => {
    dispatch({
      type: "LOGOUT",
    });
  };
};
export const reloadErrorAction = () => {
  return (dispatch) => {
    dispatch({
      type: "RELOAD_ERROR",
    });
  };
};
