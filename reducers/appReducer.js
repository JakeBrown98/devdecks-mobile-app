import {
    INIT_APP,
    SET_ACTIVE_STACK,
    ADD_FAVOURITE,
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
            const { data, favourites } = action.payload;

            return {...state, data, favourites};
        case SET_ACTIVE_STACK:
            return {...state, activeStack: action.payload};
        case ADD_FAVOURITE:
            return {...state, favourites: [...state.favourites, action.payload] };
        case REMOVE_FAVOURITE:
            return {...state, favourites: state.favourites.filter(favourite => favourite.name !== action.payload)};
        default:
            return state;
    }
};
