import { FaTimes, FaEdit } from 'react-icons/fa';

const Experience = ({ eduList, deleteEdu, editEdu, editMode }) => {
  return (
    <>
      {eduList.map((edu, index) => (
        <div className='listing ' key={index * 2}>
          <div className='listing-content'>
            <h2>{edu.college} </h2>
            <h3> {edu.degree}</h3>
            <small>
              {' '}
              ({edu.from} - {edu.to})
            </small>
          </div>
          {editMode ? (
            <div className='listing-delete-edit'>
              <FaTimes
                style={{ color: 'red' }}
                onClick={() => deleteEdu(edu.id)}
              />
              <FaEdit
                style={{ color: 'blue' }}
                onClick={() => editEdu(edu.id)}
              />{' '}
            </div>
          ) : (
            ''
          )}
        </div>
      ))}
    </>
  );
};
export default Experience;
