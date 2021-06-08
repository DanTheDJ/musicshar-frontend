import {
    ROOM_JOINED,
    ROOM_LEFT,
    VIEWER_COUNT_UPDATED,
    ROOM_CLOSED,
    ROOM_DATA_UPDATE
} from "../actions/types";

const initialState = {
    viewerCount: null
};

export default function (state = initialState, action) 
{

    switch(action.type)
    {

        case ROOM_JOINED:
            return {
                ...state,
            };
            break;
        case ROOM_LEFT:
            return {
                ...state,
                viewerCount: null,
                roomData: undefined
            };
            break;
        case ROOM_CLOSED:
            return {
                ...state,
                roomClosed: true,
                roomData: null
            };
            break;

        case ROOM_DATA_UPDATE:
            return {
                ...state,
                roomData: action.payload.data.room,
                roomClosed: false
            };
            break;

        case VIEWER_COUNT_UPDATED:
            return {
                ...state,
                viewerCount: action.payload.data.viewerCount
            };
            break;

        default:
            return state;
    }

};