import io from "socket.io-client";
import { CHAT_MESSAGE_RECEIVED, CLEAR_CHAT_HISTORY, VIEWER_COUNT_UPDATED, ROOM_LEFT, ROOM_JOINED, ROOM_CLOSED, ROOM_DATA_UPDATE } from "./redux/actions/types";

const socketEndpoint = process.env.SOCKET_API_BASE_URL;

const socket = io(socketEndpoint, {
    withCredentials: true
});

const chatMessage = 'chat-message';
const viewerCount = 'viewer-count';
const roomClosed = 'room-closed';
const roomDataUpdate = 'room-data-update';

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

    socket.removeAllListeners();

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

    socket.on(roomClosed, data => {
        dispatch({
            type: ROOM_CLOSED,
            payload: {}
        });
    });

    socket.on(roomDataUpdate, data => {
        dispatch({
            type: ROOM_DATA_UPDATE,
            payload: {
                data: data
            }
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

function sendChatMessage(roomId, message)
{

    socket.emit('chat-message-sent', {
        roomId: roomId,
        message: message
    });

}

function disconnect()
{

    socket.disconnect();

}

function open()
{

    socket.open();

}

function reconnect()
{

    disconnect();
    open();

}

export default {
    socket,
    joinRoom,
    startListeners,
    leaveRoom,
    sendChatMessage,
    disconnect,
    reconnect
};