/**
 * 
 */

import React, { Component } from 'react'
import {View, Text, Image, StyleSheet, Button, Alert} from 'react-native'
import { Actions } from 'react-native-router-flux'
import codePush from 'react-native-code-push'

class PageContainer extends Component{
	constructor(props){
		super(props)
	}

	componentWillMount(){
		this._checkJsUpdate()
	}

	async _checkJsUpdate(){
		try{
			const update = await codePush.checkForUpdate()
			console.log('_checkJsUpdate update===>', update)
			if(update){
				//默认方式，默认不弹出提示框，静默安装
				codePush.sync() 
				// codePush.sync({
				// 	updateDialog: {
				// 		title: '版本升级提示',  //要显示的更新通知的标题. Defaults to “Update available”.,
				// 		appendReleaseDescription: true,     //是否显示更新description，默认为false
				// 		mandatoryUpdateMessage: "有新版本了，请立即更新。",      //- 强制更新时，更新通知. Defaults to “An update is available that must be installed.”.
				// 		descriptionPrefix: "\n\n",   //更新说明的前缀。 默认是” Description:
				// 		mandatoryContinueButtonLabel: "立即更新",   //强制更新的按钮文字，默认为continue
				// 		optionalUpdateMessage: '有新版本了，是否更新？',   //非强制更新时，更新通知. Defaults to “An update is available. Would you like to install it?”.,
				// 		optionalIgnoreButtonLabel: '稍后',            //非强制更新时，取消按钮文字,默认是ignore
				// 		optionalInstallButtonLabel: '后台更新', //非强制更新时，确认文字. Defaults to “Install”
				// 	},
				// 	installMode: codePush.InstallMode.IMMEDIATE
				// })
			} else {
				// Alert.alert('codePush tip', 'having the last.')
				console.log('codePush tip having the last.')
			}
		}catch(e){
			let msg = e ? (e.message ? e.message : '错误未知') : 'e not find'
			// Alert.alert(
			// 	'codePush err tip',
			// 	msg,
			// )
			console.log('codePush err tip, message==>', msg)
		}
	}

	render(){
		return (
			<View style={styles.container}>
				<Text>Start Page.</Text>
				<Button title="Main" onPress={Actions.main}/>
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

export default PageContainer