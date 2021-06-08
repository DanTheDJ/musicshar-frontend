import React, { useEffect, useRef } from 'react';

import { connect } from 'react-redux';

import ChatMessage from '../ChatMessage';

const MessagesList = ({ chat }) => {

    const messagesEndRef = useRef(null);

    const scrollToBottomOfMessages = () => {

        messagesEndRef.current.scrollIntoView();

    };

    useEffect(() => {

        scrollToBottomOfMessages();

    }, [!!chat.messages ? chat.messages.length : chat.messages]);

    return <React.Fragment>
        {
            chat.messages.map((message) => {

                return <ChatMessage key={message.id} message={message} />;

            })
        }
        <div ref={messagesEndRef} />
    </React.Fragment>;

};

const mapStateToProps = state => ({
    chat: state.chat
});

export default connect(mapStateToProps)(MessagesList);
