import { combineReducers } from 'redux'
import errorReducer from './errorReducer'
import authReducer from './authReducer';
import blogReducer from "./blogReducer";
import tradeRaducer from "./tradeReducer"

const rootReducer = combineReducers({
    auth: authReducer,
    error: errorReducer,
    blogs:blogReducer,
    trade: tradeRaducer
})

export default rootReducer;