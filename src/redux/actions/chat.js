import socket from '/src/Socket';

export const sendChatMessage = (roomId, message) => (dispatch) => {

    return socket.sendChatMessage(roomId, message);

};