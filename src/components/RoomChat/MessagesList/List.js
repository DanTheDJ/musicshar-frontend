import React from 'react';

import { connect } from 'react-redux';

import ChatMessage from '../ChatMessage';

const MessagesList = ({ chat }) => {

    console.log(chat.messages);

    return chat.messages.map((message) => {

        return <ChatMessage key={message.id} message={message} />;

    });

};

const mapStateToProps = state => ({
    chat: state.chat
  });
  
const mapDispatchToProps = (dispatch) => {
    return {
        //loadProfileInformation: () => dispatch(loadProfile())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessagesList);
