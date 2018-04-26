/**
 * 
 */
import React, { Component } from 'react'
import {View, Text, ToastAndroid, Platform } from 'react-native'
import { 
	Router, Overlay, Reducer, Modal, Scene, Lightbox, Stack, Actions, ActionConst
} from 'react-native-router-flux'
import TimerMixin from 'react-timer-mixin'
import _ from 'lodash'

// components
import { DemoLightBox, ErrorModal, MessageBar } from '../components'

// containers
import TabBarContainer from './TabbarContainer'
// login
import LoginContainer from './login/LoginContainer'
import StartContainer from './login/StartContainer'
/// home
import HomeContainer from './home/HomeContainer'
import MessageBarTest from './home/MessageBarTest'

/// work
// contract
import ContractOptions from './work/pages/ContractOptionsContainer'
import TestContainer from './work/TestContainer'
/// mine
import DemoContainer from './mine/DemoContainer'
import UseSystemContainer from './mine/demo/navBar/UseSystemContainer'
import UseCustomContainer from './mine/demo/navBar/UseCustomContainer'

// style 
import {colorsCons, styleCons} from '../constants'


/// const 

const { navStyle } = styleCons

const reducerCreate = params => {
	const defaultReducer = new Reducer(params)
	return (state, action)=>{
		// console.log('ACTION:', action)
		return defaultReducer(state, action)
	}
}

const backIcon = require('../sources/images/common/back_white.png')
const rightIconMore = require('../sources/images/common/navbar_mores.png')

const getSceneStyle = ()=>({
	backgroundColor: '#FFF',
	shadowOpacity: 1,
	shadowRadius: 3,
})

// TODO wait for test
const prefix = Platform.OS === 'android' ? '' : 'mychat://'

export default class extends Component{
	constructor(props){
		super(props)

		this.exit = false
		this.mixin = TimerMixin

		this._onExitApp = this._onExitApp.bind(this)
	}

	_onExitApp(){
		if(Actions.currentScene !== 'main'){
			Actions.pop()
			return true
		}
		if(this.exit){
			return false
		}else {
			this.exit = true
			this.mixin.setTimeout(() => {
				this.exit = false
			}, 5 * 1000)
			ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT)
			return true
		}
	}

	render(){
		return (
			<Router createReducer={reducerCreate} getSceneStyle={getSceneStyle}
				uriPrefix={prefix} backAndroidHandler={this._onExitApp}
			>
				<Overlay key="overlay">
					<Modal key="modal" hideNavBar>
						<Lightbox key="lightbox" hideNavBar>
							<Stack key="init" back>
								<Scene key="start" hideNavBar component={StartContainer}/>
								<Scene key="login2" hideNavBar component={LoginContainer} title="登录"/>
								<Scene key="main" initial back={false} component={TabBarContainer} 
									hideNavBar={false} navigationBarStyle={navStyle.navBar} 
									titleStyle={navStyle.navTitle} 
								/>
								<Scene key="demo" component={DemoContainer} title="demo" backButtonImage={backIcon}
									navigationBarStyle={navStyle.navBar} titleStyle={navStyle.navTitle}
									leftButtonIconStyle={navStyle.leftBarIcon} leftButtonStyle={navStyle.backButton}
									rightTitle='right' onRight={(state)=>{}}
								/>
								<Scene key="test"  component={TestContainer}
								 	title="test" 
								/>
								<Scene key="messageBarTest" component={MessageBarTest}  
									title="Message Bar Test"
								/>
								{/* ---Work--- */}
								{/* ---Contract--- */}
								<Scene key="contractOptions" component={ContractOptions} title="contract" hideNavBar={false}/>
								{/* ---Mine--- */}
								{/* ---Demo--- */}
								<Scene key="navUseSystem" component={UseSystemContainer} title="SystemNav" 
									navigationBarStyle={navStyle.navBar} titleStyle={navStyle.navTitle}
									leftButtonIconStyle={navStyle.leftBarIcon} leftButtonStyle={navStyle.backButton} 
									backButtonImage={backIcon} /*rightButtonImage={rightIconMore}*/
									onRight={(state)=>{}}
									rightTitle='' rightButtonTextStyle={navStyle.rightTitle}
									rightChangeBack={(showRight)=>{
										if(showRight){
											Actions.refresh({rightTitle: 'right'})
										} else {
											Actions.refresh({rightTitle: ''})
										}
									}}
								/>
								<Scene key="navUseCustom" component={UseCustomContainer} hideNavBar={false}
									navigationBarStyle={navStyle.navBar} titleStyle={navStyle.navTitle}
									leftButtonIconStyle={navStyle.leftBarIcon} leftButtonStyle={navStyle.backButton} 
									backButtonImage={backIcon} title='CustomNav'
									rightButtonImage={rightIconMore} onRight={(state)=>{}}
									rightButtonStyle={navStyle.rightBarButton}
								/>
							</Stack>
							<Scene key="demoLightBox" component={DemoLightBox}/>
						</Lightbox>
						<Scene key="errorModal" component={ErrorModal}/>
						<Stack key="loginStack" hideNavBar >
							<Scene key="login" component={LoginContainer} title="登录"/>
						</Stack>
					</Modal>
					<Scene component={MessageBar}/>
				</Overlay>
			</Router>
		)
	}
}