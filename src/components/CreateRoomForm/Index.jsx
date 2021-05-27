import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Api from '/src/Api';

import { axiosError } from '/src/helpers/apiErrorHandler';
class CreateRoomForm extends React.Component {

    constructor(props)
    {

        super(props);

        this.state = {
            room: {
                name: '',
                description: '',
                //privacy
                //source
            }
        };

        this.cancel = this.cancel.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);

    }

    cancel()
    {

        this.setState({
            redirect: <Redirect to="/dashboard"></Redirect>
        });

    }

    handleFormSubmit(event)
    {

        event.preventDefault();

        var self = this;

        Api.createRoom(this.state.room).then((createdRoom) => {

            self.setState({
                redirect: <Redirect to={"/room/"+createdRoom.data.id} />
            });

        })
        .catch((err) => {

            axiosError(self.props.alert, err);       

        });

    }

    handleInputChange(event)
    {

        this.setState({
            room: {
                ...this.state.room,
                [event.target.name]: event.target.value
            }
        });

    }

    render()
    {

        const { redirect} = this.state;

        if(!!redirect)
        {

            return redirect;

        }

        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                <div class="flex h-screen items-center justify-center mb-32">
                <div class="grid bg-white rounded-lg shadow-xl w-11/12 md:w-9/12 lg:w-1/2">
                    <div class="flex justify-center py-4">
                    <div class="flex bg-purple-200 rounded-full md:p-4 p-2 border-2 border-purple-300">
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                    </div>
                    </div>

                    <div class="flex justify-center">
                    <div class="flex">
                        <h1 class="text-gray-600 font-bold md:text-2xl text-xl">Start a Room</h1>
                    </div>
                    </div>

                    <div class="grid grid-cols-1 mt-5 mx-7">
                        <label class="uppercase md:text-sm text-xs text-gray-500 font-semibold">Room Name</label>
                        <input class="py-2 px-3 rounded-lg border-2 text-gray-700 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Room Name" name="name" value={this.state.room.name} onChange={this.handleInputChange}/>
                    </div>

                    <div class="grid grid-cols-1 mt-5 mx-7">
                    <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Privacy</label>
                    <select class="py-2 px-3 rounded-lg border-2 text-gray-700 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                        <option>Public</option>
                        <option>Private</option>
                    </select>
                    </div>

                    <div class='flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5'>
                        <button class='w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2' type="button" onClick={this.cancel}>Cancel</button>
                        <button class='w-auto bg-purple-500 hover:bg-purple-700 rounded-lg shadow-xl font-medium text-white px-4 py-2' type="submit">Create</button>
                    </div>

                </div>
                </div>
                </form>
            </div>
        );

    }

}

export default CreateRoomForm;