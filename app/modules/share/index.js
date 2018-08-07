/**
 * create at 08/07/18
 */

import { NativeModules, Platform } from 'react-native'

const { RNShareManager } = NativeModules

const nativeSystemShare = async ( {title = '', url = ''} = {} ) => {
	try{
		if(Platform.OS === 'ios'){
			await RNShareManager.asyncOpenSystemShare(title, url)
		}
	} catch(e){
		// console.log('nativeSystemShare e=>', e)
		throw e
	}
}

const nativeShareFile = async ()=>{
	try{
		if(Platform.OS === 'ios'){
			await RNShareManager.openShareFile()
		}
	} catch(e){
		// console.log('nativeShareFile e=>', e)
		throw e
	}
}

export {
	nativeSystemShare,
	nativeShareFile,
}