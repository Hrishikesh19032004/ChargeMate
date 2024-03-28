import React, { useEffect } from 'react';

const Sos = () => {
  useEffect(() => {
    const sendSOS = async () => {
      try {
        const response = await fetch('http://localhost:8000/sendSOS');
        
        if (!response.ok) {
          throw new Error('Failed to send SOS');
        }

        // Handle success response if needed
        console.log('SOS sent successfully');
        alert('SOS sent successfully');
      } catch (error) {
        // Handle error
        console.error('Error sending SOS:', error.message);
      }
    };

    // Call the function to send SOS when component mounts
    sendSOS();
  }, []);

  return null; // Since this component doesn't render anything visible, return null
};

export default Sos;
