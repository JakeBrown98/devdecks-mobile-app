import { combineReducers } from 'redux';
import appReducer from './appReducer';
import favouritesReducer from './favouritesReducer';


const reducers = combineReducers({
    app: appReducer,
    favourites: favouritesReducer,
});

export default reducers;
