import React from 'react';

const RoomPrivacyBadge = ({ room }) => {

    if(room.isPublic)
    {

        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
            Public
            </span>;

    }

    return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
            Private
            </span>;


};

export default RoomPrivacyBadge;