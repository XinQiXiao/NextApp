
import React, { Component } from 'react'
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import _ from 'lodash'

// components
import { SafeView } from '../../components'

export default class CurrentPage extends Component{
	constructor(props){
		super(props)

		this.state = {
			childName: 'name'
		}
	}

	_changeClickName(){
		this.setState({
			childName: 'changeName'
		})
	}

	render(){
		console.log('father render')
		return(
			<SafeView >
				<View style={styles.container}>
					<Text>mine demo.</Text>
					<ChildComponent name={this.state.childName} childChangeName={()=>this._changeClickName()}/>
				</View>
			</SafeView>
		)
	}
}


class ChildComponent extends Component{
	constructor(props){
		super(props)

		// this.state = {
		// 	name: 'name'
		// }

		this._changeName = this._changeName.bind(this)
	}

	_changeName(){
		// this.setState({
		// 	name: 'changeName'
		// })
		// console.log('----')
		const {childChangeName} = this.props
		if(_.isFunction(childChangeName)){
			childChangeName()
		}
	}

	render(){
		console.log('child render')
		return (
			<View >
				<TouchableOpacity onPress={this._changeName}>
					<Text>changeName</Text>
				</TouchableOpacity>
				<Text>{this.props.name}</Text>
			</View>
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