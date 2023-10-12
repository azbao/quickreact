import './CourseList.css';
import React from 'react';

const CourseList = ({selection, courses, selected, toggleSelected}) => (
    <div className="thing">
        {Object.entries(courses).filter(([id, course]) =>
        course.term == selection).map(([id, course]) => (
            <div className={`item ${selected.includes(course) ? 'selected' : ''}`} key={course} onClick={() => toggleSelected(course)}>
                <h5>{course.term} CS {course.number}</h5>
                <p>{course.title}</p>
                <hr className="absolute-hr" />
                <p className="times">{course.meets}</p>
            </div>
        ))}
    </div>
);

export default CourseList;