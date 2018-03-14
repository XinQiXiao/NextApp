
import React, { Component } from 'react'
import {View, Text, Image, StyleSheet, Button} from 'react-native'
import { Actions } from 'react-native-router-flux'

// components
import { SafeView } from '../../components'

export default class CurrentPage extends Component{
	constructor(props){
		super(props)

		this.pageName = 'home'
	}

	render(){
		return (
			<SafeView >
			<View style={styles.container}>
				<Text>home.</Text>
				<Button title="Demo" onPress={Actions.demo}/>
				<Button title="Test" onPress={Actions.test}/>
			</View>
			</SafeView>
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