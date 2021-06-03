import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

import Api from '../../../Api';
import RoomNotFound from '../../../components/RoomNotFound';

import socket from '/src/Socket';

import RoomChat from '/src/components/RoomChat';
import RoomContent from '/src/components/RoomContent';
import RoomViewerCount from '/src/components/RoomViewerCount';

class ViewRoom extends Component
{

    constructor(props)
    {

      super(props);

      this.state = {
        room: null,
        isLoading: true
      };

    }

    componentWillUnmount()
    {

      this.props.leaveRoom(this.props.id);

    }

    componentDidMount()
    {

      var self = this;

      Api.getRoomDetails(this.props.id).then(function(room) {

        self.setState({
          room: room.data
        }, () => {

          self.props.joinRoom(self.props.id);

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
            <div class=" rounded overflow-hidden border w-4/6 bg-white mx-3 md:mx-0 lg:mx-0">
              <div class="w-full flex p-3">
                <div class="flex">
                  <span class="pt-1 ml-2 font-bold text-sm text-gray-700">{room.name}</span>
                </div>
                <span class="px-2 hover:bg-gray-300 cursor-pointer rounded">
                  <FontAwesomeIcon icon={faEllipsisH} />
                </span>
                <Link to={`/room/${room.id}/manage`}>
                  <span class="px-2 hover:bg-gray-300 cursor-pointer rounded float-right">
                    <FontAwesomeIcon icon={faEdit} />
                  </span>
                </Link>
              </div>
              <RoomContent room={room}></RoomContent>
              <RoomViewerCount room={room}></RoomViewerCount>
              <div class="px-3 pb-2">
                <div class="pt-2">
                  <i class="far fa-heart cursor-pointer"></i>
                  <span class="text-sm text-gray-400 font-medium">12 likes</span>
                </div>
                <div class="pt-1">
                  <div class="mb-2 text-sm">
                    <span class="font-medium mr-2">braydoncoyer</span> Lord of the Rings is my favorite film-series. One day I'll make my way to New Zealand to visit the Hobbiton set!
                  </div>
                </div>
                <div class="text-sm mb-2 text-gray-400 cursor-pointer font-medium">View all 14 comments</div>
                <div class="mb-2">
                  <div class="mb-2 text-sm">
                    <span class="font-medium mr-2">razzle_dazzle</span> Dude! How cool! I went to New Zealand last summer and had a blast taking the tour! So much to see! Make sure you bring a good camera when you go!
                  </div>
                </div>
              </div>
            </div>
            <div class="w-1/6">
                &nbsp;
            </div>
            <div class="rounded overflow-hidden border w-1/6 bg-white mx-3 md:mx-0 lg:mx-0">
                <div class="w-full">
                    <RoomChat room={room}></RoomChat>
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
      joinRoom: (id) => socket.joinRoom(id, dispatch),
      leaveRoom: (id) => socket.leaveRoom(id, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewRoom);