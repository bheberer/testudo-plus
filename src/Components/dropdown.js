import React from 'react';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';

const styles = (theme) => ({
  dropdown: {
    width: 200
  }
});

export const Dropdown = (props) => {

  const { classes } = props;

  console.log(props);

  const handleOnChange = (event) =>
    props.selectedItems.includes(event.target.value) ?
      props.deselectItem(event.target.value, props.id) :
      props.selectItem(event.target.value, props.id);

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
    </form>
  );
}

export default withStyles(styles)(Dropdown);
