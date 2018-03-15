/**
 * 
 */
import React, { Component } from 'react'

import DeviceInfo from 'react-native-device-info'

// components
import MainRoot from './container/Main'

// TODO apiClient
// TODO store 
// TODO global storage

export default class extends Component{
	constructor(props){
		super(props)
	}

	componentDidMount(){
		// console.log('DeviceInfo ==>', DeviceInfo.getAllDevicesInfo())
	}

	render(){
		return <MainRoot />
	}
}