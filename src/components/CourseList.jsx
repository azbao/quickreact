const CourseList = (props) => (
    <div>
        <p>{props.courses.F101.term} CS {props.courses.F101.number}: {props.courses.F101.title}<br />
        {props.courses.F110.term} CS {props.courses.F110.number}: {props.courses.F110.title}<br />
        {props.courses.S313.term} CS {props.courses.S313.number}: {props.courses.S313.title}<br />
        {props.courses.S314.term} CS {props.courses.S314.number}: {props.courses.S314.title}</p>
    </div>
);

export default CourseList;