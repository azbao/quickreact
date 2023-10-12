import { useState } from 'react';
import CourseList from "./CourseList";
import Modal from './Modal';
import Schedule from './Schedule';

const CoursePage = ({selection, courses}) => {
  const [selected, setSelected] = useState([]);
  const [open, setOpen] = useState(false);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  const toggleSelected = (item) => {
    setSelected(
        selected.includes(item)
        ? selected.filter(x => x !== item)
        : [...selected, item]
    );
  }
  
  console.log(selected);
  return (
    <div>
        <nav className='d-flex'>
            <button className="btn btn-outline-dark" onClick={openModal}>Schedule<i className="bi bi-cart4"></i></button>
        </nav>
        <Modal open={open} close={closeModal}>
            <Schedule selected={selected} />
        </Modal>
        < br/>
        <CourseList selection = {selection} courses={courses} selected={selected} toggleSelected={toggleSelected} />
    </div>
  );
};

export default CoursePage;