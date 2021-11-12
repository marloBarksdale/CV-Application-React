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
  editExp,
  toggleEdit,
}) => {
  const onSubmit = (e) => {
    e.preventDefault();
    toggleEdit();
  };

  return (
    <div className='formContainer'>
      <form action='' onSubmit={onSubmit}>
        <Personal />
        <Contact />

        <AddExperience
          addExperience={addExperience}
          expList={expList}
          deleteExp={deleteExp}
          editExp={editExp}
        />
        <AddEducation
          addEducation={addEducation}
          eduList={eduList}
          deleteEdu={deleteEdu}
        />

        <input type='submit' value='Submit' id='submit-button' />
      </form>
    </div>
  );
};

export default Form;
