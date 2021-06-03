import io from "socket.io-client";
import { CHAT_MESSAGE_RECEIVED, CLEAR_CHAT_HISTORY, VIEWER_COUNT_UPDATED, ROOM_LEFT, ROOM_JOINED } from "./redux/actions/types";
const socketEndpoint = "http://localhost:3000";

const socket = io(socketEndpoint, {
    withCredentials: true
});

const chatMessage = 'chat-message';
const viewerCount = 'viewer-count';

function joinRoom(id, dispatch)
{

    socket.emit('join-room', {
        id: id
    });

    dispatch({
        type: ROOM_JOINED
    });

}

function startListeners(dispatch)
{

    socket.on(chatMessage, data => {
        dispatch({
            type: CHAT_MESSAGE_RECEIVED,
            payload: {data: data}
        });
    });

    socket.on(viewerCount, data => {
        dispatch({
            type: VIEWER_COUNT_UPDATED,
            payload: {data: data}
        });
    });

}

function leaveRoom(id, dispatch)
{

    socket.emit('leave-room', {
        id: id
    });

    dispatch({
        type: CLEAR_CHAT_HISTORY
    });

    dispatch({
        type: ROOM_LEFT
    });

}

export default {
    socket,
    joinRoom,
    startListeners,
    leaveRoom
};