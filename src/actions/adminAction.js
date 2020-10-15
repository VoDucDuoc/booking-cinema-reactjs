import {
  LOGIN,
  EDIT_FILM,
  DELETE_FILM,
  ADD_SCHEDULE,
  ADD_FILM,
  GET_USER_LIST,
  EDIT_USER,
  DELETE_USER,
  ADD_USER,
  SEARCH_USER
} from "../constants/adminConstant";
import axios from "../utils/axiosClient";


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
export const deleteUserAction = (id) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_USER.REQUEST,
    });
    axios
      .delete(`QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${id}`)
      .then((result) => {
        dispatch({
          type: DELETE_USER.SUCCESS,
          payload: {
            data: result.data,
          },
        });
      })
      .catch((error) => {
        console.log(error.data);
        dispatch({
          type: DELETE_USER.FAIL,
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
export const searchUserAction = (values) => {
  return (dispatch) => {
    dispatch({
      type: SEARCH_USER.REQUEST,
    });
    axios
      .get(`QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP02&tuKhoa=${values}`, values)
      .then((result) => {
        dispatch({
          type: SEARCH_USER.SUCCESS,
          payload: {
            data: result.data,
          },
        });
        console.log(result.data);
      })
      .catch((error) => {
        console.log(error.data);
        dispatch({
          type: SEARCH_USER.FAIL,
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
export const addUserAction = (values) => {
  return (dispatch) => {
    dispatch({
      type: ADD_USER.REQUEST,
    });
    axios
      .post(`QuanLyNguoiDung/ThemNguoiDung`, values)
      .then((result) => {
        dispatch({
          type: ADD_USER.SUCCESS,
          payload: {
            data: result.data,
          },
        });
        console.log(result.data);
      })
      .catch((error) => {
        console.log(error.data);
        dispatch({
          type: ADD_USER.FAIL,
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


export const getUserList = () => {
  return (dispatch) => {
    dispatch({
      type: GET_USER_LIST.REQUEST,
    });
    axios
      .get(`QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP02`)
      .then((result) => {
        dispatch({
          type: GET_USER_LIST.SUCCESS,
          payload: {
            data: result.data,
          },
        });
       
      })
      .catch((error) => {
        console.log(error.data);
        dispatch({
          type: GET_USER_LIST.FAIL,
        });
      });
  };
};
export const editUserAction = (values) => {
  return (dispatch) => {
    dispatch({
      type: EDIT_USER.REQUEST,
    });
    axios
      .put(`QuanLyNguoiDung/CapNhatThongTinNguoiDung`, values)
      .then((result) => {
        dispatch({
          type: EDIT_USER.SUCCESS,
          payload: {
            data: result.data,
          },
        });
       
      })
      .catch((error) => {
        console.log(error.data);
        dispatch({
          type: EDIT_USER.FAIL,
        });
      });
  };
};