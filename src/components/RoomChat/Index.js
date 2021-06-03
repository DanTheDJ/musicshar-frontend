import React, { useEffect } from 'react';

import '/src/components/RoomChat/chat.css';

import MessagesList from './MessagesList';

const RoomChat = ({ room }) => {

return (

   <div className="flex-1 justify-between flex flex-col h-screen bg-white rounded">
      <div className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
         <MessagesList ref={(el) => { this.messagesEnd = el; }}></MessagesList>
      </div>
   </div>);

};

export default RoomChat;