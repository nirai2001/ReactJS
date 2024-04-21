import React from 'react';

const PopUp = ({ showPopUp, message }) => {
  return (
    <div className={`popup ${showPopUp ? 'active' : ''}`}>
      <p>{message}</p>
    </div>
  );
};

export default PopUp;