/**
 * create at 05/14/18
 */

import React, { Component } from 'react'
import { View, Text, Button, Image, StyleSheet, NativeModules, NativeEventEmitter } from 'react-native'
import _ from 'lodash'

export default class Container extends Component{
	constructor(props){
		super(props)

		// click 
		this._calenderAddEvent = this._calenderAddEvent.bind(this)
		this._calendarCallback = this._calendarCallback.bind(this)
		this._calendarPromise = this._calendarPromise.bind(this)
	}

	calendarMgr = null

	componentWillMount(){
		const {CalendarManager, CalendarEmitter} = NativeModules

		this.calendarMgr = CalendarManager ? CalendarManager : {}

		const calendarEmitter = new NativeEventEmitter(CalendarEmitter)

		console.log('eventNameEmitter===>', CalendarEmitter.eventName)
		this.subscription = calendarEmitter.addListener(CalendarEmitter.eventName, (reminder)=>{
			console.log('eventName =>', reminder.name)
		})
	}

	componentDidMount(){
		const { firstDayOfTheWeek } = this.calendarMgr
		console.log('firstDayOfTheWeek===>', firstDayOfTheWeek)
	}

	componentWillUnmount(){
		this.subscription.remove()
	}

	_calenderAddEvent(){
		const { addEvent } = this.calendarMgr
		if(_.isFunction(addEvent)){
			let date = new Date()
			addEvent('鑫鑫', {
				location: '健德门大街',
				time: date.getTime(),
				des: '用于测试'
			})
		}
	}

	_calendarCallback(){
		const { findEvents } = this.calendarMgr
		if(_.isFunction(findEvents)){
			findEvents((error, events) => {
				if(error){
					console.error(error)
				} else {
					console.log('events===>', events)
				}
			})
		}
	}

	async _calendarPromise(){
		try{
			const {findPromiseEvents} = this.calendarMgr
			if(_.isFunction(findPromiseEvents)){
				const res = await findPromiseEvents()
				console.log('_calendarPromise res===>', res)
			} else {
				throw new Error('findPromiseEvents is not a function')
			}
		}catch(e){
			console.log('_calendarPromise e===>', e)
		}
	}

	render(){
		return (
			<View style={styles.container}>
				<Button title='calendarAddEvent' onPress={this._calenderAddEvent}></Button>
				<Button title='calendarCallback' onPress={this._calendarCallback}></Button>
				<Button title='calendarPromise' onPress={this._calendarPromise}></Button>
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