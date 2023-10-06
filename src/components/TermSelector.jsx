const terms = {
    Fall: 'Fall classes',
    Winter: 'Winter classes',
    Spring: 'Spring classes'
};

const TermButton = ({term, selection, setSelection}) => (
    <div>
      <input type="radio" id={term} className="btn-check" checked={term === selection} autoComplete="off"
        onChange={() => setSelection(term)} />
      <label className="btn btn-success mb-1 p-2" htmlFor={term}>
        { term }
      </label>
    </div>
  );
  
const TermSelector = ({selection, setSelection}) => (
<div className="btn-group">
    { 
        Object.keys(terms).map(term => <TermButton key={term} term={term} selection={selection} setSelection={setSelection} />)
    }
</div>
);
  
// const TermSelection = ({selection}) => (
//     <div className="card" >
//         { terms[selection] }
//     </div>
// );

export {terms};
export default TermSelector;