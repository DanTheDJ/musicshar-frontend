import React, { Component } from 'react';

export default class LoginForm extends React.Component
{

    constructor(props)
    {

        super(props);

    }

    render()
    {

        return (
            <React.Fragment>
                <form className="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">

                <div className="mb-4">
                    <label className="block text-blue-300 py-2 font-bold mb-2" for="emailAddress">
                        Email Address
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring"
                        id="emailAddress"
                        name="emailAddress"
                        type="email"
                        placeholder="you@example.com"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-blue-300 py-2 font-bold mb-2" for="password">
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring"
                        id="password"
                        name="password"
                        type="password"
                    />
                </div>

                <div className="flex items-center justify-between pt-4">
                    <button
                    className="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                    type="button">
                        Sign In
                    </button>
                </div>

                </form>
            </React.Fragment>
        );

    }

}