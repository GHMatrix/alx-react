import React from "react";
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import CourseListRow from "../CourseList/CourseListRow";
import CourseShape from "./CourseShape";

const styles = StyleSheet.create({
  courseList: {
    width: "100%", // Set the desired width for the table
    borderCollapse: "collapse",
    marginTop: "20px", // Adjust the margin as needed
  },
});

function CourseList({ listCourses }) {
  const renderCourseRows = () => {
    if (listCourses.length === 0) {
      return (
        <CourseListRow
          textFirstCell="No course available yet"
          textSecondCell={null}
          isHeader={false}
          key="no-courses"
        />
      );
    } else {
      return listCourses.map(course => (
        <CourseListRow
          key={course.id}
          isHeader={false}
          course={course}
        />
      ));
    }
  };

  return (
    <table className={css(styles.courseList)}>
      <thead>
        <CourseListRow textFirstCell="Available courses" textSecondCell={null} isHeader={true} />
        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
      </thead>
      <tbody>
        {renderCourseRows()}
      </tbody>
    </table>
  );
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;
