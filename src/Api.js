const axios = require('axios');

const BASE_URL = 'http://localhost:3000';

class Api
{

    registerUserAccount(data)
    {

        var url = BASE_URL+'/auth/register';

        return axios.post(url, data, {withCredentials: true});

    }

    authenticateUser(data)
    {

        var url = BASE_URL+'/auth/authenticate';

        return axios.post(url, data, {withCredentials: true});

    }

    logout()
    {

        var url = BASE_URL+'/auth/logout';

        return axios.post(url, data, {withCredentials: true});

    }

    getProfile()
    {

        var url = BASE_URL+'/auth/me';

        return axios.get(url, {withCredentials: true});

    }

}

export default new Api();
