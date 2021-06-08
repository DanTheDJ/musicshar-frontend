import React from 'react';

const YOUTUBE = 'youtube';

import YoutubeSource from './YoutubeSource';

const RoomContent = ({ room }) => {

    if(!!room.roomSource)
    {

        if(room.roomSource.type == YOUTUBE)
        {

            return <YoutubeSource source={room.roomSource}></YoutubeSource>;

        }

    }

    return <img class="w-full bg-cover" src="https://via.placeholder.com/1280x720" />;

};

export default RoomContent;