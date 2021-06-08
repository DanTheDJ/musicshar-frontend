import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { loadProfile } from '/src/redux/actions/auth';

import Api from '/src/Api';

import { withAlert } from "react-alert";

import { axiosError } from '/src/helpers/apiErrorHandler';

class UserProfileForm extends React.Component {

    constructor(props)
    {

        super(props);

        this.state = {
            user: props.user
        };

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);

    }

    handleFormSubmit(event)
    {

        event.preventDefault();

        var self = this;

        Api.updateProfile(this.state.user).then(() => {

            self.props.loadProfileInformation();

        })
        .catch((err) => {

            axiosError(self.props.alert, err);       

        });

    }

    handleInputChange(event)
    {

        this.setState({
            user: {
                ...this.state.user,
                [event.target.name]: event.target.value
            }
        });

    }

    render()
    {

        const { redirect } = this.state;

        if(!!redirect)
        {

            return redirect;

        }

        if(!!this.state.user)
        {

            return (
                <div>
                    <form onSubmit={this.handleFormSubmit}>
                        <div className="flex h-screen items-center justify-center mb-32">
                            <div className="grid bg-white rounded-lg shadow-xl w-11/12 md:w-9/12 lg:w-1/2">
                                <div className="flex justify-center py-4">
                                <div className="flex bg-purple-200 rounded-full md:p-4 p-2 border-2 border-purple-300">
                                    
                                </div>
                                </div>
    
                                <div className="flex justify-center">
                                <div className="flex">
                                    <h1 className="text-gray-600 font-bold md:text-2xl text-xl">Your Profile</h1>
                                </div>
                                </div>
    
                                <div className="grid grid-cols-1 mt-5 mx-7">
                                    <label className="uppercase md:text-sm text-xs text-gray-500 font-semibold">Name</label>
                                    <input className="py-2 px-3 rounded-lg border-2 text-gray-700 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Your Name" name="name" value={this.state.user.name} onChange={this.handleInputChange} />
                                </div>

                                <div className="grid grid-cols-1 mt-5 mx-7">
                                    <label className="uppercase md:text-sm text-xs text-gray-500 font-semibold">Email Address</label>
                                    <input className="py-2 px-3 rounded-lg border-2 text-gray-700 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="email" name="email" value={this.state.user.email} onChange={this.handleInputChange} />
                                </div>
    
                                <div class='flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5'>
                                    <button class='w-auto bg-purple-500 hover:bg-purple-700 rounded-lg shadow-xl font-medium text-white px-4 py-2' type="submit">Save</button>
                                </div>
    
                            </div>
                        </div>
                    </form>
                </div>
            );

        }

        return null;        

    }

}

const mapStateToProps = state => ({
    
});

const mapDispatchToProps = (dispatch) => {
    return {
        loadProfileInformation: () => dispatch(loadProfile())
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (withAlert()(UserProfileForm));