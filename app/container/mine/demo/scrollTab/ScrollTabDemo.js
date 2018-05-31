
/**
 * create at 05/30/18
 */

import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, Button } from 'react-native'
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view'

// components
import { reactPage, FlowPage, jestPage } from './components/common'
import { Actions } from 'react-native-router-flux';

class ScrollDemo extends Component{
	constructor(props){
		super(props)

		// data
		this.state = {
			pageKey:  3  // demo 切换界面 
		}
		this.tabs = [
			{code: 'react', name: 'React'}, 
			{code: 'flow', name: 'Flow'},
			{code: 'jest', name: 'Jest'}
		]

		// UI
		this._getScrollRender = this._getScrollRender.bind(this)
		this._getTabRender = this._getTabRender.bind(this)

		// click
		this._topBtnClick = this._topBtnClick.bind(this)
		this._onChangeTab = this._onChangeTab.bind(this)
		this._onScroll = this._onScroll.bind(this)
	}

	_topBtnClick(){
		const {pageKey} = this.state

		this.setState({
			pageKey: 1 > 0
		})

		this.setState({
			pageKey: pageKey == 3 ? 0 : pageKey+1
		})
	}

	_onChangeTab({i, ref}){
		// console.log('_onChangeTab i=>', i, ' ref=>', ref)
	}

	_onScroll(numFloat){
		// 只 tab page 滚动
		// console.log('_onScroll numFloat=>', numFloat)
	}

	_getScrollRender(){
		const {pageKey} = this.state
		switch(pageKey){
			case 0: {
				return(
					<ScrollableTabView>
						{reactPage({tabLabel: 'React'})}
						<FlowPage tabLabel="Flow"/>
						{jestPage({tabLabel: 'Jest'})}
					</ScrollableTabView>
				)
			}
			case 1: {
				return (
					<ScrollableTabView 
						style={styles.scrollTab} initialPage={1}
						renderTabBar={()=> <DefaultTabBar />}
					>
						{reactPage({tabLabel: 'React'})}
						<FlowPage tabLabel="Flow"/>
						{jestPage({tabLabel: 'Jest'})}
					</ScrollableTabView>
				)
			}
			case 2: {
				return (
					<ScrollableTabView 
						style={styles.scrollTab} initialPage={0}
						renderTabBar={()=> <ScrollableTabBar />}
					>
						{reactPage({tabLabel: 'React'})}
						<FlowPage tabLabel="Flow"/>
						{jestPage({tabLabel: 'Jest'})}
						<FlowPage tabLabel="Flow2"/>
						<FlowPage tabLabel="Flow3"/>
					</ScrollableTabView>
				)
			}
			case 3: {
				return (
					<ScrollableTabView 
						style={styles.scrollTab}
						renderTabBar={()=> <DefaultTabBar style={styles.defaultTabBar}/>}
						tabBarPosition='top'
						onChangeTab={this._onChangeTab}
						onScroll={this._onScroll}
						locked={true}
						initialPage={0}
						// page={2}
						tabBarUnderlineStyle={{backgroundColor: '#333', height: 2}}
						tabBarBackgroundColor='black' // DefaultTabBar 组件 style 会遮盖这个属性
						tabBarActiveTextColor='blue'
						tabBarInactiveTextColor='gray'
						tabBarTextStyle={{fontSize: 15}} // 设置 color 会遮盖 tabBarActiveTextColor / tabBarInactiveTextColor
						scrollWithoutAnimation={false}
					>
						{this._getTabRender()}
					</ScrollableTabView>
				)
			}
			default:
				return null
		}
	}

	_getTabRender(){
		const {tabs = []} = this
		return tabs.map((item, idx)=>{
			switch(item.code){
				case 'react': {
					return (
						<View key={item.code} tabLabel={item.name} style={styles.tabItemView}>
							{reactPage()}
						</View>
					)
				}
				case 'flow': {
					return (
						<View key={item.code} tabLabel={item.name} style={styles.tabItemView}>
							<FlowPage />
						</View>
					)
				}
				case 'jest': {
					return (
						<View key={item.code} tabLabel={item.name} style={styles.tabItemView}>
							{jestPage()}
						</View>
					)
				}
				default:
					return <View key='default' tabLabel='' style={styles.tabItemView}/>
			}
		})
	}

	render(){
		const curRender = this._getScrollRender()
		return (
			<View style={styles.container}>
				<View style={styles.topChangeView}>
					<Text >default demo</Text>
					<Text >current page have baseExample, simpleExample, scrollableExample and props test.</Text>
					<Button title='pageChange' onPress={this._topBtnClick}/>
					<Button title='overExample' onPress={Actions.overScrollTab}/>
					<Button title='facebookExample' onPress={Actions.faceScrollTab}/>
				</View>
				<View style={styles.scrollView}>
					{curRender}
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	topChangeView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	scrollView: {
		flex: 2,
	},
	scrollTab: {
		flex: 1
	},
	defaultTabBar: {
		backgroundColor: '#ddd'
	},
	tabItemView: {
		flex: 1
	}
})

export default ScrollDemo