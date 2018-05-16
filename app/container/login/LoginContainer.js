
import React, { Component } from 'react'
import {View, Text, Image, StyleSheet, Button} from 'react-native'
import {Actions} from 'react-native-router-flux'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

// components
import { SafeView, ButtonCollection } from '../../components'
import { TopComponent, RemindTop, RemindBottom, CommonInput } from './components/common'

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

		// data
		this.state = {
			account: '',
			password: '',
			showPassword: false,
		}
		// click
		this._loginClick = this._loginClick.bind(this)
		this._accountChange = this._accountChange.bind(this)
		this._passwordChange = this._passwordChange.bind(this)
		this._passwordEyeClick = this._passwordEyeClick.bind(this)
	}

	_loginClick(e){
		const {fromPath = ''} = this.props
		if(fromPath === 'start'){
			Actions.replace('main', {})
			return
		}
		Actions.pop()
	}

	_accountChange(val){
		this.setState({
			account: val
		})
	}

	_passwordChange(val){
		this.setState({
			password: val
		})
	}
	_passwordEyeClick(){
		this.setState({
			showPassword: !this.state.showPassword
		})
	}

	render(){
		const {account, password, showPassword} = this.state
		return(
			<SafeView >
				<View style={styles.container}>
					<KeyboardAwareScrollView >
						<View style={styles.contentPage}>
							<TopComponent version="0.0.1"/>
							<View style={{marginTop: 80}}>
								<RemindTop />
								<CommonInput style={styles.accountInput} returnKeyType='done'
									placeText='请输入账号' valueText={account} 
									inputOnChange={this._accountChange} 
								/>
								<CommonInput style={styles.passwordInput} returnKeyType='go'
									secureTextEntry={!showPassword} placeText='请输入密码' valueText={password} 
									inputOnChange={this._passwordChange} searchSubmit={this._loginClick}
									showEye={true} eyePress={this._passwordEyeClick} eyeOpen={showPassword}
								/>
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
		marginTop: 40,
		height: 76/2,
		backgroundColor: colorsCons.CUSTOM_BULE_COLOR,
		borderRadius: 3,
		justifyContent: 'center',
		alignItems: 'center'
	},
	loginBtnText: {
		fontSize: 16,
		color: '#fff'
	},
	accountInput: {
		marginTop: 26,
	},
	passwordInput: {
		marginTop: 20
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(CurrentPage)