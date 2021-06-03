import {
    CHAT_MESSAGE_RECEIVED,
    CHAT_MESSAGE_SENT,
    CLEAR_CHAT_HISTORY
} from "../actions/types";

const initialState = { messages: [] };

export default function (state = initialState, action) 
{

    console.log(initialState);

    switch(action.type)
    {

        case CHAT_MESSAGE_SENT:
        case CHAT_MESSAGE_RECEIVED: 
        return {
                ...state,
                messages: state.messages.concat([action.payload.data])
            };
            break;

        case CLEAR_CHAT_HISTORY:
            return {
                ...initialState
            };

        default:
            return state;
    }

};