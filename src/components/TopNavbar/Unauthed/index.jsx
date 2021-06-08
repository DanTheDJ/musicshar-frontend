import React from 'react';

import { Link, Redirect } from 'react-router-dom';

const Unauthed = (props) => {

    return (
        <div className="w-full container mx-auto">
            <div className="w-full flex items-center justify-between">
                <Link to="/"className="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
                    Music<span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">Shar</span>
                </Link>
                <div className="flex w-1/2 justify-end content-center">
                    <Link to="/auth/register" className="inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out">
                    Register
                    </Link>
                    <Link to="/auth/login" className="inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out" href="https://twitter.com/intent/tweet?url=#">
                    Login
                    </Link>
                </div>
            </div>
        </div>
    );

};

export default Unauthed;