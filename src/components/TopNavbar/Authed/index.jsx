import React, { useContext } from 'react';

import { Link, Redirect } from 'react-router-dom';

const Authed = ({user, logout }) => {

    return (
        <div className="w-full container mx-auto">
            <div className="w-full flex items-center justify-between">
                <Link to="/"className="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
                    Music<span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">Shar</span>
                </Link>
                <div className="flex w-1/2 justify-end content-center">
                    <div className="pr-2">
                        <Link to="/profile">
                            <p>{user.name}</p>
                        </Link>
                    </div>
                    <div>
                        <button onClick={logout}>
                        Logout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Authed;