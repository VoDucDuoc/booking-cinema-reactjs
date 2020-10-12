import { LOGIN } from "../constants/adminConstant";

const initalState = {
    admin: null,
    loading: false,
    error: false,
};

const adminReducer = (state = initalState, action) => {
  switch (action.type) {
      case LOGIN.REQUEST: {
          return {...state, loading: true, error: false}
      }
      case LOGIN.SUCCESS: {
        return {...state, loading: false, error: false, admin: action.payload.data}
    }
    case LOGIN.FAIL: {
        return {...state, loading: false, error: true}
    }
    default:
      return state;
  }
};

export default adminReducer