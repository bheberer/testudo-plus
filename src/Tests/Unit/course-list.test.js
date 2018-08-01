import React from 'react';
import { shallow, mount } from 'enzyme';
import CourseList from '../../Components/course-list';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';
// import IconButton from '@material-ui/core/IconButton';
// import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
// import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Paper from '@material-ui/core/Paper';
// import List from '@material-ui/core/List';
// import ListSubHeader from '@material-ui/core/ListSubheader';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';

jest.mock('@material-ui/core/Paper', () => 'mock-paper')

describe('course list integration tests', () => {

  it('renders correctly', () => {
    const tree = mount(
      <CourseList courses={ [
        { course_id: 'CMSC131', name: 'CS 101' }, 
        { course_id: 'MATH140', name: 'Calc 1'}, 
        { course_id: 'UNIV100', name: 'university 100'}, 
        { course_id: 'ASTR100', name: 'astronomy 1' }
      ] } />
    )

    expect(toJson(tree, { mode: 'shallow' })).toMatchSnapshot();
    tree.unmount();
  })

  it('renders correct courses', () => {
    const tree = mount(
      <CourseList courses={ [
        { course_id: 'CMSC131', name: 'CS 101' }, 
        { course_id: 'MATH140', name: 'Calc 1'}, 
        { course_id: 'UNIV100', name: 'university 100'}, 
        { course_id: 'ASTR100', name: 'astronomy 1' }
      ] } />
    )

    // const treeJson = toJson(tree);

    // const courses = tree.find('ListItemText');

    expect(tree).toBe({});



    //tree = CourseList({ courses: ['CMSC131', 'MATH140', 'UNIV100', 'ASTR100'] })
    // expect(courses).toEqual(['CMSC131', 'MATH140', 'UNIV100', 'ASTR100']);
  })
})
