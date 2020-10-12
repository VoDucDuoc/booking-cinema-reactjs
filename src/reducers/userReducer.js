import { LOGIN, UPDATE, GET_USER_INFO, SIGNUP } from "../constants/userConstant";

const initalState = {
    user: null,
    loading: false,
    error: false,
    userInfo: null,
    errorSignin: false,
    loadingSignin: false,
    userSignin: null,
};

const userReducer = (state = initalState, action) => {
  switch (action.type) {
      case LOGIN.REQUEST: {
        return {...state, loading:true, error: false}
      }
      case LOGIN.SUCCESS: {
        
        return {...state, loading:false, user: action.payload.data, error: false}
      }
      case LOGIN.FAIL: {
        return {...state, error:true, loading: false}
      }
      case "GET_USER_FROM_LOCAL": {
        return {...state, loading:false, user: action.values, error: false}
      }
      case "LOG_OUT": {
        return {...state, loading:false, user: null, error: false}
      }
      case UPDATE.REQUEST: {
        return {...state, loading:true, error: false}
      }
      case UPDATE.SUCCESS: {
        const userInfoTemp = action.payload.data;
        
        const user = {...state.user, ...userInfoTemp, matKhau: ''};
        localStorage.setItem('user', JSON.stringify(user));
        return {...state, loading:false, user, error: false}
      }
      case UPDATE.FAIL: {
        return {...state, error:true, loading: false}
      }
      case GET_USER_INFO.REQUEST: {
        return {...state, loading:true, error: false}
      }
      case GET_USER_INFO.SUCCESS: {
        
        return {...state, loading:false, userInfo: action.payload.data, error: false}
      }
      case GET_USER_INFO.FAIL: {
        return {...state, error:true, loading: false}
      }
      case SIGNUP.REQUEST: {
        return {...state, loading:true, errorSignin: false}
      }
      case SIGNUP.SUCCESS: {
        
        return {...state, loading:false, errorSignin: false, userSignin: action.payload.data}
      }
      case SIGNUP.FAIL: {
        return {...state, errorSignin:true, loading: false}
      }
    default:
      return state;
  }
};

export default userReducer