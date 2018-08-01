import React, { Component } from 'react';
import { connect } from 'react-redux';
import { departments } from '../constants';

export class DepartmentCheckbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departments: departments,
      checkValues: departments.map(department => false)
    }
  }

  onCheck = (event) => this.setState()
}

const mapStateToProps = (state) => ({
  departments,
  checkValues: state.deptCheckValues
})

const mapDispatchToProps = (dispatch) => ({
  
})