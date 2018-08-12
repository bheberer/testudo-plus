import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

const Section = (props) => {
  
  const getSectionSummary = () => {
    const numberSummary = `Number: ${props.number}`;
    const meetingSummary = `Meets: ${getMeetingSummary()}`;
    const summary = numberSummary.concat(' ', meetingSummary);
    return summary;
  }

  const getMeetingSummary = () =>
    props.meetings.map(meeting =>
      `${meeting.days} ${meeting.start_time} - ${meeting.end_time}`
    ).join(', ');

  const getSectionDetails = () => {
    const instructorDetails = `Instructor: ${ props.instructor }`;
    const meetingDetails = `Meets: ${getMeetingDetails()}`;
    const totalSeatingDetails = `Total Seats: ${ props.totalSeats }`;
    const openSeatingDetails = `Open Seats: ${ props.openSeats }`;
    const waitlistDetails = `Waitlist: ${ props.waitlist }`;
    const details = instructorDetails.concat(
      meetingDetails,
      totalSeatingDetails,
      openSeatingDetails, 
      waitlistDetails
    );
    return details
  };

  const getMeetingDetails = () =>
    props.meetings.map(meeting =>
      `${meeting.days} ${meeting.start_time} - ${meeting.end_time}, 
      Location: ${meeting.building} ${meeting.room}`
    ).join('\n');

  const handleSelectSection = () => {
    const { courseId, number, instructor, meetings } = props;
    props.selectSection({
      courseId,
      number,
      instructor,
      meetings
    });
  }

  return(
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant='title'>{ getSectionSummary() }</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography onClick={ handleSelectSection }>{ getSectionDetails() }</Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default Section;