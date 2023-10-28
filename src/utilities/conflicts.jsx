import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// conflict occurs if: same term, at least one day is the same, and times overlap
// skip classes with empty 'times'
// on each rerender (change in selected state) --> check for conflicts between newly added course and every course in "available"

// available = courses NOT in selected AND NOT unavailable (grayed out)
// unavailable = courses NOT in selected and in conflict with one of selected
// for newCourse, append conflicting courses to unavailable
// add newly selected course to selected
// remove from unavailable when course is unselected

//need functions:
//dayOverlap (day1, day2)
//timeOverlap (start1, end1, start2, end2) or (times1, times2)
//convertTimes (times)
//sameTerm (course1, course2)
//timeConflict (course1, course2) --> 

//given two courses, determine if they are in conflict

const convertTimes = (meets) => {
    const times = meets.split(" ");
    const [start, end] = times[1].split("-").map(part => part.split(":")) ;
    // console.log("HERE:", start, "~~", end)
    return [times[0], start[0]*60+start[1], end[0]*60+end[1]]; //returns tuple [days, start time in mins, end time in mins]
}

//return drue if course2 meets on any of the same days as day1
const dayOverlap = (days1, days2) => {
    for (const char of days1) {
        if (days2.includes(char)) return true;
    }
    // return days1.map(char => {days2.includes(char)}).includes(true);
}

const timeOverlap = (start1, end1, start2, end2) => {
    return start1 <= end2 && end1 >= start2;
}

const sameTerm = (course1, course2) => {
    return course1.term == course2.term;
}

export const scheduleConflict = (course1, selected) => {
    // console.log(course1, course2);
    for (const course2 of selected) {
        if (course2 == course1) {
            continue;
        }
        const [days1, start1, end1] = convertTimes(course1.meets);
        const [days2, start2, end2] = convertTimes(course2.meets);
        // console.log(days1, start1, end1)
        // console.log(days2, "--", start2, "--", end2)
        if (sameTerm(course1, course2) && dayOverlap(days1, days2) && timeOverlap(start1, end1, start2, end2)) {
            return true;
        }
    }
    return false;
    // const [days1, start1, end1] = convertTimes(course1.meets);
    // const [days2, start2, end2] = convertTimes(course2.meets);
    // return (sameTerm(course1, course2) && dayOverlap(days1, days2) && timeOverlap(start1, end1, start2, end2));
}

