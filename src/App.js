import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import * as actions from './State/actions';
import CourseList from './Containers/course-list-container';
import NavBar from './Components/nav-bar';
import SearchBarContainer from './Containers/search-bar-container';
import Dropdown from './Containers/dropdown-container';

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCourses: () => dispatch(actions.fetchCourses())
  };
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Dropdown id='departments' />
        <Dropdown id='credits' />
        <Dropdown id='genEds' />
        <SearchBarContainer />
        <CourseList id='courseList'/>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(App);
