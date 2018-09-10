/**
 * create at 01/18/18
 * 参考: https://github.com/react-community/react-native-safe-area-view
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {StyleSheet, SafeAreaView} from 'react-native'

class SafeView extends Component{
	render(){
		const {style, children, forceInset} = this.props
		return (
			<SafeAreaView style={[styles.safeView, style]} 
				forceInset={[{horizontal: 'never'}, forceInset]}>
				{children}
			</SafeAreaView>
		)
	}
}

SafeView.propTypes = {
	children: PropTypes.any,
	style: PropTypes.any,
	forceInset: PropTypes.object,
}

const styles = StyleSheet.create({
	safeView: {
		flex: 1
	}
})

export default SafeView