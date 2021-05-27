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

        return axios.post(url, {}, {withCredentials: true});

    }

    getProfile()
    {

        var url = BASE_URL+'/auth/me';

        return axios.get(url, {withCredentials: true});

    }

    getOpenRooms()
    {
        
        var url = BASE_URL+'/rooms?state=open';

        return axios.get(url, {withCredentials: true}); 

    }

    createRoom(roomData)
    {

        var url = BASE_URL+'/rooms';

        return axios.post(url, roomData, {withCredentials: true});

    }

    getRoomDetails(id)
    {

        var url = BASE_URL+'/rooms/'+id;

        return axios.get(url, {withCredentials: true});

    }

}

export default new Api();
