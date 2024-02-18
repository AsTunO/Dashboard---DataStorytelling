import mapRange from "../AuxFunctions/mapRange.js"

function getUserGrade(user, quizGrades) {

    let studentGrade = null

    quizGrades.forEach(current => {
        if(user.id == current.userid) {
            console.log("opa")
            studentGrade = mapRange(current.student_grade);
        }
    })

    return studentGrade
}

export default getUserGrade