import React from 'react';
import Personal from './Personal';
import Contact from './Contact';

import AddExperience from './AddExperience';
import AddEducation from './AddEducation';

const Form = ({
  addExperience,
  expList,
  deleteExp,
  addEducation,
  eduList,
  deleteEdu,
  addPersonal,
  addContact,
  toggleEdit,
  Person,
}) => {
  const onSubmit = (e) => {
    e.preventDefault();
    toggleEdit();
  };

  return (
    <div className='formContainer'>
      <form action='' onSubmit={onSubmit}>
        <Personal addPersonal={addPersonal} Person={Person} />
        <Contact addContact={addContact} Person={Person} />

        <AddExperience
          addExperience={addExperience}
          expList={expList}
          deleteExp={deleteExp}
        />
        <AddEducation
          addEducation={addEducation}
          eduList={eduList}
          deleteEdu={deleteEdu}
        />

        <input
          type='submit'
          value='Submit'
          id='submit-button'
          className='btn'
        />
      </form>
    </div>
  );
};

export default Form;
