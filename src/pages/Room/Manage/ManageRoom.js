import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

import RoomChat from '/src/components/RoomChat';

import Api from '../../../Api';
import RoomNotFound from '../../../components/RoomNotFound';

class ManageRoom extends Component
{

    constructor(props)
    {

      super(props);

      this.state = {
        room: null,
        isLoading: true
      };

    }

    componentDidMount()
    {

      var self = this;

      Api.getRoomDetails(this.props.id).then(function(room) {

        self.setState({
          room: room.data
        });

      })
      .catch(function(err) {

        console.error(err);

      })
      .finally(function() {

        self.setState({
          isLoading: false
        });

      });   

    }

    closeRoom()
    {

      

    }

    render()
    {

      const { room, isLoading} = this.state;

      if(isLoading)
      {

        return <div>Loading...</div>;

      }

      if(!!room)
      {

        return (
          <div className="flex">
            <div class="rounded overflow-hidden border w-full bg-white mx-3 md:mx-0 lg:mx-0">
              <div class="w-full flex p-3">
                <div class="flex">
                  <span class="pt-1 ml-2 font-bold text-sm text-gray-700">{room.name}</span>
                </div>
              </div>
              <div>
                Status
                Live Chat View
                Live Viewer List
                Live Requests
                Live Shoutouts

              </div>
              <div class="flex flex-wrap -m-4">
                <div class="p-4 md:w-1/3">
                    <div class="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
                      <div class="flex items-center mb-3">
                          <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                            </svg>
                          </div>
                          <h2 class="text-white text-lg title-font font-medium">Live Chat</h2>
                      </div>
                      <div class="flex-grow">
                          <RoomChat room={room} />
                          <a class="mt-3 text-blue-400 inline-flex items-center">
                            Learn More
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                          </a>
                      </div>
                    </div>
                </div>
                <div class="p-4 md:w-1/3">
                    <div class="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
                      <div class="flex items-center mb-3">
                          <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                          </div>
                          <h2 class="text-white text-lg title-font font-medium">The Catalyzer</h2>
                      </div>
                      <div class="flex-grow">
                          <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                          <a class="mt-3 text-blue-400 inline-flex items-center">
                            Learn More
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                          </a>
                      </div>
                    </div>
                </div>
                <div class="p-4 md:w-1/3">
                    <div class="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
                      <div class="flex items-center mb-3">
                          <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <circle cx="6" cy="6" r="3"></circle>
                                <circle cx="6" cy="18" r="3"></circle>
                                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                            </svg>
                          </div>
                          <h2 class="text-white text-lg title-font font-medium">Neptune</h2>
                      </div>
                      <div class="flex-grow">
                          <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                          <a class="mt-3 text-blue-400 inline-flex items-center">
                            Learn More
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                          </a>
                      </div>
                    </div>
                </div>
</div>
              <div>
                <button type="button" className="flex mx-auto mt-16 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg" onClick={this.closeRoom}>Close Room</button>
              </div>
            </div>
          </div>
        );

      }
      else
      {

        return <RoomNotFound></RoomNotFound>;

      }

    }

}

export default ManageRoom;