import { combineReducers } from "redux";

export const updateStateObject = (state, action) => ({
  ...state,
  ...action.payload
})

export const updateStateProperty = (state, action) => action.payload
 
export const addToStateArray = (state, action) => [...state, ...action.payload]
export const filterFromStateArray = (state, action) => state.filter(elem => elem === action.payload)

// export const createPropertyReducer = (initialState, actionTypes) =>
//   (state = initialState, action) =>
//     actionTypes.contains(action.type) ?
//       updateStateProperty(state, action) :
//       state

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

export const selectedCourse = createReducer({}, {
  ['SELECT_COURSE']: (state, action) => action.payload
})

export const selectedDepartments = createReducer([], {
  ['SELECT_DEPARTMENT']: (state, action) => [...state, action.payload],
  ['DESELECT_DEPARTMENT']: (state, action) => state.filter(department => department !== action.payload),
  ['CLEAR_SELECTED_DEPARTMENTS']: (state, action) => []
})

export const selectedCredits = createReducer([], {
  ['SELECT_CREDIT']: (state, action) => [...state, action.payload],
  ['DESELECT_CREDIT']: (state, action) => state.filter(credit => credit !== action.payload),
  ['CLEAR_SELECTED_CREDITS']: (state, action) => []
})

export const selectedGenEds= createReducer([], {
  ['SELECT_GENED']: (state, action) => [...state, action.payload],
  ['DESELECT_GENED']: (state, action) => state.filter(genEd => genEd !== action.payload),
  ['CLEAR_SELECTED_GENEDS']: (state, action) => []
})

export const courses = createReducer([], {
  ['FETCHED_COURSES']: (state, action) => [...state, ...action.payload]
})

export const searchQuery = createReducer('', {
  ['UPDATED_SEARCH_QUERY']: (state, action) => action.payload
})

export const page = createReducer([], {
  ['NEXT_PAGE']: (state, action) => action.payload,
  ['PREV_PAGE']: (state, action) => action.payload
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