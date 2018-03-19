/**
 * 
 */
import { combineReducers } from 'redux'

// reducers
import mine from './modules/mine/mineReducer'
import login from './modules/login/loginReducer'

const reducer = combineReducers({
	mine,
	login
})

export default reducer
