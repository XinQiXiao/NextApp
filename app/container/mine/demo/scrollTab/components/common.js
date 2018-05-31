
import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'

function reactPage({tabLabel = 'react'} = {}){
	return (
		<View style={styles.react} tabLabel={tabLabel}/>
	)
}

class FlowPage extends Component{
	constructor(props){
		super(props)
	}

	render(){
		return (
			<View style={styles.flow}>
				<Text>flow content</Text>
				<ScrollView style={{flex: 1}}>
					<View style={styles.flowBigView}>
						<Text>1</Text>
						<Text>2</Text>
						<Text>3</Text>
					</View>
				</ScrollView>
			</View>
		)
	}
}

function jestPage({tabLabel = 'jest'} = {}){
	return (
		<View style={styles.jest} tabLabel={tabLabel}>
			<View style={styles.flowBigView}>
				<Text>1</Text>
				<Text>2</Text>
				<Text>3</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	react: {
		flex: 1,
		backgroundColor: '#f00'
	},
	flow: {
		flex: 1,
		backgroundColor: '#0f0'
	},
	jest:{
		flex: 1,
		backgroundColor: '#00f'
	},
	flowBigView: {
		height: 2000,
		backgroundColor: '#fff',
		justifyContent: 'space-around',
		alignItems: 'center'
	}
})

export {
	reactPage,
	FlowPage,
	jestPage
}