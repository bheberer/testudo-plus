import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import * as actions from './State/actions';
import CourseList from './Containers/course-list-container';
import NavBar from './Components/nav-bar';
import SearchBarContainer from './Containers/search-bar-container';
import Dropdown from './Containers/dropdown-container';
import Calendar from './Components/calendar';
import Grid from '@material-ui/core/Grid';

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCourses: () => dispatch(actions.fetchCourses())
  };
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid container spacing={ 24 }>
          <NavBar />
          <Grid item xs={ 6 } style={{ paddingLeft: 25 }}>
            <Calendar />
          </Grid>
          <Grid item xs={ 6 } style={{ paddingRight: 25 }}>
            <SearchBarContainer />
            <Grid container spacing={ 12 }>
              <Grid item xs={ 4 }>
                <Dropdown id='departments' />
              </Grid>
              <Grid item xs={ 4 }>
                <Dropdown id='credits' />
              </Grid>
              <Grid item xs={ 4 }>
                <Dropdown id='genEds' />
              </Grid>
            </Grid>
            <CourseList id='courseList'/>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(App);
