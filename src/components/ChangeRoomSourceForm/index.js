import React from 'react';

import { connect } from 'react-redux';

import { SCROLL_TO_BOTTOM_PAGE } from '/src/redux/actions/types';

import Api from '/src/Api';

import { withAlert } from 'react-alert';

import { axiosError } from '/src/helpers/apiErrorHandler';
import { Redirect } from 'react-router';

const initialState = {
    source: {
        type: '',
        data: {}
    }
};

class ChangeRoomSourceForm extends React.Component {

    constructor(props)
    {

        super(props);

        this.state = initialState;

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSourceDataInputChange = this.handleSourceDataInputChange.bind(this);

    }

    handleFormSubmit(event)
    {

        event.preventDefault();

        var self = this;

        Api.changeRoomSource(this.props.room.id, this.state.source).then(() => {

            self.setState(initialState);

            self.setState({
                redirect: <Redirect to={`/room/${this.props.room.id}`}></Redirect>
            });

        })
        .catch((err) => {

            axiosError(self.props.alert, err);       

        });

    }

    handleInputChange(event)
    {

        this.setState({
            source: {
                ...this.state.source,
                [event.target.name]: event.target.value
            }
        });

    }

    handleSourceDataInputChange(event)
    {

        if(event.target.name == 'youtubeVideoId')
        {

            // Input changed was the youtube source id, extract the youtube id from the pasted url

            var video_id = event.target.value;
            
            var regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
            var match = video_id.match(regExp);
            video_id = (match&&match[1].length==11)? match[1] : video_id;

            this.setState({
                source: {
                    ...this.state.source,
                    data: {
                        ...this.state.source.data,
                        [event.target.name]: video_id
                    }
                }
            });

        }
        else
        {

            this.setState({
                source: {
                    ...this.state.source,
                    data: {
                        ...this.state.source.data,
                        [event.target.name]: event.target.value
                    }
                }
            });

        }        

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
                    <div className="flex">
                        <div className="grid bg-white rounded-lg shadow-xl w-full">
                            
                            <div className="grid grid-cols-1 mt-5 mx-7">
                                <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Source Type</label>
                                <select value={this.state.source.type} onChange={this.handleInputChange} name="type" className="py-2 px-3 rounded-lg border-2 text-gray-700 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                                    <option value="">- Please Select an Option -</option>
                                    <option value="youtube">YouTube</option>
                                </select>
                            </div>

                            {!!this.state.source && !!this.state.source.type &&

                                <div className="grid grid-cols-1 mt-5 mx-7">
                                <label className="uppercase md:text-sm text-xs text-gray-500 font-semibold">Video ID</label>
                                <input className="py-2 px-3 rounded-lg border-2 text-gray-700 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" name="youtubeVideoId" value={this.state.source.data.youtubeVideoId} onChange={this.handleSourceDataInputChange}/>
                                <span className="text-gray-700 mt-2"><span>Paste a YouTube URL (LIVE videos also supported).</span></span>
                                <span className="text-gray-500 mt-2">(e.g <span className="">https://www.youtube.com/watch?v=*******</span>)</span>
                                </div>
                            
                            }   

                            <div class='flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5'>
                                <button class='w-auto bg-purple-500 hover:bg-purple-700 rounded-lg shadow-xl font-medium text-white px-4 py-2' type="submit">Change</button>
                            </div>

                        </div>
                    </div>
                </form>
            </div>
        );

    }

};

export default withAlert()(ChangeRoomSourceForm);