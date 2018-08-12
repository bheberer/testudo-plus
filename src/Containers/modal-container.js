import { connect } from 'react-redux';
import { selectSection, openModal, closeModal } from '../State/actions';
import CourseModal from '../Components/course-modal';
import {
  getSelectedCourseId,
  getSelectedCourseName,
  getSelectedCourseCredits,
  getSelectedCourseDescription,
  getSelectedCourseSections,
  getSelectedCourseGenEds,
  getIsModalOpen
} from '../Selectors/modal-selector';

const mapStateToProps = (state) => ({
  id: getSelectedCourseId(state),
  name: getSelectedCourseName(state),
  credits: getSelectedCourseCredits(state),
  description: getSelectedCourseDescription(state),
  sections: getSelectedCourseSections(state),
  genEds: getSelectedCourseGenEds(state),
  open: getIsModalOpen(state)
})

const mapDispatchToProps = (dispatch) => ({
  selectSection: (section) => dispatch(selectSection(section)),
  openModal: () => dispatch(openModal()),
  closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(CourseModal);