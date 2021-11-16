import React from 'react';
import Experience from './Experience';
import Education from './Education';

const Profile = ({ expList, eduList, editMode, Person, toggleEdit }) => {
  console.log(expList);
  console.log(eduList);

  return (
    <div className='formContainer'>
      <form>
        <fieldset>
          <legend>Personal</legend>
          <div className='listing-container'>
            <h2>
              Name: {Person.firstName} {Person.lastName}
            </h2>
            <h3>Email: {Person.email}</h3>
            <h3>Phone: {Person.phone}</h3>
          </div>
        </fieldset>

        <fieldset>
          <legend>Experience</legend>
          <div className='listing-container'>
            {expList.length > 0 ? (
              <Experience expList={expList} />
            ) : (
              'No experience added'
            )}
          </div>
        </fieldset>

        <fieldset>
          <legend>Education</legend>
          <div className='listing-container'>
            {eduList.length > 0 ? (
              <Education eduList={eduList} editMode={editMode} />
            ) : (
              'No education added'
            )}
          </div>
        </fieldset>
        <button onClick={toggleEdit} id='edit-button' className='btn'>
          Edit
        </button>
      </form>
    </div>
  );
};

export default Profile;
