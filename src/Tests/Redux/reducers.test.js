import { createReducer, selectedCourse, selectedDepartments, selectedCredits, selectedGenEds, courses, searchQuery, page } from '../../State/reducers';

describe('testing reducers', () => {
  describe('createReducer', () => {
    it('returns initial state when received action is not found', () => {
      const reducer = createReducer({}, { ['CLICK_CLASS']: () => ({ class: 'test' }) });
      const result = reducer(undefined, { type: 'TEST' });

      expect(result).toEqual({});
    })

    it('returns next state when received action is found', () => {
      const reducer = createReducer({}, { ['CLICK_COURSE']: () => ({ class: 'test' }) });
      const result = reducer(undefined, { type: 'CLICK_COURSE' })

      expect(result).toEqual({ class: 'test' });
    })
  })

  describe('selectedCourse', () => {
    it('CLICK_COURSE handler returns correct course', () => {
      const course = selectedCourse('', { type: 'CLICK_COURSE', classId: 'CMSC131' })
      expect(course).toEqual('CMSC131');
    })
  })

  describe('selectedDepartments', () => {
    it('SELECT_DEPARTMENT handler returns correct department', () => {
      const department = selectedDepartments([], { type: 'SELECT_DEPARTMENT', item: 'MATH' });
      expect(department).toEqual(['MATH']);
    })

    it('DESELECT_DEPARTMENT handler return correct new selected departments', () => {
      const department = selectedDepartments(['MATH'], { type: 'DESELECT_DEPARTMENT', item: 'MATH' });
      expect(department).toEqual([]);
    })
  })

  describe('selectedCredits', () => {
    it('SELECT_CREDIT handler returns correct credit value', () => {
      const credit = selectedCredits([], { type: 'SELECT_CREDIT', item: '4' });
      expect(credit).toEqual(['4']);
    })

    it('DESELECT_CREDIT handler return correct new select credit values', () => {
      const credit = selectedCredits(['4'], { type: 'DESELECT_CREDIT', item: '4' });
      expect(credit).toEqual([]);
    })
  })

  describe('selectedGenEds', () => {
    it('SELECT_GENED handler returns correct credit value', () => {
      const genEd = selectedGenEds([], { type: 'SELECT_GENED', item: 'DVUP' });
      expect(genEd).toEqual(['DVUP']);
    })

    it('DESELECT_GENED handler return correct new select credit values', () => {
      const genEd = selectedGenEds(['DVUP'], { type: 'DESELECT_GENED', item: 'DVUP' });
      expect(genEd).toEqual([]);
    })
  })

  describe('courses', () => {
    it('FETCHED_COURSES handler returns fetched courses', () => {
      const fetchedCourses = courses([], { type: 'FETCHED_COURSES', courses: ['CMSC131'] });
      expect(fetchedCourses).toEqual(['CMSC131']);
    })
  })
 
  describe('searchQuery', () => {
    it('UPDATED_SEARCH_QUERY handler returns correct query', () => {
      const query = searchQuery('', { type: 'UPDATED_SEARCH_QUERY', searchQuery: 'CMSC' });
      expect(query).toEqual('CMSC');
    })
  })

  describe('page', () => {
    it('NEXT_PAGE handler returns correct page number', () => {
      const testPage = page(0, { type: 'NEXT_PAGE', page: 1 });
      expect(testPage).toEqual(1);
    })

    it('PREV_PAGE handler return correct pgae value', () => {
      const testPage = page(0, { type: 'NEXT_PAGE', page: 1 });
      expect(testPage).toEqual(1);
    })
  })
})
