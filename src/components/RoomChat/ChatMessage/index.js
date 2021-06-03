import React from 'react';

import { connect} from 'react-redux';

import ReceivedMessage from './ReceivedMessage';
import SentMessage from './SentMessage';

const ChatMessage = ({ user, message }) => {

    const isSender = false;

    if(isSender)
    {
        
        return <SentMessage message={message} />;

    }

    return <ReceivedMessage message={message} />;

};

const mapStateToProps = state => ({
    user: state.auth.user,
  });
  
const mapDispatchToProps = (dispatch) => {
    return {
        //loadProfileInformation: () => dispatch(loadProfile())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatMessage);

