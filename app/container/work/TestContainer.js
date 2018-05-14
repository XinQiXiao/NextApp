
import React, { Component } from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'

export default class CurrentPage extends Component{
	constructor(props){
		super(props)

		this.pageName = 'work test'
	}

	componentWillMount(){
		// 测试 tag 功能
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
		backgroundColor: '#f00'
	}
})