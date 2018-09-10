
import React, { Component } from 'react'
import {Image, StyleSheet} from 'react-native'
import TabNavigator from 'react-native-tab-navigator'
import { Actions } from 'react-native-router-flux'

// components
import { SafeView } from '../components'
// container
import MineContainer from './mine/MineContainer'
import HomeContainer from './home/HomeContainer'
import WorkContainer from './work/WorkContainer'

// constants
import {colorsCons, styleCons} from '../constants'

// const
const HOME = 'tab_home'
const WORK = 'tab_work'
const MINE = 'tab_mine'

const HOME_NOR_ICON = require('../sources/images/tabbar/tab_home_nor.png')
const HOME_SEL_ICON = require('../sources/images/tabbar/tab_home_sel.png')
const WORK_NOR_ICON = require('../sources/images/tabbar/tab_work_nor.png')
const WORK_SEL_ICON = require('../sources/images/tabbar/tab_work_sel.png')
const MINE_NOR_ICON = require('../sources/images/tabbar/tab_mine_nor.png')
const MINE_SEL_ICON = require('../sources/images/tabbar/tab_mine_sel.png')

const RIGHT_BAR_ICON = require('../sources/images/common/navbar_mores.png')

class CurrentPage extends Component{
	state = {
		selectedTab: HOME
	}

	componentWillMount(){
		Actions.refresh({
			title: 'home',
			onRight: this._homeRightPress,
			rightButtonImage: RIGHT_BAR_ICON,
			rightButtonStyle: styleCons.navStyle.rightBarButton
		})
	}

	_tabClick = (tab)=> {
		switch(tab){
			case HOME:
				{
					Actions.refresh({
						title: 'home',
						onRight: this._homeRightPress,
						rightButtonImage: RIGHT_BAR_ICON,
						rightButtonStyle: styleCons.navStyle.rightBarButton
					})
				}
				break
			case WORK:
				{
					Actions.refresh({
						title: 'work',
						onRight: this._workRightPress,
						rightButtonImage: RIGHT_BAR_ICON,
						rightButtonStyle: styleCons.navStyle.rightBarButton,
					})
				}
				break;
			case MINE:
				{
					Actions.refresh({
						title: 'mine',
						rightButtonImage: '',
					})
				}
				break
		}	

		this.setState({
			selectedTab: tab
		})
	}

	_homeRightPress = (props)=>{
		console.log('_homeRightPress props=>', props)
	}
	_workRightPress = (props)=>{
		console.log('_workRightPress props=>', props)
	}

	_homeRightBack = ()=>{

	}

	render(){
		return(
			<SafeView >
				<TabNavigator>
					<TabNavigator.Item 
						selected={this.state.selectedTab === HOME}
						title="首页"
						titleStyle={styles.tabText}
						selectedTitleStyle={styles.selTabText}
						renderIcon={()=> <Image source={HOME_NOR_ICON}/>}
						renderSelectedIcon={()=> <Image source={HOME_SEL_ICON}/>}
						onPress={()=> this._tabClick(HOME)}
					>
						<HomeContainer rightBack={this._homeRightBack}/>
					</TabNavigator.Item>
					<TabNavigator.Item 
						selected={this.state.selectedTab === WORK}
						title="工作"
						titleStyle={styles.tabText}
						selectedTitleStyle={styles.selTabText}
						renderIcon={()=> <Image source={WORK_NOR_ICON}/>}
						renderSelectedIcon={()=> <Image source={WORK_SEL_ICON}/>}
						onPress={()=> this._tabClick(WORK)}
					>
						<WorkContainer />
					</TabNavigator.Item>
					<TabNavigator.Item 
						selected={this.state.selectedTab === MINE}
						title="我的"
						titleStyle={styles.tabText}
						selectedTitleStyle={styles.selTabText}
						renderIcon={()=> <Image source={MINE_NOR_ICON}/>}
						renderSelectedIcon={()=> <Image source={MINE_SEL_ICON}/>}
						onPress={()=> this._tabClick(MINE)}
					>
						<MineContainer />
					</TabNavigator.Item>
				</TabNavigator>
			</SafeView>
		)
	}
}

const styles = StyleSheet.create({
	tabText: {
		fontSize: 10,
		color: colorsCons.TABBAR_NOR_COLOR,
		marginBottom: 5
	},
	selTabText: {
		fontSize: 10,
		color: colorsCons.TABBAR_SEL_COLOR,
		marginBottom: 5
	}
})

export default CurrentPage