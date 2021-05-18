import React, { Component } from 'react';

import { Link, withRouter } from 'react-router-dom';

class TopNavbar extends Component
{

    constructor(props)
    {

        super(props);

    }

    render()
    {

        const { history } = this.props;

        console.log(history.location);

        return (
        <div className="w-full container mx-auto">
            <div className="w-full flex items-center justify-between">
                <Link to="/">
                    <a className="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
                        Music<span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">Shar</span>
                    </a>
                </Link>
                <div className="flex w-1/2 justify-end content-center">
                    <Link to="/auth/register">
                    <a className="inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out" href="https://twitter.com/intent/tweet?url=#">
                    Register
                    </a>
                    </Link>
                    <Link to="/auth/login">
                    <a className="inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out" href="https://twitter.com/intent/tweet?url=#">
                    Login
                    </a>
                    </Link>
                    <a
                    className="inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"
                    href="https://www.facebook.com/sharer/sharer.php?u=#"
                    >
                    <svg className="fill-current h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                        <path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z"></path>
                    </svg>
                    </a>
                </div>
            </div>
        </div>
    );

    }
}

export default withRouter(TopNavbar);