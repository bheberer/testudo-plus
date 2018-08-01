import { createSelector } from 'reselect';

const getSelectedDepartments = (state) => state.selectedDepartments;
const getSelectedCredits = (state) => state.selectedCredits;
const getSelectedGenEds = (state) => state.selectedGenEds;
const getDropdownId = (state, props) => props.id;

const getSelectedItems = createSelector(
  [getSelectedDepartments, getSelectedCredits, getSelectedGenEds, getDropdownId],
  (departments, credits, genEds, id) => {
    if (id === 'departments') return departments
    else if (id === 'credits') return credits
    else return genEds
  }
)

export default getSelectedItems;
