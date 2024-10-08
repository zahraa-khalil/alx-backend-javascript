export default function getStudentsByLocation(students, location) {
  students.filter((student) => student.location === location);
}
