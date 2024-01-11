import React from 'react';
import CourseList from './CourseList';
import { render, screen } from '@testing-library/react';

describe('CourseList Component', () => {
  test('renders correctly with an empty listCourses array', () => {
    render(<CourseList />);
    expect(screen.getByText('No course available yet')).toBeInTheDocument();
    expect(screen.queryByText('Course name')).toBeNull();
  });

  test('renders listCourses correctly', () => {
    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];

    render(<CourseList listCourses={listCourses} />);
    
    listCourses.forEach(course => {
      expect(screen.getByText(course.name)).toBeInTheDocument();
      expect(screen.getByText(course.credit.toString())).toBeInTheDocument();
    });

    expect(screen.getByText('Course name')).toBeInTheDocument();
    expect(screen.queryByText('No course available yet')).toBeNull();
  });
});
