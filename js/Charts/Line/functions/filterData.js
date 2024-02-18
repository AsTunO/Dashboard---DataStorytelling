import sortEventsByTime from "../../../Tools/SortsFunctions/sortEventsByTime.js";
import filterLogsByActivity from "../../../Tools/FiltersFunctions/filterLogsByActivity.js";
import getDomainsContent from "../../../Tools/GetsFunctions/getDomainsContent.js";
import filterQuizGradesByActivity from "../../../Tools/FiltersFunctions/filterQuizGradesByActivity.js";
import getDotsContent from "../../../Tools/GetsFunctions/getDotsContent.js";
import getUserGradeLine from "../../../Tools/GetsFunctions/getUserGradeLine.js";

function filterData(DATASTORE, student, activity) {

    let dataToBePlotted = {
        domainContent: null,
        dotsContent: null, 
        grade: null
    };

    DATASTORE.logs = sortEventsByTime(filterLogsByActivity(DATASTORE.logs, DATASTORE.quizList[activity]));
    DATASTORE.quizGrades = filterQuizGradesByActivity(DATASTORE.quizGrades, DATASTORE.quizList[activity].id);

    dataToBePlotted.domainContent = getDomainsContent(DATASTORE.quizList[activity]);
    dataToBePlotted.dotsContent = getDotsContent(DATASTORE, student);
    dataToBePlotted.grade = getUserGradeLine(student, DATASTORE.quizGrades)

    return dataToBePlotted;

}

export default filterData;