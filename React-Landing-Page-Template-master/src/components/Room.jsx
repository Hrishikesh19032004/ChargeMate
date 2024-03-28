import React, { useEffect, useRef } from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
// import ChatButton from '../../components/ChatButton';

function randomID(len) {
  let result = '';
  if (result) return result;
  var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
    maxPos = chars.length,
    i;
  len = len || 5;
  for (i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return result;
}

function getUrlParams(url = window.location.href) {
  let urlStr = url.split('?')[1];
  return new URLSearchParams(urlStr);
}

const Room = () => {
  const roomID = getUrlParams().get('roomID') || randomID(5);
  let role_str = getUrlParams(window.location.href).get('role') || 'Host';
  const role =
    role_str === 'Host'
      ? ZegoUIKitPrebuilt.Host
      : role_str === 'Cohost'
      ? ZegoUIKitPrebuilt.Cohost
      : ZegoUIKitPrebuilt.Audience;

  let sharedLinks = [];
  if (role === ZegoUIKitPrebuilt.Host || role === ZegoUIKitPrebuilt.Cohost) {
    sharedLinks.push({
      name: 'Join as co-host',
      url: window.location.protocol + '//' +
        window.location.hostname + ':3000' + window.location.pathname +
        '?roomID=' +
        roomID +
        '&role=Cohost',
    });
  }
  sharedLinks.push({
    name: 'Join as audience',
    url: window.location.protocol + '//' +
      window.location.hostname + ':3000' + window.location.pathname +
      '?roomID=' +
      roomID +
      '&role=Audience',
  });

  // Generate Kit Token
  const appID = 654353683;  // Replace with your actual app ID
  const serverSecret = "c04a259c5208da711c3379b643ac6f73";  // Replace with your actual server secret
  const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, randomID(5), randomID(5));

  // Use useRef to hold the DOM element
  const myMeetingRef = useRef();

  // Start the call
  useEffect(() => {
    const myMeeting = async () => {
      try {
        // Create instance object from Kit Token.
        const zp = ZegoUIKitPrebuilt.create && ZegoUIKitPrebuilt.create(kitToken);

        if (!zp || !zp.joinRoom) {
          throw new Error('joinRoom method is not available on ZegoUIKitPrebuilt object.');
        }

        // Start the call
        zp.joinRoom({
          container: myMeetingRef.current,
          scenario: {
            mode: ZegoUIKitPrebuilt.OneONoneCall,
            config: {
              role,
            },
          },
          sharedLinks,
        });
      } catch (error) {
        console.error('Error initializing meeting:', error.message);
      }
    };

    myMeeting();
  }, [kitToken, role, sharedLinks]);

  return (
    <>
    {/* <ChatButton/> */}
    <div
      className="myCallContainer"
      ref={myMeetingRef}
      style={{ width: '100vw', height: '100vh' }}
    ></div>
    </>
  );
};

export default Room;
