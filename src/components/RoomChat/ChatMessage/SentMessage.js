import React from  'react';
import { connect } from 'react-redux';

import UserProfileImage from '/src/components/UserProfileImage';

const SentMessage = ({ currentUser, message }) => {

    return <div className="chat-message">
    <div className="flex items-end justify-end">
      <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
         <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white break-all">{message.message}</span>
      </div>
      <UserProfileImage user={currentUser} classes={['order-2']} />
    </div>
 </div>;

};

const mapStateToProps = state => ({
   currentUser: state.auth.user
});

export default connect(mapStateToProps)(SentMessage);