import React from 'react';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { departments } from '../constants';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  dropdown: {
    width: 200
  }
});

const DepartmentDropdown = (props) => {

  const { classes } = props;

  const renderMenuItems = () => {
    return (departments.map(department => 
      <MenuItem value={ department }>{ department }</MenuItem>
    ))
  }

  const handleSelectDepartment = () => props.selectDepartment(props.selectDepartment);

  return (
    <form>
      <FormControl>
        <InputLabel>Department</InputLabel>
        <Select 
          onChange={ handleSelectDepartment } 
          value=''
          className={ classes.dropdown }
        >
          { renderMenuItems() }
        </Select>
      </FormControl>
    </form>
  )
}

export default withStyles(styles)(DepartmentDropdown);