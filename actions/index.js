import _ from 'lodash';
import data from '../data';
import {
    INIT_APP,
    SET_ACTIVE_STACK,
    SET_FAVOURITE,
    REMOVE_FAVOURITE,
} from './types';

export const initializeApp = () => dispatch => {
    let favourites = [];
    const asyncStorage = {
        favoriteStacks: ['Redux', 'React', 'SQL Basics', 'Types & Operators'],
    };

    data.forEach(deck => {
        const matches = deck.stacks.filter(stack => asyncStorage.favoriteStacks.includes(stack.name));

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
