import {
    ROOM_JOINED,
    ROOM_LEFT,
    VIEWER_COUNT_UPDATED
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
                ...state
            };
            break;
        case ROOM_LEFT:
            return {
                ...state,
                viewerCount: null
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