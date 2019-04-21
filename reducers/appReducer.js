import {
    INIT_APP,
    SET_FAVOURITE,
    REMOVE_FAVOURITE,
} from '../actions/types';

const INITIAL_STATE = {
    data: [],
    favourites: [],
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INIT_APP:
            return {...state, data: action.payload.data, favourites: action.payload.favourites};
        default:
            return state;
    }
};
