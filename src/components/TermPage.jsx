import TermSelector, {terms} from './TermSelector.jsx';
import CourseList from './CourseList.jsx';
import { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

const TermPage = ({courses}) => {
    const [selection, setSelection] = useState(() => Object.keys(terms)[0]);
    return (
        <div>
            <TermSelector selection={selection} setSelection={setSelection} />
            <CourseList selection={selection} courses={courses}/>
        </div>
    );
}
  
export default TermPage;