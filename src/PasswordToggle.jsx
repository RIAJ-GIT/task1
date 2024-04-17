
import React, { useState } from 'react';

const PasswordToggle = () => {
  const [passwordInputType, setPasswordInputType] = useState('password');

  const togglePasswordVisibility = () => {
    setPasswordInputType(passwordInputType === 'password' ? 'text' : 'password');
  };

  return (
    <div>
      <input
        type={passwordInputType}
        placeholder="Enter your password"
      />
      <button onClick={togglePasswordVisibility}>
        {passwordInputType === 'password' ? 'Show' : 'Hide'}
      </button>
    </div>
  );
};

export default PasswordToggle;
