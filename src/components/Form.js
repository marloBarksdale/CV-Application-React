import React from 'react';

const Form = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='formContainer'>
      <form action='' onSubmit={onSubmit}>
        <div className='form-control'>
          <label htmlFor='firstName'>First Name</label>
          <input type='text' name='' id='firstName' placeholder='First Name' />
          <i className='fas fa-check-circle'></i>
          <i className='fas fa-exclamation-circle'></i>
          <small>Error Message</small>
        </div>

        <div className='form-control'>
          <label htmlFor='lastName'>Last Name</label>
          <input
            type='text'
            name=''
            id='lastName'
            placeholder='Last Name'
          />{' '}
          <i className='fas fa-check-circle'></i>
          <i className='fas fa-exclamation-circle'></i>
          <small>Error Message</small>
        </div>
        <div className='form-control'>
          <label htmlFor='birthdate'> Date of Birth</label>
          <input
            type='date'
            name='birthdate'
            id='birthdate'
            min='1900-01-01'
            max='2003-12-31'
            required
          />
          <i className='fas fa-check-circle'></i>
          <i className='fas fa-exclamation-circle'></i>
          <small>Error Message</small>
        </div>

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
              <i className='fas fa-check-circle'></i>
              <i className='fas fa-exclamation-circle'></i>
              <small>Error Message</small>
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
              <i className='fas fa-check-circle'></i>
              <i className='fas fa-exclamation-circle'></i>
              <small>Error Message</small>
            </div>
          </fieldset>
        </div>

        <div>
          <fieldset>
            <legend>Address</legend>
            <div className='form-control'>
              <label htmlFor='address1'> Address Line 1</label>
              <input
                id='address1'
                type='text'
                placeholder='Address Line 1'
                required
              />
              <i className='fas fa-check-circle'></i>
              <i className='fas fa-exclamation-circle'></i>
              <small>Error Message</small>
            </div>
            <div className='form-control'>
              <label htmlFor='address2'> Address Line 2</label>
              <input id='address2' type='text' placeholder='Address Line 2' />
              <i className='fas fa-check-circle'></i>
              <i className='fas fa-exclamation-circle'></i>
              <small>Error Message</small>
            </div>

            <div className='form-control'>
              <label htmlFor='city'> City</label>
              <input id='city' type='text' placeholder='City' required />
              <i className='fas fa-check-circle'></i>
              <i className='fas fa-exclamation-circle'></i>
              <small>Error Message</small>
            </div>
            <div className='form-control'>
              <label htmlFor='code'> Postal Code</label>
              <input
                id='code'
                type='text'
                placeholder='Postal Code'
                pattern='[A-Za-z][0-9][A-Za-z] [0-9][A-Za-z][0-9]'
                maxLength='7'
                minLength='7'
                required
              />
              <i className='fas fa-check-circle'></i>
              <i className='fas fa-exclamation-circle'></i>
              <small>Error Message</small>
            </div>

            <div className='form-control'>
              <label htmlFor='country'>Country</label>

              <input type='text' placeholder='Country' required />
              <i className='fas fa-check-circle'></i>
              <i className='fas fa-exclamation-circle'></i>
              <small>Error Message</small>
            </div>
          </fieldset>
        </div>

        <div className='form-control'>
          <label htmlFor='Username'>Username</label>

          <input
            type='text'
            id='username'
            placeholder='Username'
            minLength='8'
            required
          />
          <i className='fas fa-check-circle'></i>
          <i className='fas fa-exclamation-circle'></i>
          <small>Error Message</small>
        </div>
        <div className='form-control'>
          <label htmlFor='password'> Password</label>

          <input
            type='password'
            name='password'
            id='password'
            autoComplete='new-password'
            pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
            required
          />
          <i className='fas fa-check-circle'></i>
          <i className='fas fa-exclamation-circle'></i>
          <small>Error Message</small>
        </div>

        <div className='form-control'>
          <label htmlFor='confirmPassword'> Confirm Password</label>

          <input
            type='password'
            name='password'
            id='confirmPassword'
            autoComplete='new-password'
            required
          />
          <i className='fas fa-check-circle'></i>
          <i className='fas fa-exclamation-circle'></i>
          <small>Error Message</small>
        </div>

        <input type='submit' value='Submit' id='submit-button' />
      </form>
    </div>
  );
};

export default Form;
