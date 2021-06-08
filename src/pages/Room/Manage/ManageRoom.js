import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faComment, faLaptopCode, faVideo } from '@fortawesome/free-solid-svg-icons';

import RoomChat from '/src/components/RoomChat';
import RoomViewerCount from '/src/components/RoomViewerCount';

import ChangeRoomSourceForm from '/src/components/ChangeRoomSourceForm';

import Api from '../../../Api';
import RoomNotFound from '../../../components/RoomNotFound';
import { SCROLL_TO_TOP_PAGE } from '../../../redux/actions/types';

class ManageRoom extends Component
{

    constructor(props)
    {

      super(props);

      this.state = {
        room: null,
        isLoading: true,
        redirect: null
      };

      this.closeRoom = this.closeRoom.bind(this);

    }

    componentDidMount()
    {

      // Scroll to top of page
      this.props.scrollToTopOfPage();

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

      var self = this;

      Api.closeRoom(this.state.room.id).then(() => {

      })
      .catch((err) => {

        console.error(err);

      });

    }

    render()
    {

      const { room, isLoading, redirect } = this.state;

      if(!!redirect)
      {

        return redirect;

      }

      if(isLoading)
      {

        return <div>Loading...</div>;

      }

      if(!!room)
      {

        return (
          <div className="flex mb-2 mt-2">
            <div className="rounded overflow-hidden border w-full bg-white mx-3 md:mx-0 lg:mx-0">
              <div className="w-full flex p-3 mt-3">
                <div className="flex">
                  <Link to={`/room/${room.id}`}>
                    <span className="px-2 hover:bg-gray-300 cursor-pointer rounded float-right">
                      <FontAwesomeIcon icon={faArrowLeft} />
                    </span>
                  </Link>
                  <span className="pt-1 ml-2 font-bold text-sm text-gray-700">Manage <span className="text-gray-500">`{room.name}`</span></span>
                </div>
              </div>
              <div className="w-full flex pt-3">
                <div>
                  <span className="pt-1 ml-2 font-bold text-sm text-gray-700">Quick Actions: </span>
                </div>
                
              </div>
              <div className="w-full flex p-3">
                <div>
                  <button type="button" onClick={this.closeRoom} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Close Room</button>
                </div>
              </div>
              <div className="flex flex-wrap -m-4">
                <div className="p-4 md:w-1/3">
                    <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
                      <div className="flex items-center mb-3">
                          <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                            <FontAwesomeIcon icon={faComment} />
                          </div>
                          <h2 className="text-white text-lg title-font font-medium">Live Chat</h2>
                      </div>
                      <div className="flex-grow">
                          <RoomChat room={room} />
                      </div>
                    </div>
                </div>
                <div className="p-4 md:w-1/3">
                    <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
                      <div className="flex items-center mb-3">
                          <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                            <FontAwesomeIcon icon={faVideo} />
                          </div>
                          <h2 className="text-white text-lg title-font font-medium">Viewer Count</h2>
                      </div>
                      <div className="flex-grow text-white">
                        <RoomViewerCount room={room}></RoomViewerCount>
                      </div>
                    </div>
                </div>
                <div className="p-4 md:w-1/3">
                    <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
                      <div className="flex items-center mb-3">
                          <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                            <FontAwesomeIcon icon={faLaptopCode} />
                          </div>
                          <h2 className="text-white text-lg title-font font-medium">Room Source</h2>
                      </div>
                      <div className="flex-grow text-white">
                        Change Room Source

                        <ChangeRoomSourceForm room={room} />

                      </div>
                    </div>
                </div>
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

const mapStateToProps = state => ({
  user: state.auth.user,
});

const mapDispatchToProps = (dispatch) => {
  return {
    scrollToTopOfPage: () => dispatch({
      type: SCROLL_TO_TOP_PAGE
    })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageRoom);