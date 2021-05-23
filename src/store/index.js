import rootReducer  from "./reducers";
import thunk from 'redux-thunk' //middleware
import {createStore, compose, applyMiddleware} from 'redux'


let composeEnhancers = compose;

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configStore = () => {
    return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
};

export default configStore