import './CourseList.css';
import React from 'react';
import { scheduleConflict } from '../utilities/conflicts';

const CourseList = ({selection, courses, selected, toggleSelected}) => (
    <div className="thing">
        {Object.entries(courses).filter(([id, course]) =>
        course.term == selection).map(([id, course]) => (
            <div className={`item ${selected.includes(course) ? 'selected' : ''} ${scheduleConflict(course, selected) ? 'unavailable' : ''}`}
            key={course} onClick={() => toggleSelected(course)}>
                <h5>{course.term} CS {course.number}</h5>
                <p>{course.title}</p>
                <hr className="absolute-hr" />
                <p className="times">{course.meets}</p>
            </div>
        ))}
    </div>
);
//${available(course) ? '' : 'unavailable'}
// {
//     console.log(available(course))
//     if (selected.includes(course) || available(course)) {

export default CourseList;