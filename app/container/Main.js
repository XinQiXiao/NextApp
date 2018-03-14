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
// login
import LoginContainer from './login/LoginContainer'
// home
import HomeContainer from './home/HomeContainer'
import MessageBarTest from './home/MessageBarTest'
// work
import WorkContainer from './work/WorkContainer'
import TestContainer from './work/TestContainer'
// mine
import MineContainer from './mine/MineContainer'
import DemoContainer from './mine/DemoContainer'

const reducerCreate = params => {
	const defaultReducer = new Reducer(params)
	return (state, action)=>{
		console.log('ACTION:', action)
		return defaultReducer(state, action)
	}
}

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
								<Scene key="home" initial back={false} component={HomeContainer}
								 title="home" 
								/>
								<Scene key="mine" component={MineContainer}
								 title="mine" 
								/>
								<Scene key="demo" component={DemoContainer}
								 title="demo" 
								/>
								<Scene key="work" component={WorkContainer}
								 title="work" 
								/>
								<Scene key="test"  component={TestContainer}
								 title="test" 
								/>
								<Scene key="messageBarTest" component={MessageBarTest}  
									title="Message Bar Test"
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