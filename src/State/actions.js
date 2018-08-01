import axios from "axios";

const makeAction = (type, payload) => ({ 
  type, 
  payload 
});

export const makeSimpleAcionCreator = (type) =>
  (data) => 
    makeAction(type, data);

export const makeConditionalActionCreator = (types, conditions) =>
  (data, conditional) => {
    const matchedCondition = getMatchingCondition(conditions, conditional);
    return makeAction(types[matchedCondition], data);
  }

const getMatchingCondition = (conditions, conditional) =>
  conditions.forEach(
    checkCondition(undefined, conditional)
  )

const checkCondition = (condition, conditional) => {
  if(condition === conditional)
    return condition
}




export const clickCourse = (courseId) => ({
  type: 'CLICK_COURSE',
  courseId
})

export const selectItem = (item, dropdownId) => {
  if (dropdownId === 'departments') {
    return {
      type: 'SELECT_DEPARTMENT',
      item
    }
  } else if (dropdownId === 'credits') {
    return {
      type: 'SELECT_CREDIT',
      item
    }
  } else {
    return {
      type: 'SELECT_GENED',
      item
    }
  }
}

export const deselectItem = (item, dropdownId) => {
  if (dropdownId === 'departments') {
    return {
      type: 'DESELECT_DEPARTMENT',
      item
    }
  } else if (dropdownId === 'credits') {
    return {
      type: 'DESELECT_CREDIT',
      item
    }
  } else {
    return {
      type: 'DESELECT_GENED',
      item
    }
  }
}

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
  courses
})

export const searchQueryUpdate = (searchQuery) => ({
  type: 'UPDATED_SEARCH_QUERY',
  searchQuery
})

export const goToNextPage = (page) => ({
  type: 'NEXT_PAGE',
  page: page + 1
})

export const goToPrevPage = (page) => {
  const pageNumber = page === 0 ? 0 : page - 1;
  return {
    type: 'PREV_PAGE',
    page: pageNumber
  }
}
