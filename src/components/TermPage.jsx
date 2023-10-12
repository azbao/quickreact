import TermSelector, {terms} from './TermSelector.jsx';
import CoursePage from './CoursePage.jsx';
import { useState } from 'react';

const TermPage = ({courses}) => {
    const [selection, setSelection] = useState(() => Object.keys(terms)[0]);
    return (
        <div>
            <TermSelector selection={selection} setSelection={setSelection} />
            <CoursePage selection={selection} courses={courses}/>
        </div>
    );
}
  
export default TermPage;