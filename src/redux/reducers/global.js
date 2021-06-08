import {
    SCROLL_TO_BOTTOM_PAGE,
    SCROLL_TO_TOP_PAGE
} from "../actions/types";

const initialState = {
    scrollToBottom: 0,
    scrollToTop: 0
};

export default function (state = initialState, action) 
{

    switch(action.type)
    {

        case SCROLL_TO_BOTTOM_PAGE:
            return {
                ...state,
                scrollToBottom: ++state.scrollToBottom
            };
            break;

        case SCROLL_TO_TOP_PAGE:
            return {
                ...state,
                scrollToTop: ++state.scrollToTop
            };
            break;

        default:
            return state;
    }

};