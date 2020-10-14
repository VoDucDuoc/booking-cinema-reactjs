import {
  EDIT_FILM,
  LOGIN,
  DELETE_FILM,
  ADD_SCHEDULE,
  ADD_FILM,
} from "../constants/adminConstant";

const initalState = {
  admin: null,
  loading: false,
  error: false,
  statusEdit: false,
  statusDelete: false,
  statusAddSchedule: false,
  statusAddFilm: false,
};

const adminReducer = (state = initalState, action) => {
  switch (action.type) {
    case LOGIN.REQUEST: {
      return { ...state, loading: true, error: false };
    }
    case LOGIN.SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        admin: action.payload.data,
      };
    }
    case LOGIN.FAIL: {
      return { ...state, loading: false, error: true };
    }
    case EDIT_FILM.REQUEST: {
      return { ...state, loading: true, error: false, statusEdit: false };
    }
    case EDIT_FILM.SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        statusEdit: true,
      };
    }
    case EDIT_FILM.FAIL: {
      return { ...state, loading: false, error: true, statusEdit: false };
    }
    case DELETE_FILM.REQUEST: {
      return { ...state, loading: true, error: false, statusDelete: false };
    }
    case DELETE_FILM.SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        statusDelete: true,
      };
    }
    case DELETE_FILM.FAIL: {
      return { ...state, loading: false, error: true, statusDelete: false };
    }
    case ADD_SCHEDULE.REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
        statusAddSchedule: false,
      };
    }
    case ADD_SCHEDULE.SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        statusAddSchedule: true,
      };
    }
    case ADD_SCHEDULE.FAIL: {
      return {
        ...state,
        loading: false,
        error: true,
        statusAddSchedule: false,
      };
    }
    case ADD_FILM.REQUEST: {
      return { ...state, loading: true, error: false, statusAddFilm: false };
    }
    case ADD_FILM.SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        statusAddFilm: true,
      };
    }
    case ADD_FILM.FAIL: {
      return { ...state, loading: false, error: true, statusAddFilm: false };
    }
    case "GET_ADMIN_FROM_LOCAL": {
      return {
        ...state,
        loading: false,
        error: false,
        admin: action.values,
      };
    }
    case "LOGOUT": {
      return {
        ...state,
        loading: false,
        error: false,
        admin: null,
      };
    }
    case "RELOAD_ERROR": {
      return {
        ...state,

        error: false,
      };
    }
    default:
      return state;
  }
};

export default adminReducer;
