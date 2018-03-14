
import React, { Component } from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'

// components
import { SafeView } from '../../components'

export default class CurrentPage extends Component{
	constructor(props){
		super(props)

	}

	render(){
		return(
			<SafeView >
				<View style={styles.container}>
					<Text>message bar test.</Text>
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