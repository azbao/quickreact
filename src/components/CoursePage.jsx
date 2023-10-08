import { useState } from 'react';
import CourseList from "./CourseList";
import TermSelector, {terms} from './TermSelector.jsx';


const CoursePage = ({selection, courses}) => {
  const [selected, setSelected] = useState([]);

  const toggleSelected = (item) => {
    setSelected(
        selected.includes(item)
        ? selected.filter(x => x !== item)
        : [...selected, item]
    );
  }
  
  console.log(selected);
  return (
    <CourseList selection = {selection} courses={courses} selected={selected} toggleSelected={toggleSelected} />
  );
};

export default CoursePage;