/**
 * create at 05/14/18
 */

import React, { Component } from 'react'
import { View, Text, Button, Image, StyleSheet, NativeModules } from 'react-native'

export default class Container extends Component{
	constructor(props){
		super(props)

	}

	_calenderAddEvent(){
		let calendarMgr = NativeModules.CalendarManager
		let date = new Date()
		calendarMgr.addEvent('鑫鑫', {
			location: '健德门大街',
			time: date.getTime(),
			des: '用于测试'
		})
	}

	render(){
		return (
			<View style={styles.container}>
				<Button title='calendar' onPress={this._calenderAddEvent}></Button>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center'
	}
})