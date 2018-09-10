
import React, { Component } from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import { Actions } from 'react-native-router-flux'

class CurrentPage extends Component{

	componentWillMount(){
		console.log('HomeContainer componentWillMount')
	}

	render(){
		return (
			<View style={styles.pageView}>	
				<Text>home.</Text>
				<Button title="Demo" onPress={Actions.demo}/>
				<Button title="Test" onPress={Actions.test}/>
				<Button title="LightBox" onPress={Actions.demoLightBox}/>
				<Button title="ErrorModal" onPress={Actions.errorModal}/>
				<Button title="Login" onPress={Actions.loginStack}/>
				<Button title="Message bar test" onPress={Actions.messageBarTest}/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	pageView: {
		flex: 1, 
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#0f0'
	}
})

export default CurrentPage