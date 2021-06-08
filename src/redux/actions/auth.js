import {
    LOGIN_SUCCESS,
    LOGOUT,
    PROFILE_LOADED,
    CHAT_MESSAGE_RECEIVED
} from './types';

import Api from '/src/Api';

import socket from '/src/Socket';

export const loadProfile = () => (dispatch) => {

    return Api.getProfile().then((data) => {

        dispatch({
            type: LOGIN_SUCCESS,
            payload: {
                user: data.data
            }
        });

        dispatch({

            type: PROFILE_LOADED

        });

        // Start the web socket listeners
        socket.startListeners(dispatch);

    })
    .catch(() => {

        dispatch({

            type: PROFILE_LOADED

        });

    });

};

export const reconnectSocket = () => (dispatch)  =>{

    // Reconnect the socket so it picks up any changes in the session.
    socket.reconnect();

};

export const logout = () => (dispatch) => {

    socket.reconnect();

    return Api.logout().then(() => {
        dispatch({
            type: LOGOUT
        });
        return Promise.resolve();
    });

};