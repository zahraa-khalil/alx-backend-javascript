export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsByCity = students.filter((student) => student.location === city);

  const updatedStudents = studentsByCity.map((student) => {
    const studentGrade = newGrades.find((grade) => grade.studentId === student.id);

    return { ...student, grade: studentGrade ? studentGrade.grade : 'N/A' };
  });

  return updatedStudents;
}
