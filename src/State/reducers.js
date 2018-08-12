import { combineReducers } from "redux";

export const updateStateObject = (state, action) => ({
  ...state,
  ...action.payload
})

export const updateStateProperty = (state, action) => action.payload
 
export const addToStateArray = (state, action) => [...state, ...action.payload]
export const filterFromStateArray = (state, action) => state.filter(elem => elem === action.payload)

/** standrd createReducer function */
export const createReducer = (initialState, actionHandlers) =>
  (state = initialState, action) =>
    actionHandlers.hasOwnProperty(action.type) ?
      actionHandlers[action.type](state, action) :
      state

/** creates a reducer that strictly handles all actions w/ defaultHandler */
export const createStrictReducer= (initialState, defaultHandler, actionTypes) =>
  (state = initialState, action) =>
    actionTypes.includes(action.type) ?
      defaultHandler(state, action) :
      state;

// reducer for a simple state property that you want to update w/ a completely new value
export const propertyReducer = (initialState, actions) =>
  createStrictReducer(
    initialState = initialState,
    updateStateProperty,
    actions = actions
  );

/*
reducer w/ common patterns for an array. User can push, pop, concat, clear, filter, map + 
reduce the array. Push, pop, concat, and clear get given the corresponding action type, and filter, map and reduce get
objects w/ action type + handler key value pair
*/
export const arrayReducer = ({ push, pop, concat, clear, filter, map, reduce }) => 
  createReducer([], {
    [push]: (state, action) => [...state, action.payload],
    [pop]: (state, action) => [state.slice(0)],
    [concat]: (state, action) => [...state, ...action.payload],
    [clear]: (state, action) => [],
    ...filter,
    ...map,
    ...reduce
  });

export const booleanReducer = (initialState, { truthy, falsy, toggle }) =>
  createReducer(initialState, {
    [truthy]: (state, action) => true,
    [falsy]: (state, action) => false,
    [toggle]: (state, action) => state === false
  });

export const objectReducer = ({})

export const selectedCourse = propertyReducer({}, [
  'SELECT_COURSE'
]);

export const selectedSection = propertyReducer({}, [
  'SELECT_SECTION'
]);

export const isModalOpen = booleanReducer(false, {
  truthy: 'OPEN_MODAL',
  falsy: 'CLOSE_MODAL'
});

export const selectedDepartments = arrayReducer({
  push: 'SELECT_DEPARTMENT',
  clear: 'CLEAR_SELECTED_DEPARTMENTS',
  filter: { 
    DESELECT_DEPARTMENT: (state, action) =>
      state.filter(department => department !== action.payload)
  }
});

export const selectedCredits = arrayReducer({
  push: 'SELECT_CREDIT',
  clear: 'CLEAR_SELECTED_CREDITS',
  filter: { 
    DESELECT_CREDIT: (state, action) =>
      state.filter(department => department !== action.payload)
  }
});

export const selectedGenEds = arrayReducer({
  push: 'SELECT_GENED',
  clear: 'CLEAR_SELECTED_GENEDS',
  filter: { 
    DESELECT_GENED: (state, action) =>
      state.filter(department => department !== action.payload)
  }
})

export const courses = arrayReducer({
  concat: 'FETCHED_COURSES'
});

export const searchQuery = propertyReducer('', [
  'UPDATED_SEARCH_QUERY'
]);

export const page = propertyReducer(0, [
  'NEXT_PAGE',
  'PREV_PAGE'
])

const rootReducer = combineReducers({
  selectedCourse,
  isModalOpen,
  selectedSection,
  selectedDepartments,
  selectedGenEds,
  selectedCredits,
  courses,
  searchQuery,
  page
})

export default rootReducer;