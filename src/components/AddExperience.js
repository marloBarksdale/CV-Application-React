import React from 'react';
import { useState } from 'react';
import Error from './Error';
import Experience from './Experience';

const AddExperience = ({ addExperience, expList, deleteExp }) => {
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [id, setId] = useState(0);

  const onAdd = () => {
    if (title === '' || title.length === 0) {
      alert('Must enter a title!!');
      return;
    } else if (company === '' || company.length === 0) {
      alert('Must enter a company name!!!');
      return;
    } else if (to === '' || to.length === 0) {
      alert('Must eneter a date!!!');
      return;
    } else if (from === '' || from.length === 0) {
      alert('Must enter a date!!!');
      return;
    }

    addExperience({ title, company, to, from, id });

    setTitle('');
    setCompany('');
    setFrom('');
    setTo('');
    setId(0);
  };

  const editExp = (id) => {
    const [toEdit] = expList.filter((exp) => exp.id === id);
    console.log(toEdit);

    setTitle(toEdit.title);
    setCompany(toEdit.company);
    setFrom(toEdit.from);
    setTo(toEdit.to);
    setId(toEdit.id);
  };
  return (
    <div>
      <fieldset>
        <legend>Experience</legend>
        <div className='listing-container'>
          {expList.length > 0 ? (
            <Experience
              expList={expList}
              deleteExp={deleteExp}
              editExp={editExp}
              editMode={true}
            />
          ) : (
            'No experience added'
          )}
        </div>

        <div className='form-control'>
          <label htmlFor='title'> Title</label>
          <input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            id='title'
            type='text'
            placeholder='Title'
          />
          <Error />
        </div>
        <div className='form-control'>
          <label htmlFor='company'> Company</label>
          <input
            value={company}
            onChange={(e) => {
              setCompany(e.target.value);
            }}
            id='company'
            type='text'
            placeholder='Company'
          />
          <Error />
        </div>

        <div className='form-control'>
          <label htmlFor='from'>From</label>
          <input
            value={from}
            onChange={(e) => {
              setFrom(e.target.value);
            }}
            id='from'
            type='date'
            placeholder='From'
          />
          <Error />
        </div>

        <div className='form-control'>
          <label htmlFor='to'>To</label>
          <input
            value={to}
            onChange={(e) => {
              setTo(e.target.value);
            }}
            id='to'
            type='date'
            placeholder='To'
          />
          <Error />
        </div>
      </fieldset>
      <input
        type='button'
        className='Addbutton'
        value='Add Experience'
        onClick={onAdd}
      />
    </div>
  );
};

export default AddExperience;
