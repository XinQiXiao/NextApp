
import React, { Component } from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'

export default class CurrentPage extends Component{
	constructor(props){
		super(props)

		this.pageName = 'work'
	}

	render(){
		return (
			<View style={styles.container}>
				<Text>work.</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1, 
		justifyContent: 'center',
		alignItems: 'center'
	}
})