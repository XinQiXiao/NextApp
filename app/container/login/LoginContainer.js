
import React, { Component } from 'react'
import {View, Text, Image, StyleSheet, Button} from 'react-native'
import {Actions} from 'react-native-router-flux'

// components
import { SafeView } from '../../components'

export default class CurrentPage extends Component{
	constructor(props){
		super(props)

		this.pageName = 'mine demo'
	}

	render(){
		return(
			<SafeView >
			<View style={styles.container}>
				<Text>login.</Text>
				<Button title="back" onPress={Actions.pop}/>
			</View>
			</SafeView>
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