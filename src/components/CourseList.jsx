import './CourseList.css';
import TermSelector from './TermSelector.jsx';

const CourseList = ({selection, courses}) => (
    <div className="thing">
        {Object.entries(courses).filter(([id, course]) =>
        course.term == selection).map(([id, course]) => (
            <div className="item" key={id}>
                <h5>{course.term} CS {course.number}</h5>
                <p>{course.title}</p>
                <hr className="absolute-hr" />
                <p className="times">{course.meets}</p>
            </div>
        ))}
    </div>
);

export default CourseList;