
// we will hold our objects in a lists and reach them with a loop.

// created for store the lecture objects
let lectures = [
    { ects: 6, id: 1, name: "Database Management Systems", pointScale: 7, students: []},
        { ects: 6, id: 2, name: "Computer Network", pointScale: 7, students: [] },
        { ects: 5, id: 3, name: "Introduction to Programming", pointScale: 6, students: [] },
        { ects: 7, id: 4, name: "Software Engineering", pointScale: 8, students: [] },
        { ects: 4, id: 5, name: "Web Development", pointScale: 6, students: [] },
        { ects: 5, id: 6, name: "Data Structures and Algorithms", pointScale: 7, students: [] }
]; 

 // created for store the student objects
let students = [
    { id: 1, lectures: [], name: "Numan", surname: "Varol" },
  { id: 2, lectures: [], name: "Aisha", surname: "Khan" },
  { id: 3, lectures: [], name: "Carlos", surname: "Gonzalez" },
  { id: 4, lectures: [], name: "Emily", surname: "Johnson" },
  { id: 5, lectures: [], name: "Dylan", surname: "Williams" },
  { id: 6, lectures: [], name: "Mia", surname: "Martinez" },
  { id: 7, lectures: [], name: "Ethan", surname: "Anderson" },
  { id: 8, lectures: [], name: "Olivia", surname: "Moore" },
  { id: 9, lectures: [], name: "Ella", surname: "Brown" },
  { id: 10, lectures: [], name: "Logan", surname: "Garcia" },
  { id: 11, lectures: [], name: "Avery", surname: "Hill" },
  { id: 12, lectures: [], name: "Jackson", surname: "Perez" },
  { id: 13, lectures: [], name: "Grace", surname: "Cook" },
  { id: 14, lectures: [], name: "Carter", surname: "Ward" },
  { id: 15, lectures: [], name: "Chloe", surname: "Fisher" },
  { id: 16, lectures: [], name: "Mateo", surname: "Barnes" },
  { id: 17, lectures: [], name: "Eleanor", surname: "Foster" },
  { id: 18, lectures: [], name: "Gabriel", surname: "Evans" },
  { id: 19, lectures: [], name: "Zoe", surname: "Bennett" },
  { id: 20, lectures: [], name: "Mason", surname: "Reed" },
  { id: 21, lectures: [], name: "Aria", surname: "Bailey" },
  { id: 22, lectures: [], name: "Landon", surname: "Ross" },
  { id: 23, lectures: [], name: "Lily", surname: "Ward" },
  { id: 24, lectures: [], name: "Christopher", surname: "Powell" },
  { id: 25, lectures: [], name: "Addison", surname: "Coleman" },
  { id: 26, lectures: [], name: "Nolan", surname: "Hudson" },
  { id: 27, lectures: [], name: "Paisley", surname: "Perry" },
  { id: 28, lectures: [], name: "Grayson", surname: "Bishop" },
  { id: 29, lectures: [], name: "Hazel", surname: "Henderson" },
  { id: 30, lectures: [], name: "Lincoln", surname: "Cruz" },
  { id: 31, lectures: [], name: "Aiden", surname: "Mendoza" },
  { id: 32, lectures: [], name: "Sofia", surname: "Nguyen" },
  { id: 33, lectures: [], name: "Eli", surname: "Morgan" },
  { id: 34, lectures: [], name: "Aubrey", surname: "Gibson" },
  { id: 35, lectures: [], name: "Brody", surname: "Wells" },
  { id: 36, lectures: [], name: "Stella", surname: "Bowman" },
  { id: 37, lectures: [], name: "Levi", surname: "Black" },
  { id: 38, lectures: [], name: "Violet", surname: "Bryant" },
  { id: 39, lectures: [], name: "Wyatt", surname: "Warren" },
  { id: 40, lectures: [], name: "Madison", surname: "Owens" },
  { id: 41, lectures: [], name: "Parker", surname: "Gomez" },
  { id: 42, lectures: [], name: "Lucy", surname: "Ford" },
  { id: 43, lectures: [], name: "Xavier", surname: "Marshall" },
  { id: 44, lectures: [], name: "Elena", surname: "Fleming" },
  { id: 45, lectures: [], name: "Jaxon", surname: "Henry" },
  { id: 46, lectures: [], name: "Lillian", surname: "Ortega" },
  { id: 47, lectures: [], name: "Ryder", surname: "Hart" },
  { id: 48, lectures: [], name: "Clara", surname: "Ramos" },
  { id: 49, lectures: [], name: "Silas", surname: "McCarthy" },
  { id: 50, lectures: [], name: "Adeline", surname: "Newton" },
  { id: 51, lectures: [], name: "Gavin", surname: "Pratt" },
  { id: 52, lectures: [], name: "Hannah", surname: "Saunders" },
  { id: 53, lectures: [], name: "Ezra", surname: "Potter" },
  { id: 54, lectures: [], name: "Mila", surname: "Thornton" },
  { id: 55, lectures: [], name: "Hudson", surname: "Boyd" },
  { id: 56, lectures: [], name: "Nova", surname: "Lynch" },
  { id: 57, lectures: [], name: "Finn", surname: "Sherman" },
  { id: 58, lectures: [], name: "Penelope", surname: "Fisher" },
  { id: 59, lectures: [], name: "Colton", surname: "Hayes" },
  { id: 60, lectures: [], name: "Aaliyah", surname: "Cunningham" },
  { id: 61, lectures: [], name: "Owen", surname: "Sharp" },
  { id: 62, lectures: [], name: "Ellie", surname: "Peters" },
  { id: 63, lectures: [], name: "Bentley", surname: "Horton" },
  { id: 64, lectures: [], name: "Natalie", surname: "Galloway" },
  { id: 65, lectures: [], name: "Leo", surname: "Hubbard" },
  { id: 66, lectures: [], name: "Alyssa", surname: "Beasley" },
  { id: 67, lectures: [], name: "Jace", surname: "Tucker" },
  { id: 68, lectures: [], name: "Luna", surname: "Landry" },
  { id: 69, lectures: [], name: "Everett", surname: "McClure" },
  { id: 70, lectures: [], name: "Hailey", surname: "Stout" },
  { id: 71, lectures: [], name: "Kai", surname: "Bass" },
  { id: 72, lectures: [], name: "Mackenzie", surname: "Dickson" },
  { id: 73, lectures: [], name: "Micah", surname: "Harrison" },
  { id: 74, lectures: [], name: "Amanda", surname: "Hodge" },
  { id: 75, lectures: [], name: "Zachary", surname: "McKenzie" },
  { id: 76, lectures: [], name: "Layla", surname: "Carr" },
  { id: 77, lectures: [], name: "Kingston", surname: "Mayer" },
  { id: 78, lectures: [], name: "Adalyn", surname: "Orr" },
  { id: 79, lectures: [], name: "Harrison", surname: "Morton" },
  { id: 80, lectures: [], name: "Bella", surname: "Waller" },
  { id: 81, lectures: [], name: "Evan", surname: "Cabrera" },
  { id: 82, lectures: [], name: "Skylar", surname: "McDowell" },
  { id: 83, lectures: [], name: "Jax", surname: "Key" },
  { id: 84, lectures: [], name: "Ariana", surname: "Gillespie" },
  { id: 85, lectures: [], name: "Braxton", surname: "Riddle" },
  { id: 86, lectures: [], name: "Isla", surname: "Rangel" },
  { id: 87, lectures: [], name: "Jordan", surname: "Hess" },
  { id: 88, lectures: [], name: "Lydia", surname: "Lindsay" },
  { id: 89, lectures: [], name: "Rowan", surname: "Blackburn" },
  { id: 90, lectures: [], name: "Bryce", surname: "Blevins" }
];

// created for store the studentLecture objects
let studentLectures = [

]; 


// Show the passed students
function showPassedStudents(lectureId){
    // change resultHeader
    document.querySelector(".resultHeader").innerHTML = "Passed Students of the Lecture:" + lectureId;
    // creating table elements
    document.querySelector("#resultTable").innerHTML = `
        <tr>
            <th>Student ID</th>
            <th>Student Name</th>
            <th>Student Surname</th>
            <th>Midterm Score</th>
            <th>Final Score</th>
            <th>Letter Grade</th>
            <th>Delete Grade</th>
        </tr>
    `;
    // creating table rows
    for (let i = 0; i < getPassedStudents(lectureId).length; i++) {
        let passedStudent = getPassedStudents(lectureId)[i];
        let studentLecture = studentLectures[i];
        if (studentLecture.student.id == passedStudent.id) {
            document.querySelector("#resultTable").innerHTML += `
                <tr>
                    <td>${studentLecture.student.id}</td>
                    <td>${studentLecture.student.name}</td>
                    <td>${studentLecture.student.surname}</td>
                    <td>${studentLecture.midtermScore}</td>
                    <td>${studentLecture.finalScore}</td>
                    <td>${studentLecture.letterGrade}</td>
                    <td><button class="btn btn-danger" onclick="deleteStudentLecture('${studentLecture.student.id}', '${studentLecture.lecture.id}')">Delete</button></td>
                </tr>
            `;
        }
    }
}

// Show the failed students
function showFailedStudents(lectureId){
    // change resultHeader
    document.querySelector(".resultHeader").innerHTML = "Failed Students of the Lecture:" + lectureId;
    // creating table elements
    document.querySelector("#resultTable").innerHTML = `
        <tr>
            <th>Student ID</th>
            <th>Student Name</th>
            <th>Student Surname</th>
            <th>Midterm Score</th>
            <th>Final Score</th>
            <th>Letter Grade</th>
            <th>Delete Grade</th>
        </tr>
    `;
    // creating table rows
    for (let i = 0; i < getFailedStudents(lectureId).length; i++) {
        let failedStudent = getFailedStudents(lectureId)[i];
        let studentLecture = studentLectures[i];
        if (studentLecture.student.id == failedStudent.id) {
            document.querySelector("#resultTable").innerHTML += `
                <tr>
                    <td>${studentLecture.student.id}</td>
                    <td>${studentLecture.student.name}</td>
                    <td>${studentLecture.student.surname}</td>
                    <td>${studentLecture.midtermScore}</td>
                    <td>${studentLecture.finalScore}</td>
                    <td>${studentLecture.letterGrade}</td>
                    <td><button class="btn btn-danger" onclick="deleteStudentLecture('${studentLecture.student.id}', '${studentLecture.lecture.id}')">Delete</button></td>
                </tr>
            `;
        }
    }
}

// creating table for lectures 
function createLecturesTable() {
    // reaching html elements with js and assigning it to use.
    document.querySelector(".resultHeader").innerHTML = "Lectures";

    // creation of table elements for lecture.
    document.querySelector("#resultTable").innerHTML = `
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Point Scale</th>
            <th>ECTS</th>
            <th>Number of Students</th>
            <th>Students Passed</th>
            <th>Students Failed</th>
            <th>Average Score</th>
            <th>Students</th>
            <th>Delete</th>
        </tr>
    `;
    // creation of table rows for lecture.
    for (let i = 0; i < lectures.length; i++) {
        let lecture = lectures[i];
        document.querySelector("#resultTable").innerHTML += `
            <tr>
                <td>${lecture.id}</td>
                <td>${lecture.name}</td>
                <td>${lecture.pointScale}</td>
                <td>${lecture.ects}</td>
                <td>${lecture.students.length}</td>
                <td id="passed">${getPassedStudents(lecture.id).length}
                <button class="btn" onclick="showPassedStudents('${lecture.id}')">Show</button>
                </td>
                <td id="failed">${getFailedStudents(lecture.id).length}
                <button class="btn" onclick="showFailedStudents('${lecture.id}')">Show</button>
                </td>
                <td>${getAverageScore(lecture)}</td>
                <td><button class="btn" onclick="showStudentsOfLecture('${lecture.id}')">Students</button></td>
                <td><button class="btn" onclick="deleteLecture('${lecture.id}')">Delete</button></td>
            </tr>
        `;
    }
}

// function(constructor) to create a new lecture object
function createLecture(id, name, pointScale, ects) {
    return {
        id: id,
        name: name,
        pointScale: pointScale,
        ects: ects,
        students: []
    };
}

// finding how many students that passed the lecture with comparing their letter grade with F.
function getPassedStudents(lectureId) {
    let passedStudents = [];
    for (let i = 0; i < studentLectures.length; i++) {
        let studentLecture = studentLectures[i];
        if (studentLecture.lecture.id == lectureId && studentLecture.letterGrade != "F") {
            passedStudents.push(studentLecture.student);
        }
    }
    return passedStudents;
}

// finding how many students that failed the lecture with comparing their letter grade with F.
function getFailedStudents(lectureId) {
    let failedStudents = [];
    for (let i = 0; i < studentLectures.length; i++) {
        let studentLecture = studentLectures[i];
        if (studentLecture.lecture.id == lectureId && studentLecture.letterGrade == "F") {
            failedStudents.push(studentLecture.student);
        }
    }
    return failedStudents;
}

// finding average score of the lecture by getting all the students that taking this lecture and calculating their grade and dividing it to the student count.
function getAverageScore(lecture) {
    let totalScore = 0;
    let midtermScore = 0;
    let finalScore = 0;
    for (let i = 0; i < lecture.students.length; i++) {
        let student = lecture.students[i];
        let studentLecture = studentLectures.find(studentLecture => studentLecture.student.id == student.id);
        midtermScore = parseInt(studentLecture.midtermScore);
        finalScore = parseInt(studentLecture.finalScore);
        totalScore += (midtermScore*4 + finalScore*6) / 10
    }
    return (totalScore / lecture.students.length).toFixed(2);           // converting number to string with toFixed.
}

//----------------------------------------------------------------------
//Buttons.

//Adding Lecture Button
function addLecture(event) {
    event.preventDefault();
    // reaching the lecture id and name from the input fields
    let id = document.getElementById("lectureCode").value;
    let name = document.getElementById("lectureName").value;
    let pointScale = document.getElementById("pointScale").value;
    let ects = document.getElementById("ects").value;
    // if lecture is empty display message.
    if (id == "" || name == "" || pointScale == "" || ects == "") {
        alert("Please fill in all fields!");
        return;
    }
    //if lecture already exists, display message.
    for (let i = 0; i < lectures.length; i++) {
        if (lectures[i].id == id) {
            alert("Lecture already exists!");
            return;
        }
    }

    // if there is no problem create a new lecture object

    let lecture = createLecture(id, name, pointScale,ects);
    // adding this lecture to the lectures array
    lectures.push(lecture);
    // create a table of lectures
    createLecturesTable();
}

//same processes for update lecture button and delete lecture button.

// Adding update lecture
function updateLecture(event) {
    event.preventDefault();
    let id = document.getElementById("lectureCode").value;
    let name = document.getElementById("lectureName").value;
    let pointScale = document.getElementById("pointScale").value;
    let ects = document.getElementById("ects").value;
    if (id == "" || name == "") {
        alert("Please fill in all fields!");
        return;
    }
    let lecture = lectures.find(lecture => lecture.id == id);
    lecture.name = name;
    lecture.pointScale = pointScale;
    lecture.ects = ects;
    createLecturesTable();
    lecture.students.forEach(student => {
        let studentLecture = studentLectures.find(studentLecture => studentLecture.lecture.id == id && studentLecture.student.id == student.id);
        if(studentLecture !== undefined){
            studentLecture.lecture.pointScale = pointScale;
            studentLecture.lecture.ects = ects;
            studentLecture.letterGrade = evaluateGrade(studentLecture.midtermScore, studentLecture.finalScore, lecture.pointScale);
            }
    });
}


// Adding delete lecture button
function deleteLecture(id) {
    let lecture = lectures.find(lecture => lecture.id == id);
    // remove from the array
    lectures.splice(lectures.indexOf(lecture), 1);
    createLecturesTable();
    for (let i = 0; i < studentLectures.length; i++) {
        if (studentLectures[i].lecture.id == id) {
            studentLectures.splice(i, 1);
        }
    }
}
 //---------------------------------------------------------------------

// Student Part.

// function(constructor) to create a new student object.
function createStudent(id, name, surname) {
    return {
        id: id,
        name: name,
        surname: surname,
        lectures: []
    };
}

// function to create a table of students
function createStudentsTable() {
    document.querySelector(".resultHeader").innerHTML = "Students";

    // create table elements
    document.querySelector("#resultTable").innerHTML = `
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Lecture Count</th>
            <th>GPA</th>
            <th>Lectures</th>
            <th>Delete</th>
        </tr>
    `;
    // creation of table rows
    for (let i = 0; i < students.length; i++) {
        let student = students[i];
        document.querySelector("#resultTable").innerHTML += `
            <tr>
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.surname}</td>
                <td>${student.lectures.length}</td>
                <td>${getGPA(student)}</td>
                <td><button class="btn" onclick="showStudentLectures('${student.id}')">Lectures</button></td>
                <td><button class="btn" onclick="deleteStudent('${student.id}')">Delete</button></td>
            </tr>
        `;
    }
}


//create a table for a specific student
function createStudentTable(student) {
    document.querySelector(".resultHeader").innerHTML = "Students";

    // create table elements
    document.querySelector("#resultTable").innerHTML = `
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Lecture Count</th>
            <th>GPA</th>
            <th>Lectures</th>
            <th>Delete</th>
        </tr>
    `;
    // creation of table rows
        document.querySelector("#resultTable").innerHTML += `
            <tr>
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.surname}</td>
                <td>${student.lectures.length}</td>
                <td>${getGPA(student)}</td>
                <td><button class="btn" onclick="showStudentLectures('${student.id}')">Lectures</button></td>
                <td><button class="btn" onclick="deleteStudent('${student.id}')">Delete</button></td>
            </tr>
        `;
    }

// function to calculate the GPA of a given student.
function getGPA(student) {
    let totalScore = 0;
    let totalECTS = 0;
    let midtermScore = 0;
    let finalScore = 0;
    for (let i = 0; i < studentLectures.length; i++) {
        let studentLecture = studentLectures[i];
        if (studentLecture.student.id == student.id) {
            midtermScore = parseInt(studentLecture.midtermScore);
            finalScore = parseInt(studentLecture.finalScore);
            ects = parseInt(studentLecture.lecture.ects);
            // Assuming maximum midterm and final scores are 100 and there is a 40% midterm and 60% final percantage
            midtermScore = (midtermScore /25) * 4;
            finalScore = (finalScore /25) * 6;
            totalScore += (midtermScore + finalScore)*(studentLecture.lecture.ects) / 10;
            totalECTS += ects;
        }
    }

    // Avoid division by zero
    if (totalECTS == 0) {
        return "N/A";
    }

    // Calculate GPA on a scale of 0 to 4
    const gpa = (totalScore / totalECTS).toFixed(2);
    
    // Ensure GPA is capped at 4.0
    return Math.min(4.0, gpa);
}


//Adding Student Button
function addStudent(event) {
    event.preventDefault();
    let id = document.getElementById("studentId").value;
    let name = document.getElementById("studentName").value;
    let surname = document.getElementById("studentSurname").value;
    
    if (id == "" || name == "" || surname == "") {
        alert("Please fill all the fields!");
        return;
    }

    //not allowing user to input negative id
    if (id < 0) {
        alert("Please enter a positive number!");
        return;
    }

    for (let i = 0; i < students.length; i++) {
        let student = students[i];
        if (student.id == id) {
            alert("Student already exists!");
            return;
        }
    }
    // if there is no problem we will create our student.
    let student = createStudent(id, name, surname);
    students.push(student);
    // create a table of students
    createStudentsTable();
}

//updating student informations.
function updateStudent(event) {
    event.preventDefault();
    let id = document.getElementById("studentId").value;
    let name = document.getElementById("studentName").value;
    let surname = document.getElementById("studentSurname").value;
    if (id == "" || name == "" || surname == "") {
        alert("Please fill all the fields!");
        return;
    }

    if (id < 0) {
        alert("Please enter a positive number!");
        return;
    }

    // find the student object with the given id
    let student = students.find(student => student.id == id);
    student.name = name;
    student.surname = surname;
    createStudentsTable();
}

// Deleting Student Button
function deleteStudent(id) {
    // find the student object with the given id
    let student = students.find(student => student.id == id);
    students.splice(students.indexOf(student), 1);
    createStudentsTable();
    for (let i = 0; i < studentLectures.length; i++) {  
        if (studentLectures[i].student.id == id) {
            studentLectures.splice(i, 1);
        }
    }
}

// Adding students to the lecture.
// function(constructor) to create lecture of student object.
function createStudentLecture(student, lecture, midtermScore, finalScore, pointScale) {
    return {
        student: student,
        lecture: lecture,
        midtermScore: midtermScore,
        finalScore: finalScore,
        letterGrade: evaluateGrade(midtermScore, finalScore, pointScale)
    };
}

// function to evaluate the letter grade of a student for a lecture
function evaluateGrade(midtermScore, finalScore, pointScale) {
    // to calculate score elements should be integers
    midtermScore = parseInt(midtermScore);
    finalScore = parseInt(finalScore);
    //based on 40% Midterm 60% Final
    let totalScore = (4*midtermScore + 6*finalScore) /10;
    //calculating letter grade according to the pointScale

    if(pointScale == 7){
        if (totalScore >= 93) {
            return "A";
        } else if (totalScore >= 85) {
            return "B";
        } else if (totalScore >= 77) {
            return "C";
        } else if (totalScore >= 70) {
            return "D";
        } else {
            return "F";
        }
    }
    else{
        if (totalScore >= 90) {
            return "A";
        } else if (totalScore >= 80) {
            return "B";
        } else if (totalScore >= 70) {
            return "C";
        } else if (totalScore >= 60) {
            return "D";
        } else {
            return "F";
        }
    }
}

// adding student to a lecture function
function addStudentToLecture(student, lecture, midtermScore, finalScore) {
    lecture.students.push(student);
    student.lectures.push(lecture);
    // create a new object that holds both the student and lecture objects
    let studentLecture = createStudentLecture(student, lecture, midtermScore, finalScore, lecture.pointScale);
    studentLectures.push(studentLecture);
    console.log(lecture);
    console.log(student);
    console.log(studentLecture);
}

// adding student to lecture button

function addSTLButton(event) {
    event.preventDefault();
    let studentId = document.getElementById("add-studentId").value;
    let lectureId = document.getElementById("add-lectureCode").value;
    let midtermScore = document.getElementById("midtermScore").value;
    let finalScore = document.getElementById("finalScore").value;

    for (let i = 0; i < studentLectures.length; i++) {
        let studentLecture = studentLectures[i];
        if (studentLecture.student.id == studentId && studentLecture.lecture.id == lectureId) {
            alert("Student already added!");
            return;
        }
    }
    let checkstudent = students.find(student => student.id == studentId);
    let checklecture = lectures.find(lecture => lecture.id == lectureId);
    

    // controls to unwanted situations.
    if (checkstudent == undefined || checklecture == undefined) {
        alert("Student or lecture not exist!");
        return;
    }

    if (studentId == "" || lectureId == "" || midtermScore == "" || finalScore == "") {
        alert("Please fill all the fields!");
        return;
    }

    if (studentId < 0 || lectureId < 0) {
        alert("Please enter a positive number!");
        return;
    }

    if (midtermScore < 0 || midtermScore > 100 || finalScore < 0 || finalScore > 100) {
        alert("Midterm score and final score must be between 0 and 100!");
        return;
    }

    let student = students.find(student => student.id == studentId);
    if (student == undefined) {
        alert("Student not exist!");
        return;
    }

    let lecture = lectures.find(lecture => lecture.id == lectureId);
    if (lecture == undefined) {
        alert("Lecture not exist!");
        return;
    }
    addStudentToLecture(student, lecture, midtermScore, finalScore, lecture.pointScale);
    createStudentTable(student);
}



// updating student to lecture Button
function updateSTLButton(event) {
    event.preventDefault();
    let studentId = document.getElementById("add-studentId").value;
    let lectureId = document.getElementById("add-lectureCode").value;
    let midtermScore = document.getElementById("midtermScore").value;
    let finalScore = document.getElementById("finalScore").value;

    // controls to unwanted situations.
    if (studentId == "" || lectureId == "" || midtermScore == "" || finalScore == "") {
        alert("Please fill all the fields!");
        return;
    }
    let checkstudent = students.find(student => student.id == studentId);
    let checklecture = lectures.find(lecture => lecture.id == lectureId);
    
    if (checkstudent == undefined || checklecture == undefined) {
        alert("Student or lecture not exist!");
        return;
    }

    if (studentId < 0 || lectureId < 0) {
        alert("Please enter a positive number!");
        return;
    }

    if (midtermScore < 0 || midtermScore > 100 || finalScore < 0 || finalScore > 100) {
        alert("Midterm score and final score must be between 0 and 100!");
        return;
    }

    let student = students.find(student => student.id == studentId);
    if (student == undefined) {
        alert("Student not exist!");
        return;
    }

    let lecture = lectures.find(lecture => lecture.id == lectureId);
    if (lecture == undefined) {
        alert("Lecture not exist!");
        return;
    }

    let studentLecture = studentLectures.find(studentLecture => studentLecture.student.id == studentId && studentLecture.lecture.id == lectureId);
    if (studentLecture == undefined) {
        alert("Student not in lecture!");
        return;
    }

    studentLecture.midtermScore = midtermScore;
    studentLecture.finalScore = finalScore;
    studentLecture.letterGrade = evaluateGrade(midtermScore, finalScore, lecture.pointScale);
    createStudentsTable();
}


//searching students and lectures with name input (button)
function search(event){
    event.preventDefault();
    let name = document.getElementById("search-student-lecture").value;
    let option = document.getElementById("search_option").value;
    if(name == ""){
        alert("Please fill the field");
        return;
    }
    //checking for the selected option
    if(option == "Student"){
        // change resultHeader
        document.querySelector(".resultHeader").innerHTML = "Students Search: " + name;
        // creating table elements
        document.querySelector("#resultTable").innerHTML = `
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Lectures</th>
            <th>GPA</th>
        </tr>
    `   ;
        // creating table rows
        for (let i = 0; i < students.length; i++) {
            let student = students[i];
            if (student.name.toLowerCase().includes(name.toLowerCase())) {
                document.querySelector("#resultTable").innerHTML += `
                    <tr>
                        <td>${student.id}</td>
                        <td>${student.name}</td>
                        <td>${student.surname}</td>
                        <td><button class="btn btn-primary" onclick="showStudentLectures(${student.id})">Show Lectures</button></td>
                        <td>${getGPA(student)}</td>
                    </tr>
                `;
            }
        }
    }
    else{
        // change resultHeader
        document.querySelector(".resultHeader").innerHTML = "Lectures Search: " + name;

        // creating table elements
        document.querySelector("#resultTable").innerHTML = `
            <tr>
                <th>ID</th>
                <th>Class Name</th>
                <th>Number of Students</th>
                <th>Students Passed</th>
                <th>Students Failed</th>
                <th>Average Score</th>
                <th>Students</th>
                <th>Delete</th>
            </tr>
        `;
        // creating table rows
        for (let i = 0; i < lectures.length; i++) {
            if (lectures[i].name.toLowerCase().includes(name.toLowerCase())) {
                document.querySelector("#resultTable").innerHTML += `
                    <tr>
                        <td>${lectures[i].id}</td>
                        <td>${lectures[i].name}</td>
                        <td>${lectures[i].students.length}</td>
                        <td>${getPassedStudents(lectures[i].id).length}</td>
                        <td>${getFailedStudents(lectures[i].id).length}</td>
                        <td>${getAverageScore(lectures[i])}</td>
                        <td><button class="btn btn-primary" onclick="showStudentsOfLecture(${lectures[i].id})">Students</button></td>
                        <td><button class="btn btn-danger" onclick="deleteLecture(${lectures[i].id})">Delete</button></td>
                    </tr>
                `;
            }
        }
    }
}

//show the lectures of a student
function showStudentLectures(studentId) {
    // change resultHeader
    document.querySelector(".resultHeader").innerHTML = "Lectures of the student:" + studentId;
    // create table heads
    document.querySelector("#resultTable").innerHTML = `
        <tr>
            <th>Lecture Code</th>
            <th>Lecture Name</th>
            <th>Passed / Failed</th>
            <th>Midterm Score</th>
            <th>Final Score</th>
            <th>Letter Grade</th>
            <th>ECTS</th>
            <th>Delete Grade</th>
        </tr>
    `;
    // create table rows
    for (let i = 0; i < studentLectures.length; i++) {
        let studentLecture = studentLectures[i];
        if (studentLecture.student.id == studentId) {
            document.querySelector("#resultTable").innerHTML += `
                <tr>
                    <td>${studentLecture.lecture.id}</td>
                    <td>${studentLecture.lecture.name}</td>
                    <td>${checkPassed(studentLecture)}</td>
                    <td>${studentLecture.midtermScore}</td>
                    <td>${studentLecture.finalScore}</td>
                    <td>${studentLecture.letterGrade}</td>
                    <td>${studentLecture.lecture.ects}</td>
                    <td><button class="btn btn-danger" onclick="deleteStudentLecture('${studentLecture.student.id}', '${studentLecture.lecture.id}')">Delete</button></td>
                </tr>
            `;
        }
    }
}

// show the students of a lecture
function showStudentsOfLecture(lectureId) {
    // change resultHeader
    document.querySelector(".resultHeader").innerHTML = "Students of the Lecture:" + lectureId;
    // creating table elements
    document.querySelector("#resultTable").innerHTML = `
        <tr>
            <th>Student ID</th>
            <th>Student Name</th>
            <th>Student Surname</th>
            <th>Passed / Failed</th>
            <th>Midterm Score</th>
            <th>Final Score</th>
            <th>Letter Grade</th>
            <th>Delete Grade</th>
        </tr>
    `;
    // creating table rows
    for (let i = 0; i < studentLectures.length; i++) {
        let studentLecture = studentLectures[i];
        if (studentLecture.lecture.id == lectureId) {
            document.querySelector("#resultTable").innerHTML += `
                <tr>
                    <td>${studentLecture.student.id}</td>
                    <td>${studentLecture.student.name}</td>
                    <td>${studentLecture.student.surname}</td>
                    <td>${checkPassed(studentLecture)}</td>
                    <td>${studentLecture.midtermScore}</td>
                    <td>${studentLecture.finalScore}</td>
                    <td>${studentLecture.letterGrade}</td>
                    <td><button class="btn btn-danger" onclick="deleteStudentLecture('${studentLecture.student.id}', '${studentLecture.lecture.id}')">Delete</button></td>
                </tr>
            `;
        }
    }
}

//deletes student's lecture.
function deleteStudentLecture(studentId, lectureId) {
    // controls unwanted scenarios.
    let student = students.find(student => student.id == studentId);
    if (student == undefined) {
        alert("Student not exist!");
        return;
    }
    
    let lecture = lectures.find(lecture => lecture.id == lectureId);
    if (lecture == undefined) {
        alert("Lecture not exist!");
        return;
    }

    let studentLecture = studentLectures.find(studentLecture => studentLecture.student.id == studentId && studentLecture.lecture.id == lectureId);
    if (studentLecture == undefined) {
        alert("Student not exist in this lecture!");
        return;
    }

    studentLectures.splice(studentLectures.indexOf(studentLecture), 1);
    student.lectures.splice(student.lectures.indexOf(lecture), 1);
    lecture.students.splice(lecture.students.indexOf(student), 1);
    createStudentsTable();
}

// checks if the student is succesfull.
function checkPassed (studentLecture) {
    if (studentLecture.letterGrade == "F") {
        return "Failed";
    } else {
        return "Passed";
    }


}