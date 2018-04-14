
import React, { Component } from 'react'
import {
	View, Text, Image, StyleSheet, TouchableHighlight, ViewPropTypes, TextInput, Platform
} from 'react-native'
import PropTypes from 'prop-types'

import { colorsCons } from '../../constants'

class InputComponent extends Component{
	constructor(props){
		super(props)

		this._onChange = this._onChange.bind(this)
		this._onSubmitEditing = this._onSubmitEditing.bind(this)
	}

	_onChange(val){
		this.props.inputOnChange(val)
	}

	_onSubmitEditing(){

	}

	render(){
		const {
			inputStyle, placeText, placeTextColor, returnKeyType, autoFocus, secureTextEntry, valueText, searchSubmit 
		} = this.props
    if(Platform.OS === 'ios') {
      return (
				<TextInput style={[styles.defaultInputStyle, inputStyle]}
					placeholder={placeText}
					placeholderTextColor={placeTextColor}
					onChange={(event) => {
						this._onChange(event.nativeEvent.text)
					}}
					returnKeyType={returnKeyType}
					autoFocus={autoFocus}
					secureTextEntry={secureTextEntry}
					value={ valueText }
					onSubmitEditing={searchSubmit}
					clearButtonMode="while-editing"
				/>
			)
    }
    return (
      <View style={{flex: 1, flexDirection:'row'}}>
        <TextInput style={[
          	styles.androidInputView,
						styles.defaultInputStyle, 
						inputStyle
          ]}
          underlineColorAndroid = {'transparent'}
          placeholder={placeText}
          placeholderTextColor={placeTextColor}
          onChange={(event) => {
            this._onChange(event.nativeEvent.text)
          }}
          onBlur ={ () => {
            null
          } }
          blurOnSubmit={false}
          autoFocus={autoFocus}
					secureTextEntry={secureTextEntry}
          value={valueText}
          returnKeyType={returnKeyType}
          onSubmitEditing={searchSubmit}
					clearButtonMode="while-editing"
				/>
      </View>
    )
	}
}

InputComponent.propTypes = {
	inputStyle: ViewPropTypes.style,
	placeText: PropTypes.string,
	placeTextColor: PropTypes.string,
	inputOnChange: PropTypes.func,
	returnKeyType: PropTypes.string,
	autoFocus: PropTypes.bool,
	secureTextEntry: PropTypes.bool,
	valueText: PropTypes.string,
}

InputComponent.defaultProps = {
	inputStyle: null,
	placeText: 'type content',
	placeTextColor: '#ccc',
	inputOnChange: ()=> null,
	returnKeyType: 'done',
	autoFocus: false,
	secureTextEntry: false,
	valueText: ''
}

const styles = StyleSheet.create({
	defaultInputStyle: {
		flex: 1,
    fontSize: 14,
    color: '#333',
		marginLeft: 6,
	},
	androidInputView: {
		paddingTop:	0, 
		paddingBottom: 0, 
		backgroundColor: 'transparent'
	}
})

export default InputComponent