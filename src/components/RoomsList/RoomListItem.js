import React from 'react';

import { Link } from 'react-router-dom';

import UserProfileImage from '/src/components/UserProfileImage';
import RoomPrivacyBadge from '/src/components/RoomPrivacyBadge';

const RoomListItem = ({ room }) => {

    return (
    <tr>
        <td class="px-6 py-4 whitespace-nowrap">
            <div class="flex items-center">
                <div class="flex-shrink-0 h-10 w-10">   
                    <UserProfileImage user={room.ownerUser} />
                </div>
                <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">
                    { room.ownerUser.name }
                    </div>
                    <div class="text-sm text-gray-500">
                    { room.ownerUser.username }
                    </div>
                </div>
            </div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-900">{room.name}</div>
            {/* <div class="text-sm text-gray-500">Optimization</div> */}
        </td>
        <td class="px-6 py-4 whitespace-nowrap">

            <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            Open
            </span>

            <span class="ml-2">

                <RoomPrivacyBadge room={room} />

            </span>

        </td>
        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
            <Link to={`/room/${room.id}`} class="text-indigo-600 hover:text-indigo-900">
                Join
            </Link>
        </td>
        </tr>
    );

};

export default RoomListItem;