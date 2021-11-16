import React, { useState, useEffect } from 'react';
import Error from './Error';

const Personal = ({ addPersonal, Person }) => {
  const [firstName, setFirstName] = useState(Person.firstName);
  const [lastName, setLastName] = useState(Person.lastName);

  useEffect(() => {
    addPersonal({ firstName, lastName });
  }, [firstName, lastName]);

  return (
    <>
      <div className='form-control'>
        <label htmlFor='firstName'>First Name</label>
        <input
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          type='text'
          name=''
          id='firstName'
          value={firstName}
          placeholder='First Name'
          required
        />
        <Error />
      </div>

      <div className='form-control'>
        <label htmlFor='lastName'>Last Name</label>
        <input
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          value={lastName}
          type='text'
          name=''
          id='lastName'
          placeholder='Last Name'
          required
        />{' '}
        <Error />
      </div>
    </>
  );
};

export default Personal;
