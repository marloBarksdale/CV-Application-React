import { FaTimes, FaEdit } from 'react-icons/fa';

const Experience = ({ expList, deleteExp, editExp }) => {
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
            <FaTimes
              style={{ color: 'red' }}
              onClick={() => deleteExp(exp.id)}
            />
            <FaEdit style={{ color: 'blue' }} onClick={() => editExp(exp.id)} />{' '}
          </h2>
        </div>
      ))}
    </>
  );
};
export default Experience;
