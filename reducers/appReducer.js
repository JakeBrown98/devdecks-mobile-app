import {
    INIT_APP,
    SET_ACTIVE_STACK,
    SET_FAVOURITE,
    REMOVE_FAVOURITE,
} from '../actions/types';

const INITIAL_STATE = {
    data: [],
    favourites: [],
    activeStack: [],
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INIT_APP:
            return {...state, data: action.payload.data, favourites: action.payload.favourites};
        case SET_ACTIVE_STACK:
            return {...state, activeStack: action.payload};
        default:
            return state;
    }
};
