import React from 'react';

import pluralize from 'pluralize';

import { connect } from 'react-redux';

const RoomViewerCount = ({ room, roomData }) => {

    if(!!roomData && !!roomData.viewerCount)
    {

        const displayText = pluralize('Viewer', roomData.viewerCount, true);

        return <div className="font-semibold">{displayText}</div>;

    }

    return <div>... Viewers</div>;

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