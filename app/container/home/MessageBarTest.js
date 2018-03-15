
import React, { Component } from 'react'
import {View, Text, Image, StyleSheet, Button} from 'react-native'
import { MessageBarManager } from 'react-native-message-bar'

// components
import { SafeView } from '../../components'

// constants
import {distancesCons} from '../../constants'

export default class CurrentPage extends Component{
	constructor(props){
		super(props)

	}

	_showMessage(){
		MessageBarManager.showAlert({
			title: 'Your alert title goes here',
  		message: 'Your alert message goes here',
			alertType: 'info',
			avatar: require('../../sources/images/tabbar/tab_home_nor.png'),
			duration: 6000,
			shouldHideAfterDelay: false,
			// shouldHideOnTap: false
			onTapped: ()=>{
				console.log(`msg1 onTapped`)
			},
			onShow: ()=>{
				console.log(`msg1 onShow`)
			},
			onHide: ()=>{
				console.log(`msg1 onHide`)
			},
			stylesheetInfo: {
				backgroundColor: '#007bff', strokeColor: '#006acd' 
			},
			avatarStyle: {
				width: 24,
				height: 24
			},
			viewTopOffset: distancesCons.STATUS_BAR_HEIGHT,
			viewBottomOffset: distancesCons.TAB_BOTTOM_HEIGHT,
			viewLeftOffset: 0,
			// viewTopInset: 20,
			animationType: 'SlideFromLeft',
			position: 'top'
		})
	}

	_showMessage2(){
		MessageBarManager.showAlert({
			title: 'Your alert title goes here',
  		message: 'Your alert message goes here',
			alertType: 'error',
			avatar: require('../../sources/images/tabbar/tab_home_sel.png'),
			duration: 2000,
			shouldHideAfterDelay: false
		})
	}

	_hideMessage(){
		MessageBarManager.hideAlert()
	}

	render(){
		return(
			<SafeView >
				<View style={styles.container}>
					<Button title="showMessage" onPress={this._showMessage}/>
					<Button title="showMessage2" onPress={this._showMessage2}/>
					<Button title="hideMessage" onPress={this._hideMessage}/>
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
		backgroundColor: '#708090'
	}
})