import React from 'react';
import { Link } from 'react-router-dom';

import LoginForm from '/src/components/LoginForm';

const Login = () => {

    return (
        <div className="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center">

            <div className="flex flex-col w-full xl:w-1/5">&nbsp;</div>

            <div className="flex flex-col w-full xl:w-3/5 justify-center lg:items-start overflow-y-hidden">
                <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
                    Login
                    </span>
                </h1>
                <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left">
                    Enter your login details below.
                </p>

                <LoginForm></LoginForm>
                
            </div>

            <div className="flex flex-col w-full xl:w-1/5">&nbsp;</div>

            <div className="mx-auto md:pt-16">
            <p className="text-blue-400 font-bold pb-8 lg:pb-6 text-center">
                Don't have an account yet?
            </p>
            <div className="flex w-full justify-center md:justify-start pb-24 lg:pb-0 fade-in">
                <Link to="/auth/register">
                    <a class="">
                        Register
                    </a>
                </Link>
            </div>
        </div>
    </div>
    );

};

export default Login;