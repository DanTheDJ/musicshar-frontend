function axiosError(alert, err)
{

    if( err.response && !!err.response.data.message )
    {

        console.log(err.response.data);

        alert.error(err.response.data.message);

    }
    else
    {

        alert.error(err.toString());

    }

}

export {
    axiosError
};