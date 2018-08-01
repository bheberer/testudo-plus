import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from '../Components/search-bar';
import { searchQueryUpdate } from '../State/actions';

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (event) => {
      dispatch(searchQueryUpdate(event.target.value))
    }
  }
}

export class SearchBarContainer extends Component {
  render() {
    return (
      <SearchBar { ...this.props } />
    )
  }
}

export default connect(null, mapDispatchToProps)(SearchBarContainer)
