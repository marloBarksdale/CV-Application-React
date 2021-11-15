import React from 'react';
import { useState } from 'react';
import Error from './Error';
import Education from './Education';

const AddEducation = ({ addEducation, eduList, deleteEdu }) => {
  const [college, setCollege] = useState('');
  const [degree, setDegree] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [id, setID] = useState(0);

  const onAdd = () => {
    if (college === '' || college.length === 0) {
      alert('Must enter a title!!');
      return;
    } else if (degree === '' || degree.length === 0) {
      alert('Must enter a company name!!!');
      return;
    } else if (to === '' || to.length === 0) {
      alert('Must eneter a date!!!');
      return;
    } else if (from === '' || from.length === 0) {
      alert('Must enter a date!!!');
      return;
    }
    addEducation({ college, degree, to, from, id });
    setCollege('');
    setDegree('');
    setFrom('');
    setTo('');
    setID(0);
  };

  const editEdu = (id) => {
    const toEdit = eduList.filter((edu) => edu.id === id);
    console.log(toEdit[0].college);

    setCollege(toEdit[0].college);
    setDegree(toEdit[0].degree);
    setFrom(toEdit[0].from);
    setTo(toEdit[0].to);
    setID(toEdit[0].id);
  };
  return (
    <div>
      <fieldset>
        <legend>Education</legend>
        <div className='listing-container'>
          {eduList.length > 0 ? (
            <Education
              eduList={eduList}
              deleteEdu={deleteEdu}
              editEdu={editEdu}
            />
          ) : (
            'No experience added'
          )}
        </div>

        <div className='form-control'>
          <label htmlFor='college'> College</label>
          <input
            value={college}
            onChange={(e) => {
              setCollege(e.target.value);
            }}
            id='college'
            type='text'
            placeholder='College'
          />
          <Error />
        </div>
        <div className='form-control'>
          <label htmlFor='degree'> Degree</label>
          <input
            value={degree}
            onChange={(e) => {
              setDegree(e.target.value);
            }}
            id='degree'
            type='text'
            placeholder='Degree'
          />
          <Error />
        </div>
        <div className='form-control'>
          <label htmlFor='collegeFrom'>From</label>
          <input
            value={from}
            onChange={(e) => {
              setFrom(e.target.value);
            }}
            id='collegeFrom'
            type='date'
            placeholder='From'
          />
          <Error />
        </div>

        <div className='form-control'>
          <label htmlFor='collegeTo'>To</label>
          <input
            value={to}
            onChange={(e) => {
              setTo(e.target.value);
            }}
            id='collegeTo'
            type='date'
            placeholder='To'
          />
          <Error />
        </div>
      </fieldset>
      <input
        type='button'
        value='Add Education'
        className='Addbutton'
        onClick={onAdd}
      />
    </div>
  );
};

export default AddEducation;
