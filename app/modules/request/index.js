/**
 * 
 */
import { ApiClient } from '../../helpers'

export async function requestData(client, path, searchCondition, syncKey){
	let requestClient = client 
	if(!requestClient){
		requestClient = new ApiClient()
	}

	try{
		searchCondition.sync_key = syncKey
		const ret = await requestClient.post(path, {data: searchCondition})
		// console.log('requestData ret===>', ret)
		return ret
	} catch(e){
		// console.log('requestData e===>', e)
		throw e
	}
}