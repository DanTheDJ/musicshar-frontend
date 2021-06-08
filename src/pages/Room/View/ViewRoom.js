import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withAlert } from 'react-alert';

import { Link, Redirect, Switch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faLink } from '@fortawesome/free-solid-svg-icons';

import { ROOM_DATA_UPDATE, SCROLL_TO_BOTTOM_PAGE } from '/src/redux/actions/types';

import Api from '/src/Api';
import RoomNotFound from '/src/components/RoomNotFound';

import ProtectedRoute from '/src/components/ProtectedRoute';

// Import pages
import { ManageRoom } from '/src/pages';

import socket from '/src/Socket';

import RoomChat from '/src/components/RoomChat';
import RoomContent from '/src/components/RoomContent';
import RoomViewerCount from '/src/components/RoomViewerCount';
import UserProfileImage from '/src/components/UserProfileImage';

class ViewRoom extends Component
{

    constructor(props)
    {

      super(props);

      this.state = {
        isLoading: true
      };

      this.copySharingLink = this.copySharingLink.bind(this);

    }

    componentWillUnmount()
    {

      this.props.leaveRoom(this.props.id);     

    }

    componentDidMount()
    {

      var self = this;

      Api.getRoomDetails(this.props.id).then(function(room) {

        self.props.roomDataUpdate(room.data);

        self.props.joinRoom(self.props.id);

        self.props.scrollToBottomOfPage();

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

    currentUserCanEditRoom()
    {

      if(!!this.props.room.roomData && !!this.props.user)
      {

        var currentUser = this.props.user;

        return currentUser.id == this.props.room.roomData.ownerUser.id;

      }      

      return false;

    }

    copySharingLink()
    {

      // Copy to clipboard the current URL
      navigator.clipboard.writeText(window.location.href).then(() => {

        this.props.alert.success('Copied sharing link to clipboard.');

      }, () => {

        this.props.alert.error('Could not copy link to clipboard.');

      });
      

    }

    render()
    {

      const { isLoading} = this.state;

      const { room } = this.props;

      if(isLoading)
      {

        return <div>Loading...</div>;

      }
      
      if(!!room && room.roomClosed)
      {

        return <Redirect to="/dashboard"></Redirect>;

      }

      if(!!room.roomData)
      {

        return (
          <div>
            <Switch>
              <ProtectedRoute path="/room/:id/manage" component={ManageRoom} />
            </Switch>
            <div className="flex">
              <div className=" rounded overflow-hidden border w-4/6 bg-white mx-3 md:mx-0 lg:mx-0">
                <div className="w-full flex p-3">
                  <div className="flex">
                    <span className="pt-1 ml-2 font-bold text-sm text-gray-700">{room.roomData.name}</span>
                  </div>
                  {this.currentUserCanEditRoom() && 
                    <Link to={`/room/${room.roomData.id}/manage`} title="Manage Room">
                      <span className="px-2 ml-2 text-gray-600 hover:text-gray-900 cursor-pointer rounded float-right">
                        <FontAwesomeIcon icon={faCog} />
                      </span>
                    </Link>
                  }

                  <button title="Get Sharing Link" onClick={this.copySharingLink} >
                    <span className="px-2 ml-2 text-gray-600 hover:text-gray-900 cursor-pointer rounded float-right">
                      <FontAwesomeIcon icon={faLink} />
                    </span>
                  </button>

                </div>

                <RoomContent room={room.roomData}></RoomContent>

                <div className="mt-5 mx-3">

                  <div className="rounded overflow-hidden shadow-lg bg-gray-100 mx-2 px-2 pt-2">
                    <div className="float-right text-gray-700">
                        <RoomViewerCount room={room.roomData}></RoomViewerCount>
                      </div>
                    <UserProfileImage user={room.roomData.ownerUser} />
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2 text-gray-500">{ room.roomData.ownerUser.name }</div>
                      <p className="text-gray-700 text-base">
                      @{ room.roomData.ownerUser.username }
                      </p>
                    </div>
                  </div>

                </div>
              </div>
              <div className="w-1/6">
                  &nbsp;
              </div>
              <div className="rounded overflow-hidden border w-1/6 bg-white mx-3 md:mx-0 lg:mx-0">
                  <div className="w-full">
                      <RoomChat room={room.roomData}></RoomChat>
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
  room: state.room
});

const mapDispatchToProps = (dispatch) => {
  return {
      scrollToBottomOfPage: () => dispatch({
        type: SCROLL_TO_BOTTOM_PAGE
      }),
      joinRoom: (id) => socket.joinRoom(id, dispatch),
      leaveRoom: (id) => socket.leaveRoom(id, dispatch),
      roomDataUpdate: (data) => dispatch({
        type: ROOM_DATA_UPDATE,
        payload: {
          data: {room: data}
        }
      })
  };
};

export default connect(mapStateToProps, mapDispatchToProps) (withAlert()(ViewRoom));