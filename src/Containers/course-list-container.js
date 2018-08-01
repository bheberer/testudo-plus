import React, { Component } from 'react';
import CourseList from '../Components/course-list';
import { connect } from 'react-redux';
import * as actions from '../State/actions';
import getCourses from '../Selectors/courseSelector';

const mapStateToProps = (state) => {
  return {
    courses: getCourses(state),
    searchQuery: state.searchQuery,
    page: state.page
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    goToNextPage: (page) => dispatch(actions.goToNextPage(page)),
    goToPrevPage: (page) => dispatch(actions.goToPrevPage(page))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);