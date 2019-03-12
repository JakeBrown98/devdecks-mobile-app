import {
    ENABLE_SCROLL,
    DISABLE_SCROLL
} from '../actions/types';

const INITIAL_STATE = {
    scrollEnabled: true,
};

const screenReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ENABLE_SCROLL:
            return {...state, scrollEnabled: true};
        case DISABLE_SCROLL:
            return {...state, scrollEnabled: false};
        default:
            return state;
    }
};

export default screenReducer;
