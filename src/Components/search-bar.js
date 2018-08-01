import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  searchBar: {
    width: 200,
  }
})

export class SearchBar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <form>
        <TextField 
          onChange={ this.props.onChange } 
          label='Search for courses...' 
          margin='normal'
          className={ classes.searchBar }
        />
      </form>
    )
  }
}

export default withStyles(styles)(SearchBar);

