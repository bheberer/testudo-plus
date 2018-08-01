import { createSelector } from 'reselect';

const getAllCourses = (state) => state.courses;
const getPage = (state) => state.page;
const getSearchQuery = (state) => state.searchQuery;

const getSelectedDepartments = (state) => state.selectedDepartments;
const getSelectedCredits = (state) => state.selectedCredits;
const getSelectedGenEds = (state) => state.selectedGenEds;

const filterBySearchQuery = (courses, query) =>
  courses.filter(course =>
    course.course_id.toLowerCase().includes(query.toLowerCase()) || 
    course.name.toLowerCase().includes(query.toLowerCase())
  )

const filterByDepartment = (courses, departments) => 
  courses.filter(course =>
    !departments.length ? true : departments.includes(course.dept_id)
  )

const filterByCredits = (courses, credits) =>
  courses.filter(course =>
    !credits.length ? true : credits.includes(course.credits)
  )

const filterByGenEds = (courses, genEds) =>
  courses.filter(course =>
    !genEds.length ? true : course.gen_ed.some(courseGenEd => genEds.includes(courseGenEd))
  )

const getFilteredCourses = createSelector(
  [getAllCourses, getSearchQuery, getSelectedDepartments, getSelectedCredits, getSelectedGenEds],
  (courses, query, departments, credits, genEds) => {
    let filteredCourses = filterBySearchQuery(courses, query);
    filteredCourses = filterByDepartment(filteredCourses, departments);
    filteredCourses = filterByCredits(filteredCourses, credits);
    filteredCourses = filterByGenEds(filteredCourses, genEds);
    return filteredCourses;
  }
)

// const getFilteredCourses = createSelector(
//   [getAllCourses, getSearchQuery],
//   (courses, searchQuery) =>
//     courses.filter(course =>
//       course.course_id.toLowerCase().includes(searchQuery.toLowerCase()) || 
//       course.name.toLowerCase().includes(searchQuery.toLowerCase())
//     )
// )

// const getCoursesByDepartments = createSelector(
//   [getFilteredCourses, getSelectedDepartments],
//   (courses, departments) => courses.filter(course => 
//     !departments.length ? true : departments.includes(course.dept_id)
//   )
// )

// const getCoursesByCredits= createSelector(
//   [getCoursesByDepartments, getSelectedCredits],
//   (courses, credits) => courses.filter(course => 
//     !credits.length ? true : credits.includes(course.credits)
//   )
// )

// const getCoursesByGenEds= createSelector(
//   [getCoursesByCredits, getSelectedGenEds],
//   (courses, genEds) => courses.filter(course =>
//     !genEds.length ? true : course.gen_ed.some(courseGenEd => genEds.includes(courseGenEd))
//   )
// )

const getCourses = createSelector(
  [getFilteredCourses, getPage],
  (courses, page) => {
    const start = page * 100;
    const end = (page + 1) * 100;
    return courses.slice(start, end);
  }
)

export default getCourses;
