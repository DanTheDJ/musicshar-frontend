import React, { useEffect, useRef } from 'react';

import { connect } from 'react-redux';

import ChatMessage from '../ChatMessage';

const MessagesList = ({ chat }) => {

    return <React.Fragment>
        {
            chat.messages.map((message) => {

                return <ChatMessage key={message.id} message={message} />;

            })
        }
    </React.Fragment>;

};

const mapStateToProps = state => ({
    chat: state.chat
});

export default connect(mapStateToProps)(MessagesList);
