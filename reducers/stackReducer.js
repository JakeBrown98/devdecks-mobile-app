import {
    SHOW_STACK_POPUP,
    HIDE_STACK_POPUP
} from '../actions/types';

const INITIAL_STATE = {
    optionChoices: null,
};

const stackReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SHOW_STACK_POPUP:
            return {...state, optionChoices: action.payload};
        case HIDE_STACK_POPUP:
            return {...state, optionChoices: null};
        default:
            return state;
    }
};

export default stackReducer;


