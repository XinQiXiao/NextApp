
import React, { Component } from 'react'
import {View, Text, Image, StyleSheet, Button} from 'react-native'
import { Actions } from 'react-native-router-flux'

export default class CurrentPage extends Component{

	componentWillMount(){
		console.log('WorkContainer componentWillMount')
	}

	render(){
		return (
			<View style={styles.container}>
				<Text>work.</Text>
				<Button title="ScrollTab" onPress={Actions.scrollTab}/>
				<Button title="to contract" onPress={Actions.contractOptions}/>
				<Button title="分享和下载" onPress={Actions.nativeShare}/>
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