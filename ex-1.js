function findStudentIndex(students, searchStudent) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  for (let i = 0; i < students.length; i++) {
    if (students[i] === searchStudent) {
      return i;
    }
  }
  return -1;
}

students = [
  "Andrew",
  "Bobby",
  "Diana",
  "George",
  "Hannah",
  "Isaac",
  "Jasmine",
  "John",
];
searchStudent = "John";
console.log(findStudentIndex(students, searchStudent));

// ตอบคำถามตรงนี้จ้า
// O(n) เพราะว่าการค้นหาเรียงตาม loop 1 loop
