/**
 * 
 */
import { createStore as _createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import clientMiddleware from './middleware/clientMiddleware'
import reducer from './reducer'

export default function createStore(client){
	const middleware = []
	middleware.push(clientMiddleware(client))
	if (__DEV__) {
			// middleware.push(logger)
	}
	let finalCreateStore = applyMiddleware(...middleware)(_createStore)
	const store = finalCreateStore(reducer)
	return store
}