import axios from "axios";

const makeAction = (type, payload) => ({ 
  type, 
  payload 
});

export const makeSimpleAcionCreator = (type) =>
  (data) => 
    makeAction(type, data);

export const makeConditionalActionCreator = (conditions) =>
  (conditional, data) => {
    const matchedType = conditions[conditional];
    return makeAction(matchedType, data);
  }

export const clickCourse = (courseId) => ({
  type: 'CLICK_COURSE',
  payload: courseId
})

export const clearItems = makeConditionalActionCreator({
  departments: 'CLEAR_SELECTED_DEPARTMENTS',
  credits: 'CLEAR_SELECTED_CREDITS',
  genEds: 'CLEAR_SELECTED_GENEDS'
})

export const selectItem = makeConditionalActionCreator({
  departments: 'SELECT_DEPARTMENT',
  credits: 'SELECT_CREDIT',
  genEds: 'SELECT_GENED'
})

export const deselectItem = makeConditionalActionCreator({
  departments: 'DESELECT_DEPARTMENT',
  credits: 'DESELECT_CREDIT',
  genEds: 'DESELECT_GENED'
})

export const fetchCourses = () => {
  return (dispatch) => {
    let page = 1;
    while (page <= 47) {
      axios.get(`https://api.umd.io/v0/courses?page=${page}&per_page=100`)
      .then(res => { return res.data })
      .then(courses => dispatch(coursesFetched(courses)));
      page++;
    }
  }
}

export const coursesFetched = (courses) => ({
  type: 'FETCHED_COURSES',
  payload: courses
})

export const searchQueryUpdate = (searchQuery) => ({
  type: 'UPDATED_SEARCH_QUERY',
  payload: searchQuery
})

export const goToNextPage = (page) => ({
  type: 'NEXT_PAGE',
  payload: page + 1
})

export const goToPrevPage = (page) => {
  const pageNumber = page === 0 ? 0 : page - 1;
  return {
    type: 'PREV_PAGE',
    payload: pageNumber
  }
}
