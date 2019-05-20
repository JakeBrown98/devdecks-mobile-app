import {
    INIT_APP,
    ADD_FAVOURITE,
    REMOVE_FAVOURITE,
} from '../actions/types';


const INITIAL_STATE = {
    list: [],
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INIT_APP:
            return {...state, list: action.payload.favourites};
        case ADD_FAVOURITE:
            return {...state, list: [...state.list, action.payload] };
        case REMOVE_FAVOURITE:
            return {...state, list: state.list.filter(favourite => favourite.name !== action.payload)};
        default:
            return state;
    }
};
