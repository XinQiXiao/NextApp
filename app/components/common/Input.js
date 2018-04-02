
import React, { Component } from 'react'
import {
	View, Text, Image, StyleSheet, TouchableHighlight, ViewPropTypes, TextInput, Platform
} from 'react-native'
import PropTypes from 'prop-types'

import { colorsCons } from '../../constants'

class InputComponent extends Component{
	constructor(props){
		super(props)

		this._searchChange = this._searchChange.bind(this)
	}

	_searchChange(val){

	}

	render(){
		return null
	}
}

InputComponent.propTypes = {

}

InputComponent.defaultProps = {

}

const styles = StyleSheet.create({

})

export default InputComponent