import {
  FILTER_FORM_TEMPLATES,
  NEXT_PAGE,
  PREV_PAGE,
  RESET_FORM_TEMPLATES,
  SET_CURRENT_FORM_TEMPLATES,
  SET_FORM_TEMPLATES,
} from "../actionTypes"
import {
  RESET_DEFAULT_SORT,
  SORT_ASENDING,
  SORT_DESCENDING,
} from "./actionTypes"
import { uiStartLoading, uiStopLoading } from "./uiActions"

const setFormTemplates = (formTemplates) => {
  return {
    type: SET_FORM_TEMPLATES,
    formTemplates,
  }
}

const setCurrentFormTemplates = (currentPage) => {
  return {
    type: SET_CURRENT_FORM_TEMPLATES,
    currentPage,
  }
}

export const goNextPage = (currentPage) => {
  return {
    type: NEXT_PAGE,
    currentPage,
  }
}

export const goPrevPage = (currentPage) => {
  return {
    type: PREV_PAGE,
    currentPage,
  }
}

export const sortAscendingOrder = (sortProperty) => {
  return {
    type: SORT_ASENDING,
    sortProperty,
  }
}

export const sortDescendingOrder = (sortProperty) => {
  return {
    type: SORT_DESCENDING,
    sortProperty,
  }
}

export const setDefaultSort = (currentPage) => {
  return {
    type: RESET_DEFAULT_SORT,
    currentPage
  }
}

export const setFilterTemplates = (query, filterType) => {
  return {
    type: FILTER_FORM_TEMPLATES,
    query,
    filterType,
  }
}

export const setResetFormTemplates = () => {
  return {
    type: RESET_FORM_TEMPLATES,
  }
}

export const getFormTemplates = (currentPage) => {
  return async (dispatch) => {
    try {
      await dispatch(uiStartLoading())

      const res = await fetch(
        `https://front-end-task-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates`
      )
      setTimeout(() => {
        if (!res) {
          dispatch(uiStopLoading())
          return "Request took too long, please check your internet and try again!"
        }
      }, 5000)

      await dispatch(uiStopLoading())
      if (res.status === 200 || res.status === 201) {
        const resJson = await res.json()
        await dispatch(setFormTemplates(resJson))
        await dispatch(setCurrentFormTemplates(currentPage))
        return null
      }
      return "Something went wrong, please check your internet and try again!"
    } catch (e) {
      await dispatch(uiStopLoading())
      return "Something went wrong, please check your internet and try again!"
    }
  }
}

export const getFilteredTemplates = (filterType, query, currentPage) => {
  return async (dispatch) => {
    await dispatch(setFilterTemplates(filterType, query))
    await dispatch(setCurrentFormTemplates(currentPage))
  }
}


export const resetFormTmplates = (currentPage) => {
  return async (dispatch) => {
    await dispatch(setResetFormTemplates())
    await dispatch(setCurrentFormTemplates(currentPage))
  }
}