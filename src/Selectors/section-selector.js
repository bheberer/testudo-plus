import { createSelector } from 'reselect';

const getSelectedCourse = (state) => state.selectedCourse;
const getSectionId = (state, props) => {
  console.log(props);
  return props.id;
}
export const getSectionCourseId = (state) => state.selectedCourse.course_id;

export const getSectionNumber = createSelector(
  [getSelectedCourse, getSectionId],
  (course, id) =>
    course.sections[id].number
);

export const getSectionInstructor = createSelector(
  [getSelectedCourse, getSectionId],
  (course, id) =>
    course.sections[id].instructors[0]
);

export const getSectionMeetings = createSelector(
  [getSelectedCourse, getSectionId],
  (course, id) =>
    course.sections[id].meetings
);

export const getSectionTotalSeats = createSelector(
  [getSelectedCourse, getSectionId],
  (course, id) =>
    course.sections[id].seats
);

export const getSectionOpenSeats = createSelector(
  [getSelectedCourse, getSectionId],
  (course, id) =>
    course.sections[id].open_seats
);

export const getSectionWaitlist = createSelector(
  [getSelectedCourse, getSectionId],
  (course, id) =>
    course.sections[id].waitlist
);
