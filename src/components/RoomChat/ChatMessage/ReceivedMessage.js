import React from 'react';

import UserProfileImage from '/src/components/UserProfileImage';

const ReceivedMessage = ({ message }) => {

   return <div className="chat-message">
      <div className="flex items-end">
         <UserProfileImage user={message.sender} classes={['order-2']} />
         <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
            <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600 break-all">{message.message}</span>
         </div>
      </div>
      <div className="ml-4">
         <span className="px-4 text-gray-500 text-xs">
            {message.sender.name}
         </span>
      </div>
   </div>;

};

export default ReceivedMessage;