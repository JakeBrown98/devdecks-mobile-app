import _ from 'lodash';
import data from '../data';
import {
    INIT_APP,
    SET_ACTIVE_STACK,
    ADD_FAVOURITE,
    REMOVE_FAVOURITE,
} from './types';

export const initializeApp = () => dispatch => {
    let favourites = [];
    const asyncStorage = {
        // favourites: ['Redux', 'React', 'SQL Basics', 'Types & Operators'],
        favourites: ['Redux'],
    };

    data.forEach(deck => {
        const matches = deck.stacks.filter(stack => asyncStorage.favourites.includes(stack.name));

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

export const setActiveStack = (questions = []) => ({
    type: SET_ACTIVE_STACK,
    payload: _.shuffle(questions),
});

export const addStackToFavourites = stack => dispatch => {
    dispatch({
        type: ADD_FAVOURITE,
        payload: stack,
    });
};

export const removeStackFromFavourites = stackName => dispatch => {
    dispatch({
        type: REMOVE_FAVOURITE,
        payload: stackName,
    });
};
