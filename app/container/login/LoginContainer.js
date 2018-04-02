
import React, { Component } from 'react'
import {View, Text, Image, StyleSheet, Button} from 'react-native'
import {Actions} from 'react-native-router-flux'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

// components
import { SafeView, ButtonCollection } from '../../components'
import { TopComponent, RemindTop, RemindBottom } from './components/common'

// style
import { colorsCons } from '../../constants'

// 组件 二级解析
const { CustomButton } = ButtonCollection

const mapStateToProps = state => ({
	loading: state.login.loading
})

const mapDispatchToProps = (dispatch) => ({
	myactions: bindActionCreators({}, dispatch),
	dispatch,
})

class CurrentPage extends Component{
	constructor(props){
		super(props)

		// click
		this._loginClick = this._loginClick.bind(this)
	}

	_loginClick(e){
		Actions.main()
	}

	render(){
		return(
			<SafeView >
				<View style={styles.container}>
					<KeyboardAwareScrollView >
						<View style={styles.contentPage}>
							<TopComponent version="0.0.1"/>
							<View style={{marginTop: 80}}>
								<RemindTop />
								<CustomButton bgTouchStyle={styles.loginBtnBg} textStyle={styles.loginBtnText}
									buttonPress={this._loginClick} textContent='登录'
								/>
								<RemindBottom />
							</View>
						</View>
					</KeyboardAwareScrollView>
				</View>
			</SafeView>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1, 
		backgroundColor: colorsCons.PAGE_BG_COLOR,
	},
	contentPage: {
		marginLeft: 75/2,
		marginRight: 75/2,
		marginTop: 110
	},
	loginBtnBg: {
		marginTop: 80,
		height: 76/2,
		backgroundColor: colorsCons.CUSTOM_BULE_COLOR,
		borderRadius: 3,
		justifyContent: 'center',
		alignItems: 'center'
	},
	loginBtnText: {
		fontSize: 16,
		color: '#fff'
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(CurrentPage)