import './Schedule.css';

// const formatPrice = new Intl.NumberFormat([], { style: 'currency', currency: 'USD' }).format;

const Schedule = ({selected}) => (
  <div className="schedule">
    <h2>Schedule</h2>
    <br />
    <div>
        {
            selected.length === 0
            ? <div>
                <h5>No courses selected! </h5>
                <p>Select courses by clicking on their icons in the course list.</p>
            </div>
            : selected.map(course => (
                <div key={course}>
                {course.term} CS {course.number}: {course.title}
                <p>{course.meets}</p>
                </div>
            ))
        }
    </div>
  </div>
);

export default Schedule;