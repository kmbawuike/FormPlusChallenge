import {
  FILTER_FORM_TEMPLATES,
  NEXT_PAGE,
  PREV_PAGE,
  SET_CURRENT_FORM_TEMPLATES,
  SET_FORM_TEMPLATES,
} from "../actionTypes"
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

export const getFormTemplates = (currentPage) => {
  return async (dispatch) => {
    try {
      await dispatch(uiStartLoading())

      const res = await fetch(
        `https://front-end-task-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates`
      )
      setTimeout(() => {
        if (!res) {
          return "Request took too long, please check your internet and try again!"
        }
      }, 15000)

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

export const setFilterTemplates = (query, filterType) => {
  return {
    type: FILTER_FORM_TEMPLATES,
    query,
    filterType,
  }
}

export const getFilteredTemplates = (filterType, query, currentPage) => {
  return async (dispatch) => {
    await dispatch(setFilterTemplates(filterType, query))
    await dispatch(setCurrentFormTemplates(currentPage))
  }
}

export const getSortedArray = (sortType, currentPage) => {
  return async (dispatch) => {
    // await dispatch(setFilterTemplates(filterType, query))
    // await dispatch(setCurrentFormTemplates(currentPage))
  }
}

