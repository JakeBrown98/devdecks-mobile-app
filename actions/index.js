import { INIT_APP } from './types';
import data from '../data';

export const initializeApp = () => ({
    type: INIT_APP,
    payload: data,
});
