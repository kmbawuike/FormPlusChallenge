import { UI_START_LOADING, UI_STOP_LOADING } from "../actionTypes"

const initialState = {
  isUiLoding: false,
}

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case UI_START_LOADING:
      return {
        ...state,
        isUiLoding: true,
      }
    case UI_STOP_LOADING:
      return {
        ...state,
        isUiLoding: false,
      }
    default:
      return state
  }
}

export default uiReducer
