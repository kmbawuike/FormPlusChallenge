import { combineReducers } from "redux"
import formTemplates from "./formTemplatesReducer"
import ui from "./uiReducer"

const rootReducer = combineReducers({
  ui,
  formTemplates,
})

export default rootReducer
