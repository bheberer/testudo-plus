import React, { Component } from 'react';
import * as actions from '../State/actions';
import { connect } from 'react-redux';
import DepartmentDropdown from '../Components/department-dropdown';

const mapStateToProps = (state) => ({
  selectedDepartment: state.selectedDepartment
});

const mapDispatchToProps = (dispatch) => ({
  selectDepartment: (department) => dispatch(actions.selectDepartment(department))
});

const DepartmentDropdownContainer = connect(mapStateToProps, mapDispatchToProps)(DepartmentDropdown);

export default DepartmentDropdownContainer as DepartmentDropdown;