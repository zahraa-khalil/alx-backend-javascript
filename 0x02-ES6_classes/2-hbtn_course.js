export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    } else {
      throw new Error('Name must be a string');
    }
  }

  set length(newLength) {
    if (typeof newLength === 'number' && newLength > 0) {
      this._length = newLength;
    } else {
      throw new Error('Length must be a number');
    }
  }

  set students(newStudents) {
    if (
      Array.isArray(newStudents)
      && newStudents.every((student) => typeof student === 'string')
    ) {
      this._students = newStudents;
    } else {
      throw new Error('Students must be an array of strings');
    }
  }
}
