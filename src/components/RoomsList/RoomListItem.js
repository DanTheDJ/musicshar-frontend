import React from 'react';

import { Link } from 'react-router-dom';

import UserProfileImage from '/src/components/UserProfileImage';
import RoomPrivacyBadge from '/src/components/RoomPrivacyBadge';

const RoomListItem = ({ room }) => {

    return (
    <tr>
        <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10">   
                    <UserProfileImage user={room.ownerUser} />
                </div>
                <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                    { room.ownerUser.name }
                    </div>
                    <div className="text-sm text-gray-500">
                    { room.ownerUser.username }
                    </div>
                </div>
            </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">{room.name}</div>
            {/* <div className="text-sm text-gray-500">Optimization</div> */}
        </td>
        <td className="px-6 py-4 whitespace-nowrap">

            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            Open
            </span>

            <span className="ml-2">

                <RoomPrivacyBadge room={room} />

            </span>

        </td>
        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
            <Link to={`/room/${room.id}`} className="text-indigo-600 hover:text-indigo-900">
                Join
            </Link>
        </td>
        </tr>
    );

};

export default RoomListItem;