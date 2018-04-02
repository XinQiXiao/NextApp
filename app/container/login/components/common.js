/**
 * 
 */
import React, { Component } from 'react'
import { View, Text, TouchableHighlight, Image, StyleSheet } from 'react-native'

// style
import { colorsCons, distancesCons } from '../../../constants'

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


const styles = StyleSheet.create({
	remindTopContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start'
	}
})