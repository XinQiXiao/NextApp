/*
  This middleware is used to deal with async actions.
  When you have an properties' key named `promise`,
  it means this action is a promise enhanced async action.
  You can also dispatch a promise dierctly!
*/
export default function clientMiddleware(client) {
	return ({dispatch, getState}) =>
			next => action => {
					if (typeof action === 'function') {
							return action(dispatch, getState)
					}

					if (isPromise(action)) {
							return action.then(dispatch)
					}

					const {promise, types, ...rest} = action // eslint-disable-line no-use-before-define
					if (!promise) {
							return next(action)
					}

					const [REQUEST, SUCCESS, FAILURE] = types
					next({...rest, type: REQUEST})
					// pass the API server delegator to the promise
					const actionPromise = promise(client)
					actionPromise.then(
							(result) => {
									console.log('reducer middleware sucessful', result)
									next({...rest, result, type: SUCCESS})
							}
							, (error) => {
									console.log('reducer middleware fail')
									next({...rest, error, type: FAILURE})
							}
					).catch(error => {
							console.error(`MIDDLEWARE ERROR:`, error)
							next({...rest, error, type: FAILURE})
					})

					return actionPromise
			}
}

// check if an obj is `Promise`
function isPromise(val) {
	return val && typeof val.then === 'function';
}