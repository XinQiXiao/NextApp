/**
 * 
 */
import React, { Component } from 'react'
import {View, Text } from 'react-native'

export default class extends Component{
	constructor(props){
		super(props)
	}

	render(){
		return (
			<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
				<Text>Main</Text>
			</View>
		)
	}
}