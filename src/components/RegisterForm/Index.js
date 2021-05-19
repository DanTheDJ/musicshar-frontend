import React from 'react';

import { Redirect } from 'react-router-dom';

import Api from '/src/Api';

export default class LoginForm extends React.Component
{

    constructor(props)
    {

        super(props);

        this.state = {
            registrationData: {
                email: '',
                name: '',
                username: '',
                password: ''
            }
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);

    }

    handleInputChange(event)
    {

        if(event.target.name)
        {

            var registrationData = this.state.registrationData;

            registrationData[event.target.name] = event.target.value;

            this.setState({
                registrationData: registrationData
            });

        }        

    }

    handleFormSubmit(event)
    {

        event.preventDefault();

        var self = this;

        Api.registerUserAccount(this.state.registrationData).then((account) => {

            self.setState({
                redirect: <Redirect to="/auth/login" />
            });

        })
        .catch((err) => {

            console.error(err);

            alert(err);

        });

    }

    render()
    {

        if(!!this.state.redirect)
        {

            return this.state.redirect;

        }

        return (
            <React.Fragment>
                <form className="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4" onSubmit={this.handleFormSubmit}>

                    <div className="mb-4">
                        <label className="block text-blue-300 py-2 font-bold mb-2" for="emailAddress">
                            Email Address
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring"
                            id="email"
                            name="email"
                            type="email"
                            placeholder="you@example.com"
                            value={this.state.registrationData.emailAddress}
                            onChange={this.handleInputChange}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-blue-300 py-2 font-bold mb-2" for="emailAddress">
                            Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring"
                            id="name"
                            name="name"
                            type="text"
                            placeholder="you@example.com"
                            value={this.state.registrationData.name}
                            onChange={this.handleInputChange}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-blue-300 py-2 font-bold mb-2" for="emailAddress">
                            Username
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring"
                            id="username"
                            name="username"
                            type="text"
                            placeholder="danc"
                            value={this.state.registrationData.username}
                            onChange={this.handleInputChange}
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
                            value={this.state.registrationData.password}
                            onChange={this.handleInputChange}
                        />
                    </div>

                    <div className="flex items-center justify-between pt-4">
                        <button
                        className="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                        type="submit">
                            Create Account
                        </button>
                    </div>

                    </form>
            </React.Fragment>
        );

    }

}