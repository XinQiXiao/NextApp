
import React, { Component } from 'react'
import {View, Text, Image, StyleSheet, Button} from 'react-native'
import { Actions } from 'react-native-router-flux'

export default class CurrentPage extends Component{
	constructor(props){
		super(props)

		this.pageName = 'work'
	}

	render(){
		return (
			<View style={styles.container}>
				<Text>work.</Text>
				<Button title="to contract" onPress={Actions.contractOptions}/>
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