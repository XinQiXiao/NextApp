
import React, { Component } from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'

export default class CurrentPage extends Component{
	constructor(props){
		super(props)

		// func
		this._testCopy = this._testCopy.bind(this)
		this._shallowCopy = this._shallowCopy.bind(this)
		this._deepCopy = this._deepCopy.bind(this)
	}

	componentWillMount(){
		// 测试 tag 功能
		this._testCopy()
	}

	// 手动实现的浅拷贝和深拷贝
	// https://blog.csdn.net/SinceroTu/article/details/78055278
	_testCopy(){
		let arr = [0, 'a', {b: 1}]
		let new_arr = this._deepCopy(arr)

		new_arr[2].b = 2
		console.log('_testCopy=>')
		console.log(arr)
		console.log(new_arr)
	}

	// 浅拷贝
	_shallowCopy(obj){
		// 判断是否是数组或者对象
		if(typeof obj !== 'object'){
			return
		}
		let newObj = obj instanceof Array ? [] : {}
		for(let key in obj){
			if(obj.hasOwnProperty(key)){
				newObj[key] = obj[key]
			}
		}
		return newObj
	}

	_deepCopy(obj){
		// 判断是否是数组或者对象
		if(typeof obj !== 'object'){
			return
		}
		let newObj = obj instanceof Array ? [] : {}
		for(let key in obj){
			if(obj.hasOwnProperty(key)){
				newObj[key] = typeof obj[key] === 'object' ? this._deepCopy(obj[key]) : obj[key]
			}
		}
		return newObj
	}

	render(){
		return (
			<View style={styles.container}>
				<Text>work test.</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1, 
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff'
	}
})