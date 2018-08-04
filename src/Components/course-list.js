import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListSubHeader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    overflow: 'auto',
    maxHeight: 300
  },
  subHeader: {
    backgroundColor: 'white'
  }
})

const CourseList = (props) => {

  const { classes } = props;

  const handleNextPageClick = () => props.goToNextPage(props.page);
  const handlePrevPageClick = () => props.goToPrevPage(props.page);

  const renderCourses = () =>
    props.courses.map(course =>
      <ListItem dense button onClick={ () => props.selectCourse(course) }>
        <ListItemText primary={ course.course_id } secondary={ course.name }/>
      </ListItem>
    );
  
  const courses = renderCourses();

  return (
    <Paper>
      <List className={ classes.root }>
        <ListSubHeader className={ classes.subHeader }>
          Courses
        </ListSubHeader>
        { courses }
      </List>
      <IconButton onClick={ handlePrevPageClick }>
        <KeyboardArrowLeft />
      </IconButton>
      <IconButton onClick={ handleNextPageClick }>
        <KeyboardArrowRight />
      </IconButton>
    </Paper>
  );
}

export default withStyles(styles)(CourseList);