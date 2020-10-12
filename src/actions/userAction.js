import { LOGIN, UPDATE, GET_USER_INFO, SIGNUP } from "../constants/userConstant";
import axios from "../utils/axiosClient";

export const login = (values) => {
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
        console.log(error);
        dispatch({
          type: LOGIN.FAIL,
        });
      });
  };
};

export const getUserInfo = (values) => {
  return (dispatch) => {
    dispatch({
      type: GET_USER_INFO.REQUEST,
    });
    axios
      .post(`QuanLyNguoiDung/ThongTinTaiKhoan`, values)
      .then((result) => {
        dispatch({
          type: GET_USER_INFO.SUCCESS,
          payload: {
            data: result.data,
          },
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: GET_USER_INFO.FAIL,
        });
      });
  };
};

export const updateAction = (values) => {
  return (dispatch) => {
    dispatch({
      type: UPDATE.REQUEST,
    });
    axios
      .put(`QuanLyNguoiDung/CapNhatThongTinNguoiDung`, values)
      .then((result) => {
        dispatch({
          type: UPDATE.SUCCESS,
          payload: {
            data: result.data,
          },
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: UPDATE.FAIL,
        });
      });
  };
};

export const signupAction = (values) => {
  return (dispatch) => {
    dispatch({
      type: SIGNUP.REQUEST,
    });
    axios
      .post(`QuanLyNguoiDung/DangKy`, values)
      .then((result) => {
        dispatch({
          type: SIGNUP.SUCCESS,
          payload: {
            data: result.data,
          },
        });
        
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: SIGNUP.FAIL,
        });
      });
  };
};

export const getUserFromLocal = (values) => {
  return (dispatch) => {
    dispatch({
      type: "GET_USER_FROM_LOCAL",
      values,
    });
  };
};

export const logoutAction = () => {
  return (dispatch) => {
    dispatch({
      type: "LOG_OUT",
    });
  };
};
