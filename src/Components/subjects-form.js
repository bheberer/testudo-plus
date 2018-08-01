import React, { Component } from 'react';

export default class SubjectsForm extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      subject: '',
      subjects: ['ASTR', 'CMSC', 'MATH', 'STAT']
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({ subject: event.target.value });
  }

  render() {
    const renderForm = this.state.subjects.map(subject => 
      <option value={ subject }>{ subject }</option>
    );
    
    return (
      <form onSubmit={ this.handleSubmit }>
        <select value='Please select a subject...'>
          { renderForm }
        </select>
      </form>
    )
  }
}