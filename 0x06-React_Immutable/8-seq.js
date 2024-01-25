import { Seq } from 'immutable';

export default function printBestStudents(object) {
  const seq = Seq(object);

  const filtered = seq.filter(student => student.score > 70)
                      .map(student => ({
                          ...student,
                          firstName: capFirstLetter(student.firstName),
                          lastName: capFirstLetter(student.lastName)
                      }))
                      .toObject();

  console.log(filtered);
}

function capFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Example usage:
const grades = {
  1: {
    score: 99,
    firstName: 'guillaume',
    lastName: 'salva',
  },
  2: {
    score: 65,
    firstName: 'john',
    lastName: 'doe',
  },
  3: {
    score: 85,
    firstName: 'emma',
    lastName: 'smith',
  }
};

printBestStudents(grades);
