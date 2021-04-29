import { combineReducers } from 'redux'
import dataReducer from './dataReducer'
import menuReducer from './menuReducer'

export default combineReducers({dataReducer, menuReducer})