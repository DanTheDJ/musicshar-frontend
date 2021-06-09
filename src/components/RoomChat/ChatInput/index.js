import React, { useState } from 'react';

import { connect } from 'react-redux';
import { sendChatMessage } from '../../../redux/actions/chat';

const ChatInput = ({ room, sendChatMessage }) => {

    const [chatMessage, setChatMessage] = useState('');

    function sendMessage()
    {

        sendChatMessage(room.roomData.id, chatMessage);

        setChatMessage('');

    }

    return <div>
        <form onSubmit={(event) => {
            event.preventDefault();
            sendMessage();
        }}>
            <input onChange={(event) => { setChatMessage(event.target.value); }} value={chatMessage} type="text" className="text-black border-2 border-gray-300 bg-white h-10 px-5 rounded-lg text-sm focus:outline-none w-5/6" />

            <button type="submit" className="text-black bg-purple-500 rounded-md text-white px-2 py-2 float-right">Send</button>
        </form>
    </div>;

};


const mapStateToProps = state => ({
    user: state.auth.user,
    room: state.room
});
  
const mapDispatchToProps = (dispatch) => {
    return {
        sendChatMessage: (roomId, message) => dispatch(sendChatMessage(roomId, message))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatInput);