const axios = require('axios');

const BASE_URL = 'http://localhost:3000';

class Api
{

    registerUserAccount(data)
    {

        var url = BASE_URL+'/auth/register';

        return axios.post(url, data);

    }

}

export default new Api();
