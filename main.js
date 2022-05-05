class Student{
    constructor(fullname, point){
        this.Fullname = fullname;
        this.Point = point; 
    }
}

function checkStudentPoint(studentsArr){
    let students = []
    for (let i = 0; i < studentsArr.length; i++) {
      if(studentsArr[i].point>50){
          students[students.length]=studentsArr[i];
      }
    }
    return students;
}

let student1 = new Student("Allahverdi Ahmedov", 40);
let student2 = new Student("Mushviq Shukurov", 71);
let student3 = new Student("Ibrahim Huseynov", 41);

console.log(checkStudentPoint([student1, student2, student3]));
