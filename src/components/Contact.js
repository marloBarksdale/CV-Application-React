import React, { useState, useEffect } from 'react';
import Error from './Error';

const Contact = ({ addContact }) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    addContact({ email, phone });
  }, [email, phone]);

  return (
    <div>
      <fieldset>
        <legend>Contact</legend>

        <div className='form-control'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='somebody@email.com'
            pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
            autoComplete='username'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
          <Error />
        </div>
        <div className='form-control'>
          <label htmlFor='phone'>Phone</label>
          <input
            type='tel'
            name='phone'
            id='phone'
            placeholder='Phone'
            pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
            maxLength='12'
            minLength='10'
            value={phone}
            onInput={(e) => {
              setPhone(e.target.value);
            }}
            required
          />
          <Error />
        </div>
      </fieldset>
    </div>
  );
};

export default Contact;
