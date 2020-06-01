
import React, { Component } from 'react';
import { Column, Row } from 'simple-flexbox';

class Courses extends Component {
  render() {
    return (
      <Column flexGrow={1}>
        <Row horizontal='center'>
          <h1>COURSES</h1>
        </Row>
        <Row vertical='center'>
          <Column flexGrow={1} horizontal='center'>
            <h3> Column 1 </h3>
            <span> column 1 content </span>
          </Column>
          <Column flexGrow={1} horizontal='center'>
            <h3> Column 2 </h3>
            <span> column 2 content </span>
          </Column>
        </Row>
      </Column>
    );
  }
}

export default Courses;