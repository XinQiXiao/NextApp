
import React, { Component } from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'
import TabNavigator from 'react-native-tab-navigator'

// components
import { SafeView } from '../components'
// container
import MineContainer from './mine/MineContainer'
import HomeContainer from './home/HomeContainer'
import WorkContainer from './work/WorkContainer'

// constants
import {distancesCons, colorsCons} from '../constants'

// const
const HOME = 'tab_home'
const WORK = 'tab_work'
const MINE = 'tab_mine'


export default class CurrentPage extends Component{
	constructor(props){
		super(props)

		this.state = {
			selectedTab: HOME
		}
	}

	_tabClick(tab){
		this.setState({
			selectedTab: tab
		})
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
						renderIcon={()=> <Image source={require('../sources/images/tabbar/tab_home_nor.png')}/>}
						renderSelectedIcon={()=> <Image source={require('../sources/images/tabbar/tab_home_sel.png')}/>}
						onPress={()=> this._tabClick(HOME)}
					>
						<HomeContainer />
					</TabNavigator.Item>
					<TabNavigator.Item 
						selected={this.state.selectedTab === WORK}
						title="工作"
						titleStyle={styles.tabText}
						selectedTitleStyle={styles.selTabText}
						renderIcon={()=> <Image source={require('../sources/images/tabbar/tab_work_nor.png')}/>}
						renderSelectedIcon={()=> <Image source={require('../sources/images/tabbar/tab_work_sel.png')}/>}
						onPress={()=> this._tabClick(WORK)}
					>
						<WorkContainer />
					</TabNavigator.Item>
					<TabNavigator.Item 
						selected={this.state.selectedTab === MINE}
						title="我的"
						titleStyle={styles.tabText}
						selectedTitleStyle={styles.selTabText}
						renderIcon={()=> <Image source={require('../sources/images/tabbar/tab_mine_nor.png')}/>}
						renderSelectedIcon={()=> <Image source={require('../sources/images/tabbar/tab_mine_sel.png')}/>}
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