import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../State/actions';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('actions', () => {

  const store = mockStore({});

  beforeEach(() => store.clearActions());

  it('should create CLICK_COURSE action', () => {
    const courseId = 'CMSC131';
    const expectedAction = [{
      type: 'CLICK_COURSE',
      courseId
    }];

    store.dispatch(actions.clickCourse(courseId));
    expect(store.getActions()).toEqual(expectedAction);
  })

  describe('selectItem', () => {
    it('should create SELECT_DEPARTMENT action when dropdownId is departments', () => {
      const expectedAction = [{
        type: 'SELECT_DEPARTMENT',
        item: {}
      }];

      store.dispatch(actions.selectItem({}, 'departments'));
      expect(store.getActions()).toEqual(expectedAction);
    })

    it('should create SELECT_CREDIT action when dropdownId is credits', () => {
      const expectedAction = [{
        type: 'SELECT_CREDIT',
        item: {}
      }];

      store.dispatch(actions.selectItem({}, 'credits'));
      expect(store.getActions()).toEqual(expectedAction);
    })

    it('should create SELECT_GENED action when dropdownId is genEds', () => {
      const expectedAction = [{
        type: 'SELECT_GENED',
        item: {}
      }];

      store.dispatch(actions.selectItem({}, 'genEds'));
      expect(store.getActions()).toEqual(expectedAction);
    })
  })

  describe('deselectItem', () => {
    it('should create DESELECT_DEPARTMENT action when dropdownId is departments', () => {
      const expectedAction = [{
        type: 'DESELECT_DEPARTMENT',
        item: {}
      }];

      store.dispatch(actions.deselectItem({}, 'departments'));
      expect(store.getActions()).toEqual(expectedAction);
    })

    it('should create DESELECT_CREDIT action when dropdownId is credits', () => {
      const expectedAction = [{
        type: 'DESELECT_CREDIT',
        item: {}
      }];

      store.dispatch(actions.deselectItem({}, 'credits'));
      expect(store.getActions()).toEqual(expectedAction);
    })

    it('should create DESELECT_GENED action when dropdownId is genEds', () => {
      const expectedAction = [{
        type: 'DESELECT_GENED',
        item: {}
      }];

      store.dispatch(actions.deselectItem({}, 'genEds'));
      expect(store.getActions()).toEqual(expectedAction);
    })
  })

  it('should create FETCHED_COURSES action', () => {
    const expectedAction = [{
      type: 'FETCHED_COURSES',
      courses: []
    }];

    store.dispatch(actions.coursesFetched([]));
    expect(store.getActions()).toEqual(expectedAction);
  })

  it('should create UPDATED_SEARCH_QUERY action', () => {
    const expectedAction = [{
      type: 'UPDATED_SEARCH_QUERY',
      searchQuery: 'test'
    }];

    store.dispatch(actions.searchQueryUpdate('test'));
    expect(store.getActions()).toEqual(expectedAction);
  })

  describe('pagination actions', () => {
    it('should create NEXT_PAGE action', () => {
      const expectedAction = [{
        type: 'NEXT_PAGE',
        page: 1
      }];
  
      store.dispatch(actions.goToNextPage(0));
      expect(store.getActions()).toEqual(expectedAction);
    })
    
    it('should create PREV_PAGE action', () => {
      const expectedAction = [{
        type: 'PREV_PAGE',
        page: 0
      }];
  
      store.dispatch(actions.goToPrevPage(1));
      expect(store.getActions()).toEqual(expectedAction);
    })
  })
})
