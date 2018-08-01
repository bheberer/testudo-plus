import Reactr from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import CourseList from '../../Containers/course-list-container';

const mockStore = configureStore();

describe('CourseList Container', () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
    wrapper = shallow(<CourseList store={store} />);
  })

  it('Should pass correct values into props', () => {
    const store = mockStore({
      courses: ['CMSC131', 'MATH140', 'STAT400', 'ASTR100'],
      searchQuery: ''
    })
  })
})