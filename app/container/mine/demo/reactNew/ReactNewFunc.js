/**
 * demo for react 16.+ 特性
 * create at 05/25/18
 */
import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, Button } from 'react-native'

class ReactNewFunc extends Component{
	constructor(props){
		super(props)

		this.state = {
			text: 'init'
		}
	}

	_change(){
		this.setState({
			text: 'aa'
		})
	}

	componentDidMount(){
		
	}

	componentWillReceiveProps(){
		console.log('---')
	}

	componentWillUpdate(){
		console.log('update')
	}

	render(){
		console.log('render')
		return (
			<View style={styles.container}>
				<Text>{this.state.text}</Text>
				<Button title='change' onPress={()=> this._change()}/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
})

export default ReactNewFunc