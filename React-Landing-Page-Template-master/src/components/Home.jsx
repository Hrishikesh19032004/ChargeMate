import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const [value, setValue] = useState(''); // Initialize with an empty string
  const navigate = useNavigate();

  const handleJoinRoom = useCallback(() => {
    navigate(`/room/${value}`);
  }, [navigate, value]);

  return (
    <div style={{ marginTop: "200px" }}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type='text'
        placeholder='Enter room code'
      />
      <button onClick={handleJoinRoom}>Join</button>
    </div>
  );
};

export default Homepage;
