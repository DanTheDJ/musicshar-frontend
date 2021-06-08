import React from 'react';

const ChatStartMessage = () => {

    return <div className="chat-message">
    <div className="flex items-end">
       <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
          <div>
             <span className="px-4 py-2 rounded-lg inline-block text-gray-500">Chat connected. Say hello!</span>
          </div>
       </div>
    </div>
 </div>;

};

export default ChatStartMessage;