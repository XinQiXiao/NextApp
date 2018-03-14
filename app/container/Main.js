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
// containers
// home
import HomeContainer from './home/HomeContainer'
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
								>
								</Scene>
								<Scene key="mine" back={false} component={MineContainer}
								 title="home" 
								>
								</Scene>
								<Scene key="demo" back={false} component={DemoContainer}
								 title="home" 
								>
								</Scene>
								<Scene key="work" back={false} component={WorkContainer}
								 title="home" 
								>
								</Scene>
								<Scene key="test" back={false} component={TestContainer}
								 title="home" 
								>
								</Scene>
							</Stack>
						</Lightbox>
					</Modal>
				</Overlay>
			</Router>
		)
	}
}