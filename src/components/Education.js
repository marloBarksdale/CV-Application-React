import { FaTimes, FaEdit } from 'react-icons/fa';

const Experience = ({ eduList, deleteEdu, editEdu }) => {
  return (
    <>
      {eduList.map((edu, index) => (
        <div className='listing ' key={index * 2}>
          <h2>
            {edu.college} ,{' '}
            <small>
              {' '}
              {edu.degree} ({edu.from} - {edu.to})
            </small>
            <FaEdit style={{ color: 'blue' }} onClick={() => editEdu(edu.id)} />{' '}
            <FaTimes
              style={{ color: 'red' }}
              onClick={() => deleteEdu(edu.id)}
            />
          </h2>
        </div>
      ))}
    </>
  );
};
export default Experience;
