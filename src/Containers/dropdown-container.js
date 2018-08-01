import { connect } from 'react-redux';
import { selectItem, deselectItem } from '../State/actions';
import Dropdown from '../Components/dropdown';
import getSelectedItems from '../Selectors/dropdownSelector';
import constants from '../constants';

const getItems = (id) =>
  constants[id];

const mapStateToProps = (state, props) => {
  return {items: getItems(props.id),
  selectedItems: getSelectedItems(state, props)}
}

const mapDispatchToProps = (dispatch) => ({
  selectItem: (item, dropdownId) => dispatch(selectItem(item, dropdownId)),
  deselectItem: (item, dropdownId) => dispatch(deselectItem(item, dropdownId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
