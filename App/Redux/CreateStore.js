import {createStore, applyMiddleware, compose} from 'redux';
import ReduxThunk from 'redux-thunk';

export default (rootReducer) => {
    /* ------------- Redux Configuration ------------- */
    const middlewares = []
    const enhancers = []

    middlewares.push(ReduxThunk);

    /* ------------- Assemble Middleware ------------- */
    enhancers.push(applyMiddleware(...middlewares));

    /* ------------- Configure Store ------------- */
    const store = createStore(rootReducer, compose(...enhancers));

    return {
        store
    }
}