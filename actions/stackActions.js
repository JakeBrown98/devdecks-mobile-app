import {
    SHOW_STACK_POPUP,
    HIDE_STACK_POPUP,
    ADD_STACK_TO_FAVOURITES,
    REMOVE_STACK_FROM_FAVOURITES, ENABLE_SCROLL, DISABLE_SCROLL,
} from './types';

export const showStackPopup = selectedStack => dispatch => {
    dispatch({ type: DISABLE_SCROLL });
    dispatch({ type: SHOW_STACK_POPUP, payload: selectedStack });
};

export const hideStackPopup = () => dispatch => {
    dispatch({ type: ENABLE_SCROLL });
    dispatch({ type: HIDE_STACK_POPUP });
};

export const addToStackToFavourites = selectedStack => {
    return { type: ADD_STACK_TO_FAVOURITES, payload: selectedStack };
};

export const removeStackFromFavourites = selectedStack => {
    return { type: REMOVE_STACK_FROM_FAVOURITES, payload: selectedStack };
};
