import { combineReducers } from 'redux';
import stackReducer from './stackReducer';
import screenReducer from './screenReducer';

const reducers = combineReducers({
    stack: stackReducer,
    screen: screenReducer,
});

export default reducers;
