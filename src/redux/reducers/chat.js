import {
    CHAT_MESSAGE_RECEIVED,
    CHAT_MESSAGE_SENT,
    CLEAR_CHAT_HISTORY,
    TOGGLE_MOBILE_CHAT
} from "../actions/types";

const initialState = { messages: [], mobileChatOpen: false };

export default function (state = initialState, action) 
{

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

        case TOGGLE_MOBILE_CHAT:
            return {
                ...state,
                mobileChatOpen: !state.mobileChatOpen
            };

        default:
            return state;
    }

};