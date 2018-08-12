import axios from "axios";
import thunk from 'redux-thunk';

const makeAction = (type, payload) => ({ 
  type, 
  payload
});

export const makeSimpleActionCreator = (type) =>
  (data) => 
    makeAction(type, data);

export const makeConditionalActionCreator = (conditions) =>
  (conditional, data) => {
    const matchedType = conditions[conditional];
    return makeAction(matchedType, data);
  };

export const selectCourse = (course) =>
  (dispatch) => {
    dispatch(makeAction('SELECT_COURSE', course));
    dispatch(openModal(true));
  };

export const selectSection = (section) =>
  (dispatch) => {
    dispatch(makeAction('SELECT_SECTION', section));
    dispatch(closeModal(false));
  };

export const openModal = makeSimpleActionCreator('OPEN_MODAL');

export const closeModal = makeSimpleActionCreator('CLOSE_MODAL');

export const coursesFetched = makeSimpleActionCreator('FETCHED_COURSES');

export const searchQueryUpdate = makeSimpleActionCreator('UPDATED_SEARCH_QUERY');

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
      axios.get(`https://api.umd.io/v0/courses?page=${page}&per_page=100&expand=sections`)
      .then(res => { return res.data })
      .then(courses => dispatch(coursesFetched(courses)));
      page++;
    }
  }
}

export const goToNextPage = (page) =>
  makeAction(
    'NEXT_PAGE',
    page + 1
  )

export const goToPrevPage = (page) => {
  const pageNumber = page === 0 ? 0 : page - 1;
  return makeAction(
    'PREV_PAGE',
    pageNumber
  )
}
