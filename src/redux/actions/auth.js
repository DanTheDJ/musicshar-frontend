import {
    LOGIN_SUCCESS,
    LOGOUT,
    PROFILE_LOADED
} from './types';

import Api from '/src/Api';

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

        return Promise.resolve();

    })
    .catch(() => {

        dispatch({

            type: PROFILE_LOADED

        });

    });

};

export const logout = () => (dispatch) => {

    return Api.logout().then(() => {
        dispatch({
            type: LOGOUT
        });
        return Promise.resolve();
    });

};