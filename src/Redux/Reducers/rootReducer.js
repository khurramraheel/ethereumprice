import { combineReducers } from 'redux'
import errorReducer from './errorReducer'
import authReducer from './authReducer';
import blogReducer from "./blogReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    error: errorReducer,
    blogs:blogReducer
})

export default rootReducer;