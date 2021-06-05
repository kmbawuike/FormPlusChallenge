import { paginatedData } from "../../utility/helpers"
import {
  SET_FORM_TEMPLATES,
  FILTER_FORM_TEMPLATES,
  RESET_FORM_TEMPLATES,
  SET_CURRENT_FORM_TEMPLATES,
  NEXT_PAGE,
  PREV_PAGE,
} from "../actionTypes"

const initialState = {
  allFormTemplates: [],
  formTemplates: [],
  currentFormTemplates: [],
  currentPage: 1,
  pageLimit: 15,
}

const formTemplatesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FORM_TEMPLATES:
      return {
        ...state,
        allFormTemplates: action.formTemplates,
        formTemplates: action.formTemplates,
      }

    case SET_CURRENT_FORM_TEMPLATES:
      return {
        ...state,
        currentFormTemplates: paginatedData(
          action.currentPage,
          state.pageLimit,
          state.formTemplates
        ),
      }

    case NEXT_PAGE:
      return {
        ...state,
        currentFormTemplates: paginatedData(
          action.currentPage,
          state.pageLimit,
          state.formTemplates
        ),
      }

    case PREV_PAGE:
      return {
        ...state,
        currentFormTemplates: paginatedData(
          action.currentPage,
          state.pageLimit,
          state.formTemplates
        ),
      }
    case FILTER_FORM_TEMPLATES:
      return {
        ...state,
        formTemplates: state.allFormTemplates.filter(
          (elem) => elem[action.filterType].includes(action.query)
        ),
      }

    case RESET_FORM_TEMPLATES:
      return initialState

    default:
      return state
  }
}

export default formTemplatesReducer
