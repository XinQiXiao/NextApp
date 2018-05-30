
import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

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
			<View style={styles.flow}/>
		)
	}
}

function jestPage({tabLabel = 'jest'} = {}){
	return (
		<View style={styles.jest} tabLabel={tabLabel}/>
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
	}
})

export {
	reactPage,
	FlowPage,
	jestPage
}