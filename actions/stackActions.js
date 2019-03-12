import {
    SHOW_STACK_POPUP,
    HIDE_STACK_POPUP,
    ADD_STACK_TO_FAVOURITES,
    REMOVE_STACK_FROM_FAVOURITES,
} from './types';
import { enableScrolling, disableScrolling } from './screenActions';

export const showStackPopup = selectedStack => {
    disableScrolling();

    return { type: SHOW_STACK_POPUP, payload: selectedStack };
};

export const hideStackPopup = () => {
    enableScrolling();

    return { type: HIDE_STACK_POPUP };
};

export const addToStackToFavourites = selectedStack => {
    return { type: ADD_STACK_TO_FAVOURITES, payload: selectedStack };
};

export const removeStackFromFavourites = selectedStack => {
    return { type: REMOVE_STACK_FROM_FAVOURITES, payload: selectedStack };
};
