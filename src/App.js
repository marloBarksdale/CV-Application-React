import './App.css';
import Form from './components/Form';
import { useState } from 'react';
import getID from './getID';
import Profile from './components/Profile';

function App() {
  const [editMode, toggle] = useState(true);
  const [Person, editPerson] = useState({
    firstName: 'Lynden',
    lastName: 'Flood',
    email: 'somebody@gmail.com',
    phone: '123-456-7890',
    expList: [
      {
        id: getID(),
        company: 'Shopify',
        title: 'Software Engineer',
        from: '2018-03-22',
        to: '2011-09-04',
      },
      {
        id: getID(),
        company: 'Google',
        title: 'Web Architect',
        from: '2009-08-06',
        to: '2012-01-31',
      },
    ],
    eduList: [
      {
        id: getID(),
        college: 'MIT',
        degree: 'BSc Computer Science',
        from: '2010-05-20',
        to: '2014-06-21',
      },
      {
        id: getID(),
        college: 'Coppin',
        degree: 'MSc Data Science',
        from: '2014-08-05',
        to: '2016-08-12',
      },
    ],
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
        />
      ) : (
        <Profile
          eduList={Person.eduList}
          expList={Person.expList}
          editMode={editMode}
          Person={Person}
        />
      )}
    </>
  );
}

export default App;
