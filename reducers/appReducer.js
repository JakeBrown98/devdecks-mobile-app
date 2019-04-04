import {
    INIT_APP,
} from '../actions/types';

const INITIAL_STATE = {
    data: [],
};

const appReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INIT_APP:
            return {...state, data: action.payload};
        default:
            return state;
    }
};

export default appReducer;
