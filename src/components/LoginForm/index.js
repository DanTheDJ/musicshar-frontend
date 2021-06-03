import React from 'react';
import { Redirect } from 'react-router-dom';

import { connect} from 'react-redux';

import { withAlert } from 'react-alert';

import { loadProfile } from '/src/redux/actions/auth';

import Api from '/src/Api';
import { axiosError } from '/src/helpers/apiErrorHandler';

class LoginForm extends React.Component
{

    constructor(props)
    {

        super(props);

        this.state = {
            loginData: {
                email: '',
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

            var loginData = this.state.loginData;

            loginData[event.target.name] = event.target.value;

            this.setState({
                loginData: loginData
            });

        }        

    }

    handleFormSubmit(event)
    {

        event.preventDefault();

        var self = this;

        Api.authenticateUser(this.state.loginData).then(() => {

            self.props.loadProfileInformation();

            self.setState({
                redirect: <Redirect to="/" />
            });

        })
        .catch((err) => {

            //axiosError(self.props.alert, err);       

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
                    <label className="block text-blue-300 py-2 font-bold mb-2" htmlFor="emailAddress">
                        Email Address
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        value={this.state.loginData.email}
                        onChange={this.handleInputChange}
                        required="required"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-blue-300 py-2 font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring"
                        id="password"
                        name="password"
                        type="password"
                        value={this.state.loginData.password}
                        onChange={this.handleInputChange}
                        required="required"
                    />
                </div>

                <div className="flex items-center justify-between pt-4">
                    <button
                    className="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                    type="submit">
                        Sign In
                    </button>
                </div>

                </form>
            </React.Fragment>
        );

    }

}

const mapStateToProps = state => ({
    user: state.auth.user,
  });
  
const mapDispatchToProps = (dispatch) => {
    return {
        loadProfileInformation: () => dispatch(loadProfile())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);