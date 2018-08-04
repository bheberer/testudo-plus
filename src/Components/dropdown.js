import React from 'react';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Clear from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';

const styles = (theme) => ({
  dropdown: {
    width: 200
  },
  button: {
    width: 30,
    height: 30
  }
});

export const Dropdown = (props) => {

  const { classes } = props;

  const handleOnChange = (event) =>
    props.selectedItems.includes(event.target.value) ?
      props.deselectItem(props.id, event.target.value) :
      props.selectItem(props.id, event.target.value);

  const handleClear = () => props.clearItems(props.id);

  const renderItems = (items) => {
    return (items.map(item => 
      <MenuItem value={ item }>{ item }</MenuItem>
    ))
  };

  return (
    <form>
      <FormControl>
        <InputLabel>{ props.id }</InputLabel>
        <Select 
          onChange={ handleOnChange } 
          value=''
          className={ classes.dropdown }
        >
          { renderItems(props.items) }
        </Select>
      </FormControl>
      <IconButton onClick={ handleClear } className={ classes.button }>
        <Clear />
      </IconButton>
    </form>
  );
}

export default withStyles(styles)(Dropdown);
