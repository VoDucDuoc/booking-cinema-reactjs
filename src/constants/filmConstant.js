import { createActionType } from '../utils/createAsyncAction'

export const GET_FILM_LIST = createActionType("GET_FILM_LIST")
export const GET_FILM_DETAIL = createActionType("GET_FILM_DETAIL")
export const CLEAR_FILM_DETAIL = "CLEAR_FILM_DETAIL"