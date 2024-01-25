import { Seq } from 'immutable';

export default function printBestStudents(object) {
  const studentSeq = Seq(object);

  const filteredStudents = studentSeq.filter((student) => {
    student.firstName.charAt(0).toUpperCase();
    return student.grade > 70;
  });

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const studentList = filteredStudents.toJS();

  Object.keys(studentList).map((key) => {
    studentList[key].firstName = capitalizeFirstLetter(studentList[key].firstName);
    studentList[key].lastName = capitalizeFirstLetter(studentList[key].lastName);
    return studentList[key];
  });

  console.log(studentList);
}
