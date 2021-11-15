import { FaTimes, FaEdit } from 'react-icons/fa';

const Experience = ({ expList, deleteExp, editExp, editMode }) => {
  return (
    <>
      {expList.map((exp, index) => (
        <div className='listing ' key={index}>
          <h2>
            {exp.title} ,{' '}
            <small>
              {' '}
              {exp.company} ({exp.from} - {exp.to})
            </small>
          </h2>
          {editMode ? (
            <>
              <FaTimes
                style={{ color: 'red' }}
                onClick={() => deleteExp(exp.id)}
              />
              <FaEdit
                style={{ color: 'blue' }}
                onClick={() => editExp(exp.id)}
              />{' '}
            </>
          ) : (
            ' '
          )}
        </div>
      ))}
    </>
  );
};
export default Experience;
