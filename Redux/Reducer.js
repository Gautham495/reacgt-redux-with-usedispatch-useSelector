import {combineReducers} from 'redux';
import {counter,product} from './Reducers/Reducers'

export default combineReducers({
    counter :counter,
    product:product
         });