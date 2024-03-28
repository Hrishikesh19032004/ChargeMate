import React, { useEffect } from 'react';

const Ev = () => {
  useEffect(() => {
    window.location.href = 'http://localhost:3033';
  }, []);

  return null; // Since this component doesn't render anything visible, return null
};

export default Ev;
