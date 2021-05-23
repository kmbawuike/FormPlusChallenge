import {
  SET_FORM_TEMPLATES,
  FILTER_FORM_TEMPLATES,
  RESET_FORM_TEMPLATES,
} from "../actionTypes"

const initialState = {
  formTemplates: [],
}

const formTemplatesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FORM_TEMPLATES:
      return {
        ...state,
        formTemplates: action.formTemplates,
      }

    case RESET_FORM_TEMPLATES:
      return initialState

    default:
      return state
  }
}

export default formTemplatesReducer
