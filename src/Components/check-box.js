import React, { Component } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';

/*
Props
- array of content
- array of checked values
*/

const Checkbox = (props) => {

  const renderCheckBox = () => {
    props.content.map(element => {
      <FormControlLabel
        control={
          <Checkbox
            checked={ props.checkValues[element] }
            onChange= { props.onChange }
            value={ element.id }
          />
        }
        label={ element }
      />
    })
  }


  return (
    <Checkbox checked={ props. }
  );
}

export default withStyles(styles)(Checkbox);