import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import CourseShape from './CourseShape';

const styles = StyleSheet.create({
  headerRow: {
    backgroundColor: '#deb5b545',
  },
  defaultRow: {
    backgroundColor: '#f5f5f5ab',
  },
  rowChecked: {
    backgroundColor: '#e6e4e4',
  },
  th: {
    padding: '10px',
  },
});

function CourseListRow({ isHeader = false, course }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  if (isHeader) {
    if (!course.credit) {
      return (
        <tr className={css(styles.headerRow)}>
          <th className={css(styles.th)} colSpan="2">{course.name}</th>
        </tr>
      );
    } else {
      return (
        <tr className={css(styles.headerRow)}>
          <th className={css(styles.th)}>{course.name}</th>
          <th className={css(styles.th)}>{course.credit}</th>
        </tr>
      );
    }
  } else {
    return (
      <tr className={css(styles.defaultRow, isChecked && styles.rowChecked)}>
        <td className={css(styles.th)}>
          <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
          {course.name}
        </td>
        <td className={css(styles.th)}>{course.credit}</td>
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
