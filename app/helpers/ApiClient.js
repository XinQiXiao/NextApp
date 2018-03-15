/**
 * create at 01/18/18
 */
'use strict'
import fetch from 'react-native-fetch-polyfill'
import {Platform} from 'react-native'
import DeviceInfo from 'react-native-device-info'

import {apiHost, apiPort} from './config'

const methods = ['get', 'post', 'put', 'patch', 'del']

function formatUrl(path) {
	const adjustedPath = path[0] !== '/' ? '/' + path : path
	return 'http://' + apiHost + ':' + apiPort + adjustedPath
}

function toQueryString(obj) {
	return obj ? Object.keys(obj).sort().map(function (key) {
			var val = obj[key]
			if (Array.isArray(val)) {
					return val.sort().map(function (val2) {
							// return encodeURIComponent(key) + '=' + encodeURIComponent(val2);
							return key + '=' + val2
					}).join('&');
			}
			//return encodeURIComponent(key) + '=' + encodeURIComponent(val);
			return key + '=' + val
	}).join('&') : ''
}

class _ApiClient {
  constructor(req) {
    methods.forEach((method) => {
      this[method] = (path, { params, data } = {}) => new Promise((resolve, reject) => {
					path =  formatUrl(path) + toQueryString(params)
					let userAgent = 'system:' + Platform.OS + ' build:AMAPP/' + DeviceInfo.getBuildNumber() + ' version:' +
                    DeviceInfo.getSystemVersion() + ' brand:' + DeviceInfo.getBrand() + ' model:' +
                    DeviceInfo.getModel()
          fetch(path, {
            method,
            headers: {
              'Accept': 'application/json',
							'Content-Type': 'application/json',
							'User-Agent': userAgent,
            },
						body: JSON.stringify(data || {}),
						timeout: 30 * 1000,
          }).then((response) => { 
            return response.json()
          }).then((response) => {
            console.log(path +' response json===>', response)
            if(Boolean(response)){
              let receive = response
              if(receive.code == 0){
                resolve(receive.data)
              }else{
                reject(new Error(receive.msg))
              }
            }else{
              reject(new Error('responseText为null'))
            }
          }).catch((err)=>{
            console.log(path + ' fetch err===>', err)
            reject(err)
          })
      })
    })
  }
}

const ApiClient = _ApiClient
export default ApiClient