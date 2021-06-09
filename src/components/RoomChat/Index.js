import React, { useEffect, useRef } from 'react';

import { connect } from'react-redux';

import '/src/components/RoomChat/chat.css';

import MessagesList from './MessagesList';
import ChatInput from './ChatInput';
import ChatStartMessage from './ChatStartMessage';
import classNames from 'classnames';

const RoomChat = ({ room, chat, isMobileView }) => {

   const messagesEndRef = useRef(null);

   const scrollToBottomOfMessages = () => {

      messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;

   };

   useEffect(() => {  

      setTimeout(scrollToBottomOfMessages, 150);

   }, [!!chat.messages ? chat.messages.length : chat.messages]);

   const containerClasses = ["flex-1", "justify-between", "flex", "flex-col", "bg-white", "rounded"];

   if(!!isMobileView)
   {

      containerClasses.push('h-96');

   }
   else
   {

      containerClasses.push('h-screen');

   }

   return (      

      <div className={classNames(containerClasses)}>
         <div className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch" ref={messagesEndRef}>
            <ChatStartMessage />
            <MessagesList></MessagesList>
         </div>
         <div className="flex flex-col px-1 py-3 space-y-4">
            <ChatInput></ChatInput>
         </div>
      </div>

   );

};

const mapStateToProps = state => ({
   chat: state.chat
});

export default connect(mapStateToProps)(RoomChat);