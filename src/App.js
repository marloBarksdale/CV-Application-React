import './App.css';
import Form from './components/Form';
import { useState } from 'react';
import getID from './getID';
import Profile from './components/Profile';

function App() {
  const [editMode, toggle] = useState(true);
  const [Person, editPerson] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    expList: [],
    eduList: [],
  });

  const addContact = ({ email, phone }) => {
    editPerson({ ...Person, email: email, phone: phone });
  };
  const addPersonal = ({ firstName, lastName }) => {
    editPerson({
      ...Person,
      firstName: firstName,
      lastName: lastName,
    });
  };

  const addExperience = (newExp) => {
    if (newExp.id) {
      const index = Person.expList.findIndex((exp) => exp.id === newExp.id);

      Person.expList[index] = newExp;

      editPerson({ ...Person, expList: Person.expList });
    } else {
      console.log('new id created');
      newExp.id = getID();
      const list = [...Person.expList, newExp];
      editPerson({ ...Person, expList: list });
    }
  };

  function addEducation(newEdu) {
    if (newEdu.id) {
      const index = Person.eduList.findIndex((edu) => edu.id === newEdu.id);

      Person.eduList[index] = newEdu;

      editPerson({ ...Person, eduList: Person.eduList });
    } else {
      console.log('new id created');
      newEdu.id = getID();
      const list = [...Person.eduList, newEdu];
      editPerson({ ...Person, eduList: list });
    }
  }

  const deleteExp = (id) => {
    console.log('called');
    const updatedExp = Person.expList.filter((exp) => exp.id !== id);

    editPerson({ ...Person, expList: updatedExp });
  };

  const deleteEdu = (id) => {
    const updatedEdu = Person.eduList.filter((edu) => edu.id !== id);
    console.log('caled');

    editPerson({ ...Person, eduList: updatedEdu });
  };

  const toggleEdit = () => {
    toggle(!editMode);
  };

  return (
    <>
      {editMode ? <h1>Enter your Information Here</h1> : ''}
      {editMode ? (
        <Form
          addPersonal={addPersonal}
          addContact={addContact}
          addExperience={addExperience}
          expList={Person.expList}
          deleteExp={deleteExp}
          addEducation={addEducation}
          eduList={Person.eduList}
          deleteEdu={deleteEdu}
          toggleEdit={toggleEdit}
          Person={Person}
        />
      ) : (
        <Profile
          eduList={Person.eduList}
          expList={Person.expList}
          editMode={editMode}
          Person={Person}
          toggleEdit={toggleEdit}
        />
      )}
    </>
  );
}

export default App;
