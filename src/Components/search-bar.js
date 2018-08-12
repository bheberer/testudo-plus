import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { pure, compose } from 'recompose';

const styles = (theme) => ({
  searchBar: {
    width: 200,
  }
})

const enhance = compose(
  withStyles(styles),
  pure
)

const SearchBar = (props)  => {

    const { classes } = props;

    return (
      <form>
        <TextField 
          onChange={ props.onChange } 
          label='Search for courses...' 
          margin='normal'
          className={ classes.searchBar }
        />
      </form>
    )
  }

export default enhance(SearchBar);
