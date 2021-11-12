import React from 'react';
import Error from './Error';

const Contact = () => {
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
            required
          />
          <Error />
        </div>
        <div className='form-control'>
          <label htmlFor='Phone'>Phone</label>
          <input
            type='tel'
            name='phone'
            id='phone'
            placeholder='Phone'
            pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
            maxLength='10'
            minLength='10'
            required
          />
          <Error />
        </div>
      </fieldset>
    </div>
  );
};

export default Contact;
