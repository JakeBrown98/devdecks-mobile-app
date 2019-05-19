import {
    INIT_APP,
    SET_ACTIVE_STACK,
    ADD_FAVOURITE,
    REMOVE_FAVOURITE,
} from '../actions/types';
import { AsyncStorage } from 'react-native';
import { FAVOURITE_STACKS } from "../constants";


const INITIAL_STATE = {
    data: [],
    favourites: [],
    activeStack: [],
};

const localStorageTest = async () => {
    try {
        // await AsyncStorage.clear();
        const value = await AsyncStorage.getItem(FAVOURITE_STACKS);
        const favouritesInStorage = JSON.parse(value);

        console.log(favouritesInStorage);
    } catch (e) {
        console.log(e);
    }
}

export default (state = INITIAL_STATE, action) => {
    // localStorageTest();
    switch (action.type) {
        case INIT_APP:
            const { data, favourites } = action.payload;

            return {...state, data, favourites};
        case SET_ACTIVE_STACK:
            return {...state, activeStack: action.payload};
        case ADD_FAVOURITE:
            return {...state, favourites: [...state.favourites, action.payload] };
        case REMOVE_FAVOURITE:
            return {...state, favourites: state.favourites.filter(favourite => favourite.name !== action.payload)};
        default:
            return state;
    }
};
