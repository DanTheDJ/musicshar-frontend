import React, { useEffect } from 'react';

import '/src/components/RoomChat/chat.css';

import MessagesList from './MessagesList';
import ChatInput from './ChatInput';
import ChatStartMessage from './ChatStartMessage';

const RoomChat = ({ room }) => {

return (

   <div className="flex-1 justify-between flex flex-col h-screen bg-white rounded">
      <div className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
         <ChatStartMessage />
         <MessagesList></MessagesList>
      </div>
      <div className="flex flex-col space-y-4 p-3">
         <ChatInput></ChatInput>
      </div>
   </div>);

};

export default RoomChat;