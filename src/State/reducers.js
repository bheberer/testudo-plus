import { combineReducers } from "redux";

export const updateStateObject = (state, action) => ({
  ...state,
  ...action.payload
})
 
export const addToStateArray = (state, action) => [...state, ...action.payload]
export const filterFromStateArray = (state, action) => state.filter(elem => elem === action.payload)

export const createReducer = (initialState, actionHandlers) =>
  (state = initialState, action) =>
    actionHandlers.hasOwnProperty(action.type) ?
      actionHandlers[action.type](state, action) :
      state

// export const createReducer = (initialState, actionHandlers, defaultHandler) =>
//   (state = initialState, action) =>
//     actionHandlers.hasOwnProperty(action.type) ?
//       actionHandlers[action.type](state, action) :
//       state

export const selectedCourse = createReducer('', {
  ['CLICK_COURSE']: (state, action) => action.classId
})

export const selectedDepartments = createReducer([], {
  ['SELECT_DEPARTMENT']: (state, action) => [...state, action.item],
  ['DESELECT_DEPARTMENT']: (state, action) => state.filter(department => department !== action.item)
})

export const selectedCredits = createReducer([], {
  ['SELECT_CREDIT']: (state, action) => [...state, action.item],
  ['DESELECT_CREDIT']: (state, action) => state.filter(credit => credit !== action.item)
})

export const selectedGenEds= createReducer([], {
  ['SELECT_GENED']: (state, action) => [...state, action.item],
  ['DESELECT_GENED']: (state, action) => state.filter(genEd => genEd !== action.item)
})

export const courses = createReducer([], {
  ['FETCHED_COURSES']: (state, action) => [...state, ...action.courses]
})

export const searchQuery = createReducer('', {
  ['UPDATED_SEARCH_QUERY']: (state, action) => action.searchQuery
})

export const page = createReducer([], {
  ['NEXT_PAGE']: (state, action) => action.page,
  ['PREV_PAGE']: (state, action) => action.page
})

const rootReducer = combineReducers({
  selectedCourse,
  selectedDepartments,
  selectedGenEds,
  selectedCredits,
  courses,
  searchQuery,
  page
})

export default rootReducer;