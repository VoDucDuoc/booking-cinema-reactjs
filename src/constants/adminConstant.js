import { createActionType } from "../utils/createAsyncAction";
export const LOGIN = createActionType("LOGIN");
export const EDIT_FILM = createActionType("EDIT_FILM");

export const DELETE_FILM = createActionType("DELETE_FILM");
export const ADD_SCHEDULE = createActionType("ADD_SCHEDULE");
export const ADD_FILM = createActionType("ADD_FILM");
export const GET_USER_LIST = createActionType("GET_USER_LIST");
export const EDIT_USER = createActionType("EDIT_USER");
export const DELETE_USER = createActionType("DELETE_USER");
export const ADD_USER = createActionType("ADD_USER");
export const SEARCH_USER = createActionType("SEARCH_USER");
