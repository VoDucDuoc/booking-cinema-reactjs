import { GET_DETAIL_CHECKOUT, BOOKING } from "../constants/checkoutConstant";
import  axios  from "../utils/axiosClient";

export const getDetailCheckout = (id) =>{
    return (dispatch)=>{
      dispatch({
        type: GET_DETAIL_CHECKOUT.REQUEST
      });
      axios.get(`QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`)
    .then((result)=>{
      dispatch({
        type: GET_DETAIL_CHECKOUT.SUCCESS,
        payload: {
          data: result.data,
        },
      });
    }).catch((error)=>{
    
      dispatch({
        type: GET_DETAIL_CHECKOUT.FAIL,
      })
    })
  }}
  export const addChair = (chairId, price) => {
    return{
      type: "ADD_CHAIR",
      chairId,
      price
    }
  }

  export const booking = (values) => {
  
    return (dispatch) => {
      dispatch({
        type: BOOKING.REQUEST,
      });
      axios
        .post(`QuanLyDatVe/DatVe`, values)
        .then((result) => {
          
          dispatch({
            type: BOOKING.SUCCESS,
            payload: {
              data: result.data,
            },
          });
         
          
        })
        .catch((error) => {
         
          dispatch({
            type: BOOKING.FAIL,
          });
        });
    };
  };