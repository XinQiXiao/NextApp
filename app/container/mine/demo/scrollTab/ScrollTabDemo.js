
/**
 * create at 05/30/18
 */

import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, Button } from 'react-native'
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view'

// components
import { reactPage, FlowPage, jestPage } from './components/common'

class ScrollDemo extends Component{
	constructor(props){
		super(props)

		// data
		this.state = {
			pageKey:  0  // demo 切换界面 
		}

		// UI
		this._getScrollRender = this._getScrollRender.bind(this)

		// click
		this._pageChange = this._pageChange.bind(this)
	}

	_pageChange(){
		const {pageKey} = this.state

		this.setState({
			pageKey: 1 > 0
		})

		this.setState({
			pageKey: pageKey == 2 ? 0 : pageKey+1
		})
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
			default:
				return null
		}
	}

	render(){
		const curRender = this._getScrollRender()
		return (
			<View style={styles.container}>
				<View style={styles.topChangeView}>
					<Button title='pageChange' onPress={this._pageChange}/>
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
		flex: 4,
		backgroundColor: 'gray'
	},
	scrollTab: {
		marginTop: 20
	}
})

export default ScrollDemo