/**
 * 
 */
import React, { Component } from 'react'
import { View, Text, TouchableHighlight, Image, StyleSheet } from 'react-native'

// components
import { InputComponent } from '../../../components'

// style
import { colorsCons, distancesCons } from '../../../constants'

// const
const EYE_ICON_OPEN = require('../../../sources/images/login/eye_open.png')
const EYE_ICON_CLOSE = require('../../../sources/images/login/eye_close.png')

/**
 * login  top view
 */
export class TopComponent extends Component{
	render(){
		const { version = '' } = this.props
		return (
			<View style={{alignItems: 'center', alignSelf: 'center'}}>
				<View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
					<Image source={require('../../../sources/images/login/start_logo.png')}/>
					<Text style={{marginLeft: 10, color: '#888', fontSize: 14}}>{version ? version : ''}</Text>
				</View>
				<Text style={{marginTop: 20, color: '#888', fontSize: 16}}>{'产品描述'}</Text>
			</View>
		)
	}
}

/**
 * account 说明
 */
export class RemindTop extends Component{
	render(){
		return (
			<View style={styles.remindTopContainer}>
				<Text style={{color: '#666', fontSize: 16}}>{'账号说明'}</Text>
			</View>
		)
	}
}

/**
 * 输入框下部提示
 */
export class RemindBottom extends Component{
  render(){
    return (
      <Text style={{marginTop: 15, color: '#999', fontSize: 12}}>
        {'忘记密码说明'}
      </Text>
    )
  }
}

/**
 * 账号和密码输入框
 */
export class CommonInput extends Component{
	render(){
		const {
			style, returnKeyType, secureTextEntry,
			placeText, valueText,
			inputOnChange, searchSubmit,
			showEye, eyePress, eyeOpen,
		} = this.props
		return (
			<View style={[styles.inputContainer, style]}>
				<InputComponent placeText={placeText} valueText={valueText}
					returnKeyType={returnKeyType} secureTextEntry={secureTextEntry}
					inputOnChange={inputOnChange} searchSubmit={searchSubmit}
				/>
				<EyeButton showEye={showEye} eyePress={eyePress} eyeOpen={eyeOpen}/>
			</View>
		)
	}
}

/**
 * 控制 密码 显示隐藏 eye
 */
class EyeButton extends Component{
	render(){
		const {
			 showEye = false, eyePress = ()=>null, eyeOpen = false,
		} = this.props
		if(!showEye){
			return null
		}
		return (
			<TouchableHighlight onPress={eyePress} style={styles.eyeTouch}
				underlayColor={colorsCons.TOUCH_BG_COLOR}
			>
				<Image style={styles.eyeImg} source={eyeOpen ? EYE_ICON_OPEN : EYE_ICON_CLOSE}/>
			</TouchableHighlight>
		)
	}
}

const styles = StyleSheet.create({
	remindTopContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start'
	},
	inputContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		height: 38,
		borderColor: colorsCons.BORDER_COLOR,
		borderWidth: distancesCons.BORDER_WIDTH,
		borderRadius: 3,
	},
	eyeTouch: {
		justifyContent: 'center'
	},
	eyeImg: {
		marginRight: 10
	}
})