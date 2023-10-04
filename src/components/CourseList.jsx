import './CourseList.css';
//import 'bootstrap/dist/css/bootstrap.min.css';

const CourseList = ({courses}) => (
    // <div className="card" style="width: 18rem;">
    //     <div className="card-body">
    //         <h5 className="card-title">{props.courses.F101.term} CS {props.courses.F101.number}</h5>
    //         <p className="card-text">{props.courses.F101.title}</p>
    //         {/* <hr /> */}
    //         {/* <p class="card-text">{props.courses.F101.meets}</p> */}
    //     </div>
    // </div>
    // <div>
    //     <p>{props.courses.F101.term} CS {props.courses.F101.number}: {props.courses.F101.title}<br />
    //     {props.courses.F110.term} CS {props.courses.F110.number}: {props.courses.F110.title}<br />
    //     {props.courses.S313.term} CS {props.courses.S313.number}: {props.courses.S313.title}<br />
    //     {props.courses.S314.term} CS {props.courses.S314.number}: {props.courses.S314.title}</p>
    // </div>

    <div className="container">
         {Object.entries(courses).map(([id, course]) => (
             <div className="item" key={id}>
                <h5>{course.term} CS {course.number}</h5>
                <p>{course.title}</p>
                <hr className="absolute-hr" />
                <p className="times">{course.meets}</p>
             </div>
         ))}
        {/* <div className="one">
            <h5>{props.courses.F101.term} CS {props.courses.F101.number}</h5>
            <p>{props.courses.F101.title}</p>
            <hr className="absolute-hr" />
            <p className="times">{props.courses.F101.meets}</p>
        </div>
        <div className="two">
            <h5>{props.courses.F110.term} CS {props.courses.F110.number}</h5>
            <p>{props.courses.F110.title}</p>
            <hr className="absolute-hr" />
            <p className="times">{props.courses.F110.meets}</p>
        </div>
        <div className="three">
            <h5>{props.courses.S313.term} CS {props.courses.S313.number}</h5>
            <p>{props.courses.S313.title}</p>
            <hr className="absolute-hr" />
            <p className="times">{props.courses.S313.meets}</p>
        </div>
        <div className="four">
            <h5>{props.courses.S314.term} CS {props.courses.S314.number}</h5>
            <p>{props.courses.S314.title}</p>
            <hr className="absolute-hr" />
            <p className="times">{props.courses.S314.meets}</p>
        </div> */}
    </div>
);

export default CourseList;