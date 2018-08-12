import { createSelector } from 'reselect';

const getSelectedCourse = (state) => state.selectedCourse;
export const getIsModalOpen = (state) => state.isModalOpen;

export const getSelectedCourseId = createSelector(
  [getSelectedCourse],
  (course) => course.course_id
)

export const getSelectedCourseName = createSelector(
  [getSelectedCourse],
  (course) => course.name
)

export const getSelectedCourseCredits = createSelector(
  [getSelectedCourse],
  (course) => course.credits
)

export const getSelectedCourseDescription = createSelector(
  [getSelectedCourse],
  (course) => course.description
)

export const getSelectedCourseSections = createSelector(
  [getSelectedCourse],
  (course) => course.sections
)

export const getSelectedCourseGenEds = createSelector(
  [getSelectedCourse],
  (course) => course.gen_ed
)

export const checkModalIsOpen = createSelector(
  [getSelectedCourse],
  (course) => true
)