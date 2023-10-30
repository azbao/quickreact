import { useState } from 'react';
import CourseList from "./CourseList";
import Modal from './Modal';
import Schedule from './Schedule';
import { scheduleConflict } from '../utilities/conflicts';

const CoursePage = ({selection, courses}) => {
  const [selected, setSelected] = useState([]);
  const [open, setOpen] = useState(false);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  const toggleSelected = (item) => {
    // selected.every(select)
    // console.log(item, selected)
    if (!scheduleConflict(item, selected)) {
        setSelected(
            selected.includes(item)
            ? selected.filter((x) => x !== item)
            : [...selected, item]
        );
    }else {
        console.log("hello", item, selected)
        null
    }}
  
  //console.log(selected);
  return (
    <div>
        <nav className='d-flex'>
            <button className="btn btn-outline-dark ms-auto" onClick={openModal}>Schedule <i className="bi bi-cart4"></i></button>
        </nav>
        <Modal open={open} close={closeModal}>
            <Schedule selected={selected} />
        </Modal>
        < br/>
        <CourseList selection={selection} courses={courses} selected={selected} toggleSelected={toggleSelected} />
    </div>
  );
};

export default CoursePage;