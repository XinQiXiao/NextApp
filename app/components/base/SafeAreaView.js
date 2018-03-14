/**
 * create at 01/18/18
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {View, Text, Image, StyleSheet, SafeAreaView} from 'react-native'

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
	style: PropTypes.object,
	forceInset: PropTypes.object,
}

const styles = StyleSheet.create({
	safeView: {
		flex: 1
	}
})

export default SafeView