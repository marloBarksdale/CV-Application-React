import React, { useState } from 'react';
import Error from './Error';

const Personal = () => {
  const [firstName, setFirstName] = useState('');
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
