  
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootreducer from './Reducer';


const store = createStore(rootreducer)

export default store;
