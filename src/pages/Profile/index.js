import React from 'react';

import { connect } from 'react-redux';

import UserProfileForm from '/src/components/UserProfileForm';

const Profile = ({ user }) => {

    return <div>
        {!!user &&
            <UserProfileForm user={user} />
        }
    </div>;

};

const mapStateToProps = state => ({
    user: state.auth.user
});

const mapDispatchToProps = (dispatch) => {
    return {
        roomDataUpdate: (data) => dispatch({
            type: ROOM_DATA_UPDATE,
            payload: {
            data: {room: data}
            }
        })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);