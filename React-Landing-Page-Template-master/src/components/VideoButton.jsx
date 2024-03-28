import React from 'react';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import "./VideoButton.css";
import chatIcon from '../images/chat.png';

const VideoButton = () => {
  const handleChatNowClick = () => {
    // Open the specified URL in a new tab
    window.open('http://localhost:3000/video');
  };

  const renderTooltip = (props) => (
    <Tooltip id="tooltip" {...props}>
      Need Assistance
    </Tooltip>
  );

  return (
    <div className="fixed-chat-icon">
      <OverlayTrigger
        placement="top"
        color="success"
        overlay={renderTooltip}
        delay={{ show: 250, hide: 400 }}
      >
        <Button
          variant="outline-success"
          onClick={handleChatNowClick}
          className="chat-icon-btn p-0"
        >
          <img src={chatIcon} alt="Chat Icon" style={{ height: "26px", fill: "currentColor" }} />
        </Button>
      </OverlayTrigger>
    </div>
  );
};

export default VideoButton;
