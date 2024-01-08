import PropTypes from 'prop-types';
import CourseShape from './CourseShape';

function CourseListRow({ isHeader = false, course }) {
    if (isHeader) {
        if (!course.credit) {
            return (
                <tr>
                    <th colSpan="2">{course.name}</th>
                </tr>
            );
        } else {
            return (
                <tr>
                    <th>{course.name}</th>
                    <th>{course.credit}</th>
                </tr>
            );
        }
    } else {
        return (
            <tr>
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
