import {
    INIT_APP,
    SET_ACTIVE_STACK,
} from '../actions/types';


const INITIAL_STATE = {
    data: [],
    activeStack: [],
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INIT_APP:
            return {...state, data: action.payload.data};
        case SET_ACTIVE_STACK:
            return {...state, activeStack: action.payload};
        default:
            return state;
    }
};
