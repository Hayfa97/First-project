import {combineReducers} from "redux"
import {userReducer} from "./userReducer"
import {postsReducers} from './posts';
export const rootReducers=combineReducers({userReducer,postsReducers})
