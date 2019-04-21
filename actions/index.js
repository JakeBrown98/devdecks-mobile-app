import data from '../data';
import {
    INIT_APP,
    SET_FAVOURITE,
    REMOVE_FAVOURITE,
} from './types';

export const initializeApp = () => dispatch => {
    let favourites = [];
    const asyncStorage = ['Redux', 'React', 'SQL Basics'];

    data.forEach(deck => {
        const matches = deck.stacks.filter(stack => {
            return asyncStorage.includes(stack.name);
        });

        if (matches.length) {
            favourites = [...matches];
        }
    });

    dispatch({
        type: INIT_APP,
        payload: {
            data,
            favourites,
        },
    });
};
