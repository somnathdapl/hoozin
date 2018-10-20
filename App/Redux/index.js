import {combineReducers} from 'redux';
import ConfigureStore from './CreateStore';

/* ------------- Assemble The Reducers ------------- */
const rootReducer = combineReducers({
    Auth: require('./AuthRedux').reducer,
    Spinner: require('./SpinnerRedux').reducer
});

export default () => {
    const { store } = ConfigureStore(rootReducer);

    return store;
}