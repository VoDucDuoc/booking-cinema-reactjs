import { GET_DETAIL_CHECKOUT, BOOKING } from "../constants/checkoutConstant";
const initialState = {
  detailCheckout: null,
  loading: false,
  error: false,
  listChairChoosing: [],
  message: '',
};
const checkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAIL_CHECKOUT.REQUEST: {
      return { ...state, loading: true };
    }
    case GET_DETAIL_CHECKOUT.SUCCESS: {
      return {
        ...state,
        loading: false,
        detailCheckout: action.payload.data,
        error: false,
      };
    }
    case GET_DETAIL_CHECKOUT.FAIL: {
      return { ...state, loading: false, error: true };
    }
    case "ADD_CHAIR": {
      let maGhe = action.chairId;
      let giaVe = action.price;
      const chair = { maGhe, giaVe };

      const index = state.listChairChoosing.findIndex(
        (chair) => chair.maGhe === maGhe
      );
      const listChairChoosing = [...state.listChairChoosing];
      if (index === -1) {
        listChairChoosing.push(chair);
      } else {
        listChairChoosing.splice(index, 1);
      }

      return { ...state, listChairChoosing };
    }
    case BOOKING.REQUEST: {
      return { ...state, loading: true };
    }
    case BOOKING.SUCCESS: {
      return {
        ...state,
        loading: false,
        message: action.payload.data,
        error: false,
      };
    }
    case BOOKING.FAIL: {
      return { ...state, loading: false, error: true };
    }
    default:
      return state;
  }
};

export default checkoutReducer;
