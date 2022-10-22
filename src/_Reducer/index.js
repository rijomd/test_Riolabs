import { productReducer } from './productreducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    product: productReducer,

});

export default rootReducer;
