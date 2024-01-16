import React from 'react';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';

const headerRowStyle = {
  backgroundColor: '#deb5b545',
};

const rowStyle = {
  backgroundColor: '#f5f5f5ab',
};

function CourseListRow({ isHeader = false, course }) {
  if (isHeader) {
    if (!course.credit) {
      return (
        <tr style={headerRowStyle}>
          <th colSpan="2">{course.name}</th>
        </tr>
      );
    } else {
      return (
        <tr style={headerRowStyle}>
          <th>{course.name}</th>
          <th>{course.credit}</th>
        </tr>
      );
    }
  } else {
    return (
      <tr style={rowStyle}>
        <td>{course.name}</td>
        <td>{course.credit}</td>
      </tr>
    );
  }
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  course: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    credit: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
};

export default CourseListRow;
