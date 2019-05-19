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

export const addStackToFavourites = stack => async (dispatch) => {
    try {
        let newFavourites = null;
        let dataHasChanged = false;
        const { name } = stack;
        const value = await AsyncStorage.getItem(FAVOURITE_STACKS);

        if (value === null) {
            newFavourites = [name];
            dataHasChanged = true;
        } else {
            const favouritesInStorage = JSON.parse(value);

            if (!favouritesInStorage.includes(name)) {
                newFavourites = [...favouritesInStorage, name];
                dataHasChanged = true;
            }
        }

        if (dataHasChanged) {
            await AsyncStorage.setItem(FAVOURITE_STACKS, JSON.stringify(newFavourites));
        }

        dispatch({ type: ADD_FAVOURITE, payload: stack });
    } catch (error) {
        console.log(error);
    }
};

export const removeStackFromFavourites = stackName => async (dispatch) => {
    try {
        const value = await AsyncStorage.getItem(FAVOURITE_STACKS);
        const favouritesInStorage = JSON.parse(value);

        if (value !== null && favouritesInStorage.includes(stackName)) {
            const data = favouritesInStorage.filter(existingName => existingName !== stackName);

            await AsyncStorage.setItem(FAVOURITE_STACKS, JSON.stringify(data));

            dispatch({ type: REMOVE_FAVOURITE, payload: stackName });
        }
    } catch (error) {
        console.log(error);
    }
};
