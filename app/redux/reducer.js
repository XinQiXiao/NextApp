/**
 * 
 */
import { combineReducers } from 'redux'

// reducers
import mine from './modules/mine/mineReducer'

const reducer = combineReducers({
	mine
})

export default reducer
