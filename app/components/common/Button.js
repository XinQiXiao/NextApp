
import React, { Component } from 'react'
import {View, Text, Image, StyleSheet, TouchableHighlight, ViewPropTypes} from 'react-native'
import PropTypes from 'prop-types'

import { colorsCons } from '../../constants'

/**
 * 自定义 button (text, backgroundColor)
 */

class CustomButton extends Component{
	render(){
		const {buttonPress, bgTouchStyle, textStyle, textContent} = this.props
		return(
			<TouchableHighlight onPress={buttonPress} 
				style={[styles.customButtonbg, bgTouchStyle]} underlayColor={colorsCons.TOUCH_BG_COLOR}
			>
				<Text style={[styles.customButtonText, textStyle]}>{textContent}</Text>
			</TouchableHighlight>
		)
	}
}

CustomButton.propTypes = {
	buttonPress: PropTypes.func,
	bgTouchStyle: ViewPropTypes.style,
	textStyle: Text.propTypes.style,
	textContent: PropTypes.string
}

CustomButton.defaultProps = {
	buttonPress: ()=>{},
	bgTouchStyle: null,
	textStyle: null,
	textContent: 'Custom'
}

const styles = StyleSheet.create({
	customButtonbg: {
		height: 40,
		backgroundColor: colorsCons.CUSTOM_BULE_COLOR,
		borderRadius: 3,
		justifyContent: 'center',
		alignItems: 'center'
	},
	customButtonText: {
		fontSize: 16,
		color: '#fff'
	}
})


module.exports = {
	CustomButton
}