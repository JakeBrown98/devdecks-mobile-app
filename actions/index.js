import { AsyncStorage } from 'react-native';
import _ from 'lodash';
import data from '../data';
import {
    INIT_APP,
    SET_ACTIVE_STACK,
    ADD_FAVOURITE,
    REMOVE_FAVOURITE,
} from './types';
import { FAVOURITE_STACKS } from '../constants';


export const initializeApp = () => async (dispatch) => {
    let favourites = [];

    try {
        const value = await AsyncStorage.getItem(FAVOURITE_STACKS);
        const existingFavourites = JSON.parse(value);

        data.forEach(deck => {
            const matches = deck.stacks.filter(stack => existingFavourites.includes(stack.name));

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
    } catch (error) {
        console.log(error);
    }
};

export const setActiveStack = (questions = []) => ({
    type: SET_ACTIVE_STACK,
    payload: _.shuffle(questions),
});

export const addStackToFavourites = stack => ({
    type: ADD_FAVOURITE,
    payload: stack,
});

export const removeStackFromFavourites = stackName => ({
    type: REMOVE_FAVOURITE,
    payload: stackName,
});
