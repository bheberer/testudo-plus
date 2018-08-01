import React, { Component } from 'react';

export default class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subject: 'CMSC',
      subjects: ['ASTR', 'CMSC', 'MATH', 'STAT']
    }
  }
}