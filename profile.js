import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const history = useNavigate();

  const handleButtonClick = () => {
    history('/home');
  };

  return (
    <div>
      your loads have been saved
      <button onClick={handleButtonClick}>Carry some more loads</button>
    </div>
  );
};

export default ProfilePage;
