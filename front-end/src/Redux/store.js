import { createStore, applyMiddleware, compose } from 'redux';
import rootreducer from './Reducer';
import thunk from "redux-thunk"
 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(rootreducer, /* preloadedState, */ composeEnhancers(

    applyMiddleware(thunk)
  ));
export default store