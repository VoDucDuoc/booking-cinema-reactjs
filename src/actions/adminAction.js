import { LOGIN } from "../constants/adminConstant";
import  axios  from "../utils/axiosClient";

export const loginAction = (values) =>{
    return (dispatch)=>{
      dispatch({
        type: LOGIN.REQUEST
      });
      axios.post(`QuanLyNguoiDung/DangNhap`, values)
    .then((result)=>{
      dispatch({
        type: LOGIN.SUCCESS,
        payload: {
          data: result.data,
        },
      });
    }).catch((error)=>{
      console.log(error.data);
      dispatch({
        type: LOGIN.FAIL,
      })
    })
  }}
 