import { connect } from 'react-redux';
import { selectSection } from '../State/actions';
import Section from '../Components/section';
import { 
  getSectionNumber, 
  getSectionInstructor, 
  getSectionMeetings, 
  getSectionOpenSeats, 
  getSectionTotalSeats, 
  getSectionWaitlist,
  getSectionCourseId
} from '../Selectors/section-selector';

const mapStateToProps = (state, props) => ({
  number: getSectionNumber(state, props),
  instructor: getSectionInstructor(state, props),
  meetings: getSectionMeetings(state, props),
  totalSeats: getSectionTotalSeats(state, props),
  openSeats: getSectionOpenSeats(state, props),
  waitlist: getSectionWaitlist(state, props),
  courseId: getSectionCourseId(state)
});

const mapDispatchToProps = (dispatch) => ({
  selectSection: (sectionId) => dispatch(selectSection(sectionId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Section);