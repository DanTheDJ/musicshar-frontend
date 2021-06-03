import React from 'react';

import pluralize from 'pluralize';

import { connect } from 'react-redux';

const RoomViewerCount = ({ room, roomData }) => {

    console.log(roomData);

    if(!!roomData && !!roomData.viewerCount)
    {

        const displayText = pluralize('viewer', roomData.viewerCount, true);

        return <div className="text-gray-700">{displayText}</div>;

    }

    return <div>...</div>;

};

const mapStateToProps = state => ({
    roomData: state.room
});
  
// const mapDispatchToProps = (dispatch) => {
//     return {
//         loadProfileInformation: () => dispatch(loadProfile())
//     };
// };

export default connect(mapStateToProps)(RoomViewerCount);