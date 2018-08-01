import React, { Component } from 'react';

export default class SubjectsForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentClass: '',
      classes: [
        'CMSC131', 'CMSC132', 'CMSC216', 'ASTR101', 'ASTR231', 
        'ASTR330', 'STAT100', 'STAT400', 'STAT401', 'MATH140', 'MATH141', 'MATH240']
    };
  }

  getDerivedStateFromProps(nextProps, prevState) {
    return { classes: prevState.classes.filter(currClass => currClass.includes(nextProps.subject)) }
  }

  render() {
    const renderForm = this.state.classes.map(currClass => 
      <option value={ currClass }>{ currClass }</option>
    );

    return (
      <form onSubmit={ this.handleSubmit }>
        <select value='Please select a class...'>
          { renderForm }
        </select>
      </form>
    )
  }
}