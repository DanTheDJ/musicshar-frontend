import {
    LOGOUT
} from './types';

import Api from '/src/Api';

export const logout = () => (dispatch) => {

    return Api.logout().then(() => {
        dispatch({
            type: LOGOUT
        });
        return Promise.resolve();
    });

};