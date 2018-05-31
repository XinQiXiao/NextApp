/**
 * create at 05/31/18
 */

import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, Button } from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'

// components
import { TextTabBar, SafeView } from '../../../../components'
import { FlowPage } from './components/common'

// style
import {distancesCons, colorsCons} from '../../../../constants'

class TabContainer extends Component{
	constructor(props){
		super(props)

		// data
		this.tabs = [
			{code: 'react', name: 'React'}, 
			{code: 'flow', name: 'Flow'},
			{code: 'jest', name: 'Jest'}
		]

		// UI
		this._getTabRender = this._getTabRender.bind(this)
	}

	_getTabRender(){
		const {tabs = []} = this
		return tabs.map((item, idx)=>{
			return <FlowPage key={idx}/>
		})
	}

	render(){
		return (
			<SafeView >
				<ScrollableTabView 
					renderTabBar={()=> 
						<TextTabBar 
							tabArr={this.tabs}
							containerStyle={styles.tabContainer}
							itemStyle={styles.tabItem}
							textStyle={styles.tabItemText}
							activeTextColor='#73b1fa'
							inactiveTextColor='#666'
							underlineHeight={distancesCons.BORDER_WIDTH}
							underlineColor={colorsCons.CUSTOM_BULE_COLOR}
						/>
					}
				>
					{this._getTabRender()}
				</ScrollableTabView>
			</SafeView>
		)
	}
}

const styles = StyleSheet.create({
	tabContainer: {
		height: 44,
		backgroundColor: '#fff',
		borderColor: colorsCons.BORDER_COLOR,
		borderBottomWidth: distancesCons.BORDER_WIDTH
	},
	tabItem: {
		flex: 1, 
		justifyContent: 'center', 
		alignItems: 'center'
	},
	tabItemText: {
		fontSize: 13
	}
})

export default TabContainer