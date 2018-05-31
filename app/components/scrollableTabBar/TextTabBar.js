/**
 * create at 05/31/18
 */

import React, { Component } from 'react'
import { View, Text, StyleSheet, Animated, Image } from 'react-native'
import PropTypes from 'prop-types'

// components
import CusBtn from './button/Button'

// style
import {distancesCons} from '../../constants'

class TextTabBar extends Component{
	constructor(props){
		super(props)

		// UI
		this._renderTabOption = this._renderTabOption.bind(this)
	}

	_renderTabOption() {
		const { 
			tabArr, activeTab, activeTextColor, inactiveTextColor, textStyle, itemStyle,
		} = this.props

		return tabArr.map((tab, page) => {

				const isTabActive = activeTab === page;
				const textColor = isTabActive ? activeTextColor : inactiveTextColor;
				const fontWeight = isTabActive ? 'bold' : 'normal';

				return (
						<CusBtn
							style={{flex: 1}}
							key={page}
							accessible={true}
							accessibilityLabel={tab.name}
							accessibilityTraits='button'
							onPress={()=> this._btnClick(tab, page)}
						>
							<View style={[itemStyle, {flexDirection: 'row'}]}>
								<Text style={[styles.tabItemText, {color: textColor, fontWeight}, textStyle]}>
									{tab.name}
								</Text>
							</View>
						</CusBtn>
				)
		})
	}

	_btnClick(tab, page){
		this.props.goToPage(page)
	}

	render(){
		const { 
			containerWidth, tabArr, underlineHeight, underlineColor, containerStyle, scrollValue 
		} = this.props
		const numberOfTabs = tabArr.length
		const tabUnderlineStyle = {
			position: 'absolute',
			width: containerWidth / numberOfTabs,
			height: underlineHeight,
			backgroundColor: underlineColor,
			bottom: 0,
		}

		const translateX = scrollValue.interpolate({
			inputRange: [0, 1], outputRange: [0, containerWidth / numberOfTabs],
		});

		return (
			<View style={[{flexDirection: 'row'}, containerStyle]}>
				{this._renderTabOption()}
				<Animated.View style={[
					tabUnderlineStyle,
					{
						transform: [
							{translateX},
						]
					}
				]}/>
			</View>
		)
	}
}

TextTabBar.propTypes = {
	tabArr: PropTypes.array,
	activeTab: PropTypes.number,
	activeTextColor: PropTypes.string,
	inactiveTextColor: PropTypes.string,
	textStyle: Text.propTypes.style,
	itemStyle: View.propTypes.style,
	goToPage: PropTypes.func,
	containerWidth: PropTypes.number,
	underlineHeight: PropTypes.number,
	underlineColor: PropTypes.string,
	containerStyle: View.propTypes.style
}

TextTabBar.defaultProps = {
	tabArr: [],
	activeTab: 0,
	activeTextColor: '#0f0',
	inactiveTextColor: '#666',
	textStyle: null,
	itemStyle: null,
	goToPage: ()=> null,
	containerWidth: distancesCons.DEVEICE_WIDTH,
	underlineHeight: 2,
	underlineColor: '#0f0',
	containerStyle: null,
}

const styles = StyleSheet.create({
	tabItemText: {
		flex: 1, 
		textAlign: 'center'
	}
})

export default TextTabBar