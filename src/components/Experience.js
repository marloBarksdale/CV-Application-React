import { FaTimes, FaEdit } from 'react-icons/fa';

const Experience = ({ expList, deleteExp, editExp, editMode }) => {
  return (
    <>
      {expList.map((exp, index) => (
        <div className='listing ' key={index}>
          <div className='listing-content'>
            {' '}
            <h2>{exp.title} </h2> <h3> {exp.company}</h3>{' '}
            <small>
              ({exp.from} - {exp.to})
            </small>
          </div>
          {editMode ? (
            <div className='listing-delete-edit'>
              <FaTimes
                style={{ color: 'red' }}
                onClick={() => deleteExp(exp.id)}
              />
              <FaEdit
                style={{ color: 'blue' }}
                onClick={() => editExp(exp.id)}
              />{' '}
            </div>
          ) : (
            ' '
          )}
        </div>
      ))}
    </>
  );
};
export default Experience;
